import express from "express";
import bodyParser from "body-parser";
import mongoose from "../lib/mongoose";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// @route Get api/connect
// @desc Tests post route
// @access Public
app.get("*", async (req, res) => {
  try {
    console.log("hello world");
    const db = await mongoose();
    console.log(db);
    if (db) {
      res.send("Mongo Connected");
    }
  } catch (err) {
    res.send(err);
  }
});

export default app;
