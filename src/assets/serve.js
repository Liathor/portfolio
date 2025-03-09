const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// Serve static files (including PDFs) from the "public" folder
app.use("/files", express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.send("Backend is running...");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });