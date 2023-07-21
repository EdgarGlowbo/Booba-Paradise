const express = require("express");
const db = require("./db");
const drinksRouter = require("./routes/drinks");
const categoryRouter = require("./routes/category");
const foodRouter = require("./routes/food");
const menuRouter = require("./routes/menu");
const locationRouter = require("./routes/location");
const newsRouter = require("./routes/newsFeed");

const app = express();
const PORT = process.env.PORT || 3000;
const checkConnection = async () => {
  try {
    await db.query("SELECT 1");
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err, "Connection unsuccesful");
  }
};
checkConnection();

// Solves CORS "Same-Origin" policy violation
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use("/drinks", drinksRouter);
app.use("/category", categoryRouter);
app.use("/menu", menuRouter);
app.use("/food", foodRouter);
app.use("/location", locationRouter);
app.use("/", newsRouter);
