import { Request, Response } from 'express';
import { TokenService } from '../services/TokenService';

export class AuthController {
    static async generateToken(req: Request, res: Response): Promise<void> {
        console.log('Req ==>', req);
        try {
            const token = TokenService.createAccessToken("12345678");
            TokenService.saveTokenToEnv(token);
            res.json({ access_token: token});
        } catch (error) {
            res.status(500).send('Error generating token');
        }
    }
}