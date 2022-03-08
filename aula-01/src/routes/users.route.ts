import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';
// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

const usersRoute = Router();

// GET - READ
usersRoute.get('/', (req: Request, res: Response, next: NextFunction) => {
    const users = [{userName: 'joan'}];
    res.status(StatusCodes.OK).send(users);
});


usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;
    res.status(StatusCodes.OK).send({ modifiedUser })
});

// POST - CREATE
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
})


// PUT - UPDATE 
usersRoute.put('/users:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid })
});


// DELETE - DELETE

usersRoute.delete('/users:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);

});

export default usersRoute;
