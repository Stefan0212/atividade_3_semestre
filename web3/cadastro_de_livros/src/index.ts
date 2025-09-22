import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Livro from './models/livro';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/atividade')
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((error) => {
        console.log('Erro de conexão com o MongoDB', error);
    });

// Rotas da API

// Criar um novo livro
app.post('/livros', async (req: Request, res: Response) => {
    try {
        const novoLivro = new Livro(req.body);
        const livroSalvo = await novoLivro.save();
        res.status(201).json(livroSalvo);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Ler todos os livros
app.get('/livros', async (req: Request, res: Response) => {
    try {
        const livros = await Livro.find();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Atualizar um livro
app.put('/livros/:id', async (req: Request, res: Response) => {
    try {
        const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!livro) {
            return res.status(404).send();
        }
        res.status(200).json(livro);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Deletar um livro
app.delete('/livros/:id', async (req: Request, res: Response) => {
    try {
        const livro = await Livro.findByIdAndDelete(req.params.id);
        if (!livro) {
            return res.status(404).send();
        }
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});