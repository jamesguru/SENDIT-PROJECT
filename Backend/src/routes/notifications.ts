
import { Router } from 'express';
import {getNotifications,addNotifications,deleteNotifications} from '../controllers/notifications';
import { VerifyToken } from '../middlewares/verifytoken';



const router = Router();


router.get('/',VerifyToken,getNotifications);

router.post('/',VerifyToken,addNotifications);

router.delete('/:id',VerifyToken,deleteNotifications)

export default router;


