import { Router } from 'express';
import { signin, signUp } from '../controllers/auth.controller';
const router = Router();

router.post('/signup', (signUp));
router.post('/signin', signin);

export default router;