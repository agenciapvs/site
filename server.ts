import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes (Vibe Mode: Ready for your custom logic)
  app.get("/api/health", (req, res) => {
    res.json({ status: "vibrant", message: "PVS Backend is alive and kicking!" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    
    // Serve visual.html specifically if requested
    app.get("/visual", (req, res) => {
      res.sendFile(path.join(process.cwd(), "visual.html"));
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    app.get("/visual", (req, res) => {
      res.sendFile(path.join(process.cwd(), "visual.html"));
    });

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`
🚀 PVS Vibe Server running on http://localhost:${PORT}
✨ Mode: ${process.env.NODE_ENV || 'development'}
🔥 Ready for manual edits and future scaling.
    `);
  });
}

startServer();
