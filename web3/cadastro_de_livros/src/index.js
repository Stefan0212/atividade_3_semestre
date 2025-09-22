"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const livro_1 = __importDefault(require("./models/livro"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// Conexão com o MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/crud_livros')
    .then(() => {
    console.log('Conectado ao MongoDB');
})
    .catch((error) => {
    console.log('Erro de conexão com o MongoDB', error);
});
// Rotas da API
// Criar um novo livro
app.post('/livros', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const novoLivro = new livro_1.default(req.body);
        const livroSalvo = yield novoLivro.save();
        res.status(201).json(livroSalvo);
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
// Ler todos os livros
app.get('/livros', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livros = yield livro_1.default.find();
        res.status(200).json(livros);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
// Atualizar um livro
app.put('/livros/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livro = yield livro_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!livro) {
            return res.status(404).send();
        }
        res.status(200).json(livro);
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
// Deletar um livro
app.delete('/livros/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livro = yield livro_1.default.findByIdAndDelete(req.params.id);
        if (!livro) {
            return res.status(404).send();
        }
        res.status(200).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
