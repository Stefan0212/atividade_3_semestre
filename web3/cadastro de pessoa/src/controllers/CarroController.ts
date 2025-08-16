import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class CarroController {
  static async create(req: Request, res: Response) {
    try {
      const { modelo, marca, ano } = req.body;
      const carro = await prisma.carro.create({ data: { modelo, marca, ano } });
      res.json(carro);
    } catch (err) {
      res.status(400).json({ error: "Erro ao criar carro" });
    }
  }

  static async list(req: Request, res: Response) {
    const carros = await prisma.carro.findMany();
    res.json(carros);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const carro = await prisma.carro.findUnique({ where: { id: Number(id) } });
    res.json(carro);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { modelo, marca, ano } = req.body;
    const carro = await prisma.carro.update({
      where: { id: Number(id) },
      data: { modelo, marca, ano }
    });
    res.json(carro);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    await prisma.carro.delete({ where: { id: Number(id) } });
    res.json({ message: "Carro excluído" });
  }
}
