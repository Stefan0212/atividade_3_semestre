import { Router } from "express";
import { CarroController } from "../controllers/CarroController";

const router = Router();

router.post("/", CarroController.create);
router.get("/", CarroController.list);
router.get("/:id", CarroController.getById);
router.put("/:id", CarroController.update);
router.delete("/:id", CarroController.delete);

export default router;
