// Node modules
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
    const initialDb = await mongoose();
    if (initialDb) {
      res.send("Mongo Connected");
    }
  } catch (err) {
    res.send(err);
  }
});

export default app;
