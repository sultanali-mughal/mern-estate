import express from 'express';
import { updateUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

//router.get('/test', test);
router.post('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;