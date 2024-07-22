import { dataModel, IProduct } from "../../models/dataProduct";

export class RepoProdcut {
  // handle with database
  public async InsertData(data: IProduct) {
    const { name, description, price } = data;

    // Create a new product instance
    const newProduct: IProduct = new dataModel({
      name,
      description,
      price,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    return savedProduct;
  }

  public async GetAll() {
    const products = await dataModel.find();
    return products;
  }
}
