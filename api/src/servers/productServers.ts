import { RepoProdcut } from "../databases/repository/RepoProduct";
import { IProduct } from "../models/dataProduct";

export class ProductServer {
  public async InsertProduct(data: IProduct) {
    const Repo = new RepoProdcut();
    const dataProduct = await Repo.InsertData(data);
    return dataProduct;
  }
  public async GetData() {
    const Repo = new RepoProdcut();
    return await Repo.GetAll();
  }
}
