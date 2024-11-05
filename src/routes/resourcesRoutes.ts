import express from 'express';
import { ResourceController } from '../controllers/ResourceController';

const router = express.Router();
router.get('/protected/resource', ResourceController.protectedResource);

export { router };
