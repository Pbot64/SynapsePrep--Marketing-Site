import express from "express";

const app = express();

app.get("*", (req, res) => {
  res.send("works!");
});

export default app;
