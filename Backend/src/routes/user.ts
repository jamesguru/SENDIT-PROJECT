import { Router  } from 'express'
import {signIn,signUp,getusers} from '../controllers/users'

const router = Router();

router.get('/',getusers);

router.post('/signin',signIn);

router.post('/signup',signUp)


export default router;

