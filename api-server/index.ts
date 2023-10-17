import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const PORT = 8080;

app.use(cors());
app.get("/", (req: Request, res: Response) => {
  console.log("REQUEST : " + req.method + " " + req.url);
  res.send("Server API Request Success");
});

app.listen(PORT, () => {
  console.log(`SERVER - ${PORT}PORT CONNECTED`);
});
