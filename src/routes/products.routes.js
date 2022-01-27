import { Router } from 'express';
const router = Router();
import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from '../controllers/products.controller';
import { verifyToken } from '../middlewares';

router.get('/', verifyToken, getProducts);
router.post('/', verifyToken, createProduct);
router.get('/:productId', getProductById);
router.put('/:productId', updateProductById);
router.delete('/:productId', deleteProductById);

export default router;