import { Request, Response } from 'express';
import { TokenService } from '../services/TokenService';

export class ResourceController {
    static protectedResource(req: Request, res: Response): any {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).send({ message:'Access denied. No token provided.'});
        }
        const isValidToken = TokenService.verifyToken(token);

        if (!isValidToken) {
            return res.status(401).send({ message:'Invalid or expired token'});
        }

        return res.json({ message: 'This is a protected resource' });
    }
}
