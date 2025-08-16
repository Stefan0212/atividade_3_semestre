import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class PessoaController {
  static async create(req: Request, res: Response) {
    try {
      const { nome, email } = req.body;
      const pessoa = await prisma.pessoa.create({ data: { nome, email } });
      res.json(pessoa);
    } catch (err) {
      res.status(400).json({ error: "Erro ao criar pessoa" });
    }
  }

  static async list(req: Request, res: Response) {
    const pessoas = await prisma.pessoa.findMany();
    res.json(pessoas);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const pessoa = await prisma.pessoa.findUnique({ where: { id: Number(id) } });
    res.json(pessoa);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email } = req.body;
    const pessoa = await prisma.pessoa.update({
      where: { id: Number(id) },
      data: { nome, email }
    });
    res.json(pessoa);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    await prisma.pessoa.delete({ where: { id: Number(id) } });
    res.json({ message: "Pessoa excluída" });
  }
}
