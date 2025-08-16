import { Router } from "express";
import { AssociacaoController } from "../controllers/AssociacaoController";

const router = Router();

router.post("/", AssociacaoController.create);
router.get("/", AssociacaoController.list);
router.delete("/:id", AssociacaoController.delete);

export default router;
