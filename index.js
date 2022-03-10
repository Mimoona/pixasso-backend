const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//require("dotenv").config();
const PORT = process.env.PORT || 4000;
const path = require('path');
// give absolute path of .env 
require('dotenv').config({ path: path.resolve(__dirname, './.env') });


const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const sketchRouter = require("./routes/sketch");
const postRouter = require("./routes/post");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-------------MongoDb connection-------------
const uri = process.env.MONGO_DB
//console.log(process.env.MONGO_DB)
mongoose.connect(uri, {useNewUrlParser: true}, (err) => {
  if (err) {
  console.log("error in connection");
  } else {
  console.log("mongodb is connected");
  }
});


app.get("/", (req, res) => res.send("Hello World! Welcome to Pixasso..."));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/sketch", sketchRouter);
app.use("/api/post", postRouter);

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
