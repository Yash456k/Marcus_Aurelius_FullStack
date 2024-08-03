require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { checkAuth } = require("./middleware/auth");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

const staticRouter = require("./routes/staticRouter");
const userRoute = require("./routes/user");

app.use("/", checkAuth, staticRouter);
app.use("/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`listening on PORT : ${process.env.PORT}`);
});
