import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  patchProductController,
} from '../controllers/products.js';

const router = express.Router();

router.get('/products', ctrlWrapper(getAllProductsController));
router.get('/products/:productId', ctrlWrapper(getProductByIdController));
router.post('/products', ctrlWrapper(createProductController));
router.patch('/products/:productId', ctrlWrapper(patchProductController));
router.delete('/products/:productId', ctrlWrapper(deleteProductController));

export const productsRouter = router;
