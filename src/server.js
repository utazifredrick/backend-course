import express from "express";

// IMPORT ROUTES
import movieRoutes from "./routes/movieRoutes.js";
const app = express();

// API ROUTES
app.use("/movies", movieRoutes);
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
