const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ buah: ["mangga", "jeruk", "pisang", "STOBERI"], harga: 10000, berat: "1kg" });
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
