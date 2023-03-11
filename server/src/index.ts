import "dotenv/config";
import connectRedis from "connect-redis";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express, { Request, Response } from "express";
import { buildSchema } from "type-graphql"; // formatargumentationError is used to format error
import { createConnection } from "typeorm";
import session from "express-session";
import redis from "redis";
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from "graphql-query-complexity";
import { COOKIE_NAME } from "../src/constants";
declare module "express-session" {
  export interface SessionData {
    userId: number;
    subscribed: boolean;
  }
}
const main = async () => {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [__dirname + "/**/*.resolver.ts"],
  });
  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redisClient,
        disableTTL: true,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 100 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", //csrf
        secure: false, //process.env.NODE_ENV === "production",
      },
      secret: "dsadknfgoijjocnasjkdnioeoi(*^&*(uisdhfi(&89asf",
      resave: false,
      saveUninitialized: false,
    })
  );
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res }),
    plugins: [
      {
        requestDidStart: () => ({
          didResolveOperation({ request, document }) {
            const complexity = getComplexity({
              // Our built schema
              schema,
              // To calculate query complexity properly,
              // we have to check only the requested operation
              // not the whole document that may contains multiple operations
              operationName: request.operationName,
              // The GraphQL query document
              query: document,
              // The variables for our GraphQL query
              variables: request.variables,
              // Add any number of estimators. The estimators are invoked in order, the first
              // numeric value that is being returned by an estimator is used as the field complexity.
              // If no estimator returns a value, an exception is raised.
              estimators: [
                // Using fieldExtensionsEstimator is mandatory to make it work with type-graphql.
                fieldExtensionsEstimator(),
                // Add more estimators here...
                // This will assign each field a complexity of 1
                // if no other estimator returned a value.
                simpleEstimator({ defaultComplexity: 1 }),
              ],
            });
            // Here we can react to the calculated complexity,
            // like compare it with max and throw error when the threshold is reached.
            if (complexity > 60) {
              throw new Error(`Sorry, too complicated query! ${complexity} `);
            }
            // console.log("Used query complexity points:", complexity);
          },
        }),
      },
    ],
  });
  app.use("/webhook", (req: Request, res) => {
    // Handle the event
    // switch (event.type) {
    //   case "payment_intent.succeeded":
    //     const paymentIntent = event.data.object;
    //     // Then define and call a method to handle the successful payment intent.
    //     // handlePaymentIntentSucceeded(paymentIntent);
    //     break;
    //   case "payment_method.attached":
    //     const paymentMethod = event.data.object;
    //     // Then define and call a method to handle the successful attachment of a PaymentMethod.
    //     // handlePaymentMethodAttached(paymentMethod);
    //     break;
    //   // ... handle other event types
    //   default:
    //     console.log(`Unhandled event type ${event.type}`);
    // }

    // // Return a response to acknowledge receipt of the event
    res.json({ received: true });
  });
  apolloServer.applyMiddleware({
    app,

    cors: { origin: "http://localhost:3000", credentials: true },
  });

  app.listen(4000, () => {
    console.log("server started at http://localhost:4000/");
  });
};
main();
