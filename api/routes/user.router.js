import express from 'express';
import { updateUser } from '../controllers/user.controller.js';

const router = express.Router();

//router.get('/test', test);
router.post('/update/:id', updateUser)

export default router;