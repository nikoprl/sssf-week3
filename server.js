import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schemas/index";
import resolvers from "./resolvers/index";
import dotenv from "dotenv";
import express from "express";
import connectMongo from "./db/db";

dotenv.config();

(async () => {
  try {
    const conn = await connectMongo();
    if (conn) {
      console.log("✅ connect successful");
    } else {
      throw new Error("error while connecting db");
    }

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const app = express();

    await server.start();

    server.applyMiddleware({ app });

    app.listen({ port: process.env.PORT || 3000 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:3000${server.graphqlPath}`
      )
    );
  } catch (e) {
    console.log("server error: " + e.message);
  }
})();
