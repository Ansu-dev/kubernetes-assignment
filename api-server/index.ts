import express, { Express, Response } from "express";
import cors from "cors";

const app: Express = express();
const PORT = 8080;

app.use(cors());
app.get("/", (_, res: Response) => {
  res.send(new Date());
});

app.listen(PORT, () => {
  console.log(`SERVER - ${PORT}PORT CONNECTED`);
});
