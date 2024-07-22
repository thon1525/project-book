// src/models/Product.ts

import { Document, Schema, model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
}

// Define Mongoose schema for Product
const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

// Create and export the model
export const dataModel = model<IProduct>("Product", ProductSchema);
