// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv/config");

// Express App
const app = express();

// App Middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

// Post routes
const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);

// Database connection
mongoose.connect(process.env.DATABASE_URL, () =>
  console.log("⚡[db]: Connected to the Database")
);

app.listen(process.env.PORT, () =>
  console.log(
    `⚡️[server]: Server is running at https://localhost:${process.env.PORT}`
  )
);
