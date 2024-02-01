const express = require("express");
const cors = require("cors");
const path = require("path");
const { connectToDatabase } = require("./db");
const loggerMiddleware = require("./middleware/middleware");
const app = express();
const port = process.env.PORT || 5000;
const mongodbUri = process.env.MONGODB_URI;

connectToDatabase(mongodbUri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(loggerMiddleware);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");

app.use("/login", loginRoute);
app.use("/signup", signupRoute);

app.use(express.static(path.join(__dirname, "public")));



app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
