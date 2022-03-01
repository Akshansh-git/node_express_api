// import express from 'express';
// import { v4 as uuidv4 } from 'uuid';

// const router = express.Router();

// let users = [];

// router.get('/', (req, res)=>{
//     console.log(users);
//     res.send(users);
// });

// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     const foundUser = users.find((user) => user.id === id);
//     res.send(foundUser);
// });

// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     users = users.filter((user) => user.id !== req.params.id);
//     res.send(`User with id ${id} is deleted from database`);
// });

// router.post('/', (req, res) => {
//     console.log(req.body);
//     const user = req.body;
//     const userId = uuidv4();

//     const userWithId = { ...user, id: userId};
//     users.push(userWithId);
//     res.send(`user with name ${req.body.firstName} is added in Database`);
//     console.log(`user with name ${req.body.firstName} is added in Database`);
// });

// export default router;

import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;