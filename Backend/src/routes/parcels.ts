import Router from 'express';
import {getAllParcels,updateParcelStatus,softDelete,getParcelsForUser,addParcel} from '../controllers/parcels'
import { VerifyToken } from '../middlewares/verifytoken';

const router = Router();


router.get('/',VerifyToken,getAllParcels);
router.put('/:id',VerifyToken,updateParcelStatus)
router.put('/softdelete/:id',VerifyToken,softDelete)
router.get('/:id',VerifyToken,getParcelsForUser);
router.post('/',VerifyToken,addParcel)


export default router