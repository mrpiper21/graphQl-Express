import express from "express";
import dotenv from "dotenv";
import ruru from "ruru/server";
import morgan from "morgan";
import { yoga } from "./graphql/schema/schema.js";
const port = process.env.PORT || 5000;
dotenv.config();
const app = express();
app.use(morgan("dev"));
app.all("/graphql", yoga);
app.get("/", (_req, res) => {
    res.type("html");
    res.end(ruru.ruruHTML({ endpoint: "/graphql" }));
});
app.listen(port, console.log("Server started on Port: " + port));
