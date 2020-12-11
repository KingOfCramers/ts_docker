import express from "express";
import path from "path";
import dotenv from "dotenv";

// Pull in environment variables if in development.
// In production, these variables will be passed into the Docker image
// via a flag when running the docker command. But in development,
// we'll be running nodemon and ts-node outside of our docker image.
if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.resolve(__dirname, "..", ".env.development") });
}

const app = express();

app.get("/", (req, res) => res.send("Hello from Express!"));

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
