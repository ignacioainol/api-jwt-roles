import { Router } from 'express';
const router = Router();
import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from '../controllers/products.controller';
import { isModerator, verifyToken, isAdmin } from '../middlewares';


router.get('/', verifyToken, getProducts);
router.get('/:productId', verifyToken, getProductById);
router.post('/', [verifyToken, isModerator], createProduct);
router.put('/:productId', [verifyToken, isAdmin], updateProductById);
router.delete('/:productId', [verifyToken, isAdmin], deleteProductById);

export default router;