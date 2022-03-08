import express,  {Request, Response, NextFunction} from 'express';

// O express é um gerenciador de rotas para gerenciar rotas http
const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'bar'});
});

app.listen(3000, () => {
    console.log("Aplicação executando na porta 3000")
});