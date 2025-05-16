const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const connectToMongo = require("./connect.cjs");
const path = require("path");

dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Corrected CORS middleware
app.use(
  cors({
    origin: "https://frontend-zr2n.onrender.com/", // 🔥 NO TRAILING SLASH
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Optional: Only needed if you're manually handling OPTIONS requests
// app.options("*", cors()); ← You can remove this

// Middleware
app.use(express.json({ limit: "4mb" }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
connectToMongo();

// Routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
