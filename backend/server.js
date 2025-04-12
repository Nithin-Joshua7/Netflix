import express from "express";
import authRoutes from "./routes/auth.route.js";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// 🛡️ CORS Middleware - should come before any route or parser
app.use(cors({
  origin: "https://netflix-ajta.onrender.com",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// 
app.options("*", cors());

// 
app.use(express.json());
app.use(cookieParser());

// 
app.use("/api/v1/auth", authRoutes);

// 🔌 Connect DB before starting server
connectDb().then(() => {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(` Server started on port ${PORT}`);
  });
});
