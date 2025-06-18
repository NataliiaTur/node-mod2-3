import mongoose from 'mongoose';
import { Product } from '../db/product.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (productId) => {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return null;
  }

  const product = await Product.findById(productId);
  return product;
};

export const createProduct = async (payload) => {
  const product = await Product.create(payload);
  return product;
};

export const patchProduct = async (productId, payload, options = {}) => {
  const updatedProduct = await Product.findOneAndUpdate(
    { _id: productId },
    { $set: payload },
    { new: true, ...options },
  );
  return updatedProduct;
};

export const deleteProduct = async (productId) => {
  const deletedProduct = await Product.findOneAndDelete({
    _id: productId,
  });
  return deletedProduct;
};
