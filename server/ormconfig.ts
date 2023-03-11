import {} from "argon2";
export default [
  {
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "12345678",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [__dirname + "/src/entity/*.ts"],
  },
];
