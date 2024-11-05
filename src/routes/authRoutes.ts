import express from 'express';
import { AuthController } from '../controllers/AuthController';

const router = express.Router();

router.get('/auth/generate-token', AuthController.generateToken);

export { router };