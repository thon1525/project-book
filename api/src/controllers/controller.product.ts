import { IProduct } from "../models/dataProduct";
import { ProductServer } from "../servers/productServers";

export class controllerProduct {
  public async GetData() {
    const servies = new ProductServer();
    return await servies.GetData();
  }
  public async CreateData(data: IProduct) {
    const servies = new ProductServer();
    return await servies.InsertProduct(data);
  }
}
