import { Router } from "express";
import { PessoaController } from "../controllers/PessoaController";

const router = Router();

router.post("/", PessoaController.create);
router.get("/", PessoaController.list);
router.get("/:id", PessoaController.getById);
router.put("/:id", PessoaController.update);
router.delete("/:id", PessoaController.delete);

export default router;
