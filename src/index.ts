import express from "express";
import path from "path";
import dotenv from "dotenv";

// Configure environemnt variables
dotenv.config({
  path: path.resolve(__dirname, "..", `.env.${process.env.NODE_ENV}`),
});

const app = express();

app.get("/", (req, res) => res.send("Hello from Express!"));

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
