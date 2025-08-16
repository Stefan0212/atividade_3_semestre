import express from "express";
import cors from "cors";
import carroRoutes from "./routes/carro";
import pessoaRoutes from "./routes/pessoa";
import associacaoRoutes from "./routes/associacao";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/carro", carroRoutes);
app.use("/pessoa", pessoaRoutes);
app.use("/associacao", associacaoRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
