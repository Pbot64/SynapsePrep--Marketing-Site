// // Node Modules
// const express = require("express");
// const next = require("next");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// // Required for Next.js
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// // Uxe Routes
// const contact = require("./routes/api/contact");
// const preferredContact = require("./routes/api/preferredContact");
// const test = require("./routes/api/test");
// const zip = require("./routes/api/zip");
// const purchase = require("./routes/api/purchase");
// const connect = require("./routes/api/connect");

// app
//   .prepare()
//   .then(() => {
//     const server = express();
//     console.log("hello your in server");

//     server.use(bodyParser.urlencoded({ extended: false }));
//     server.use(bodyParser.json());

//     // DB Config
//     const db = require("./config/keys").mongoURI;

//     // Connect to mongoDB
//     mongoose
//       .connect(db)
//       .then(() => console.log("MongoDB Connected"))
//       .catch(err => console.log(err));

//     // View engine setup
//     server.set("view engine", "pug");
//     server.set("views", __dirname + "/emails");

//     // Routes
//     server.use("/api/contact", contact);
//     server.use("/api/preferredContact", preferredContact);
//     server.use("/api/test", test);
//     server.use("/api/zip", zip);
//     server.use("/api/purchase", purchase);
//     server.use("/api/connect", connect);

//     server.get("/api/test2", (req, res) => {
//       res.render("html");
//     });

//     server.get("*", (req, res) => {
//       return handle(req, res);
//     });

//     const port = process.env.PORT || 3000;

//     server.listen(port, err => {
//       if (err) throw err;
//       console.log(` Ready on ${port}`);
//     });
//   })
//   .catch(ex => {
//     console.error(ex.stack);
//     process.exit(1);
//   });
