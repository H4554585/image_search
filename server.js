const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

const PEXELS_KEY = "80kVqkLUCiN99LrJTdqp312Ja2Ul8nVtG1obCGn9kHbCts36SFxLu6sG";

app.use(cors());

// 代理搜尋 API
app.get("/api/search", async (req, res) => {
  const { query, page = 1, per_page = 15 } = req.query;
  const url = query
    ? `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=${per_page}`
    : `https://api.pexels.com/v1/curated?page=${page}&per_page=${per_page}`;

  try {
    const result = await axios.get(url, {
      headers: { Authorization: PEXELS_KEY },
    });
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: "API error", detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
