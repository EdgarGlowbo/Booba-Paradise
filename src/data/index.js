// server/index.js
const express = require("express");
const menuItemsRouter = require("./routes/menuItems");
const locationRouter = require("./routes/location");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/menu", menuItemsRouter);
app.use("/location", locationRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
