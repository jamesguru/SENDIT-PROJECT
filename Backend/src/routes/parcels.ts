import Router from 'express';
import {getAllParcels,updateParcelStatus,softDelete,getParcelsForUser,addParcel} from '../controllers/parcels'

const router = Router();


router.get('/',getAllParcels);
router.put('/:id',updateParcelStatus)
router.put('/softdelete/:id',softDelete)
router.get('/:id',getParcelsForUser);
router.post('/',addParcel)


export default router