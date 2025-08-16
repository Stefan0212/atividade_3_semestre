import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class AssociacaoController {
  static async create(req: Request, res: Response) {
    const { pessoaId, carroId } = req.body;
    const associacao = await prisma.pessoaPorCarro.create({
      data: { pessoaId, carroId }
    });
    res.json(associacao);
  }

  static async list(req: Request, res: Response) {
    const associacoes = await prisma.pessoaPorCarro.findMany({
      include: { pessoa: true, carro: true }
    });
    res.json(associacoes);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    await prisma.pessoaPorCarro.delete({ where: { id: Number(id) } });
    res.json({ message: "Associação excluída" });
  }
}
