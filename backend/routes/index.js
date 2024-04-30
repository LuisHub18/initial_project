import {Router} from "express";
import {getClients, getClientById, createClient, updateClient} from "../controllers/index.js";

const router = Router();

router.get('/api/clients', getClients );
router.get('/api/clients/:id', getClientById );
router.post('/api/clients', createClient );
router.put('/api/clients/:id', updateClient );

export default router;
