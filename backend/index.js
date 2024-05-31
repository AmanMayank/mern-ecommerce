const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");

dotenv.config();

const app = express();
app.use(cors());
app.use("/api", router);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connected to db");
    console.log(`Server running on port ${PORT}`);
  });
});
