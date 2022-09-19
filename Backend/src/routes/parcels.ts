import Router from 'express';
import {getAllParcels,updateParcelStatus,softDelete,getParcelsForUser,addParcel} from '../controllers/parcels'
import { VerifyToken } from '../middlewares/verifytoken';

const router = Router();


router.get('/', getAllParcels);
router.put('/:id',updateParcelStatus)
router.put('/softdelete/:id',softDelete)
router.post('/userparcels',getParcelsForUser);
router.post('/',addParcel)


export default router