import {Router} from "express";
import {getClients} from "../controllers/index.js";

const router = Router();

router.get('/clients', getClients );

export default router;
