"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const connect_redis_1 = __importDefault(require("connect-redis"));
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const express_session_1 = __importDefault(require("express-session"));
const redis_1 = __importDefault(require("redis"));
const graphql_query_complexity_1 = require("graphql-query-complexity");
const constants_1 = require("../src/constants");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection();
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [__dirname + "/**/*.resolver.ts"],
    });
    const app = express_1.default();
    const RedisStore = connect_redis_1.default(express_session_1.default);
    const redisClient = redis_1.default.createClient();
    app.use(express_session_1.default({
        name: constants_1.COOKIE_NAME,
        store: new RedisStore({
            client: redisClient,
            disableTTL: true,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 100 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: "lax",
            secure: false,
        },
        secret: "dsadknfgoijjocnasjkdnioeoi(*^&*(uisdhfi(&89asf",
        resave: false,
        saveUninitialized: false,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => ({ req, res }),
        plugins: [
            {
                requestDidStart: () => ({
                    didResolveOperation({ request, document }) {
                        const complexity = graphql_query_complexity_1.getComplexity({
                            schema,
                            operationName: request.operationName,
                            query: document,
                            variables: request.variables,
                            estimators: [
                                graphql_query_complexity_1.fieldExtensionsEstimator(),
                                graphql_query_complexity_1.simpleEstimator({ defaultComplexity: 1 }),
                            ],
                        });
                        if (complexity > 50) {
                            throw new Error(`Sorry, too complicated query! ${complexity} `);
                        }
                        console.log("Used query complexity points:", complexity);
                    },
                }),
            },
        ],
    });
    apolloServer.applyMiddleware({
        app,
        cors: { origin: "http://localhost:3000", credentials: true },
    });
    app.listen(4000, () => {
        console.log("server started at http://localhost:4000/");
    });
});
main();
//# sourceMappingURL=index.js.map