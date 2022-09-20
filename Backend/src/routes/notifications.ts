
import { Router } from 'express';
import {getNotifications,addNotifications,deleteNotifications} from '../controllers/notifications';
import { VerifyToken } from '../middlewares/verifytoken';



const router = Router();


router.get('/',getNotifications);

router.post('/',addNotifications);

router.delete('/:id',deleteNotifications)

export default router;


