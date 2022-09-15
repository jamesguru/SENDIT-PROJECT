
import { Router } from 'express';
import {getNotifications,addNotifications,deleteNotifications} from '../controllers/notifications';


const router =Router();


router.get('/',getNotifications);

router.post('/',addNotifications);

router.delete('/',deleteNotifications)

export default router;


