
const express = require("express");
const Connection = require("./backend/database/db");
const router = require("./backend/routes/api");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "frontend/public"))); 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "frontend/views"));


app.get("/", (req, res) => {
  res.render("index", { fileUrl: null });
});

app.use("/", router);

app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send("internal server error, see index.js line 25");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port: ${PORT}`);

  try {
    await Connection(); 
    console.log(" Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); 
  }
});
