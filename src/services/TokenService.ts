import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

export class TokenService {

    static createAccessToken(userId: string) {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
            expiresIn: process.env.JWT_EXPIRATION,
        });

        return token;
    }

    static verifyToken(token: string): boolean {
        const envToken = process.env.VALID_TOKEN;
        console.log('Token ==>', token);
        console.log('Env token ==>', envToken);
        if(envToken && token === envToken) {
            return true;
        }
        return false;
    }

    static saveTokenToEnv(token: string): void {
        const envPath = './.env';
        const newEnvContent = fs.readFileSync(envPath, 'utf-8').replace(
            /VALID_TOKEN=.*/,
            `VALID_TOKEN=${token}`
        );

        fs.writeFileSync(envPath, newEnvContent);
    }
}