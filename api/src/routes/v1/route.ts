import express, { Request, Response } from "express";
import { controllerProduct } from "../../controllers/controller.product";
import { dataModel } from "../../models/dataProduct";

const routeProduct = express.Router();
const Controller = new controllerProduct();
routeProduct.get("/getdata", async (req: Request, res: Response) => {
  const products = await dataModel.find();
  return res.status(200).json(products);
});

routeProduct.post("/create", async (req: Request, res: Response) => {
  const dataRq = req.body;
  const dataAlready = await Controller.CreateData(dataRq);

  return res.status(201).json(dataAlready);
});
export default routeProduct;
