import express, { Request, Response } from "express";
import routeProduct from "./routes/v1/route";
export const app = express();
import cors from "cors";

app.get("/", (req: Request, Res: Response) => {
  Res.send("hell thon welcome data");
});
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "200mb" }));
app.use("/product", routeProduct);
