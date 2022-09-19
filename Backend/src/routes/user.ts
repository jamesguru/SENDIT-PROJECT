import { Router  } from 'express'
import {signIn,signUp,getusers} from '../controllers/users'
import { VerifyToken } from '../middlewares/verifytoken';

const router = Router();

router.get('/',VerifyToken,getusers);

router.post('/signin',signIn);

router.post('/signup',signUp)


export default router;

