import createHttpError from 'http-errors';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  patchProduct,
} from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const products = await getAllProducts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res, next) => {
  const { productId } = req.params;
  const product = await getProductById(productId);

  if (!product) {
    return next(createHttpError(404, 'Product not found'));
  }

  res.json({
    status: 200,
    message: `Successfully found product with ${productId}`,
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const patchProductController = async (req, res) => {
  const { productId } = req.params;
  const payload = req.body;

  const updatedProduct = await patchProduct(productId, payload);

  if (!updatedProduct) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: updatedProduct,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  const deletedProduct = await deleteProduct(productId);

  if (!deletedProduct) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(204).send();
};
