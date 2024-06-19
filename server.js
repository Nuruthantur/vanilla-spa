import express from "express";
import { resolve, dirname } from "path";

import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use("/static", express.static(resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
  res.sendFile(resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
);
