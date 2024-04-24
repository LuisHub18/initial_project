import {Router} from "express";
import * as controller from "../controllers/index.js";

const router = Router();

router.get('/', () =>
    console.log("Get out here")
);

router.get('/clients', controller.getClients);

export default router;
