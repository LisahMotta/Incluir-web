import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Rota para cadastrar aluno
app.post('/alunos', async (req, res) => {
  try {
    const {
      nome,
      dataNascimento,
      serie,
      responsaveis,
      email,
      login
    } = req.body;

    const aluno = await prisma.aluno.create({
      data: {
        nome,
        data_nascimento: new Date(dataNascimento),
        serie,
        responsaveis,
        email,
        login
      }
    });

    res.status(201).json(aluno);
  } catch (error) {
    console.error('Erro ao cadastrar aluno:', error);
    res.status(500).json({ error: 'Erro ao cadastrar aluno' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 