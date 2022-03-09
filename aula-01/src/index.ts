import express from 'express';
import errorHandler from './middleware/error-handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';


// O express é um gerenciador de rotas para gerenciar rotas http
const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Configurações de Rotas 
app.use(usersRoute);
app.use(statusRoute);

// Configurações dos Handlers de Erro

app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
    console.log("Aplicação executando na porta 3000")
});