import jwt from "jsonwebtoken";

import { envs } from ".";

const JWT_SEED = envs.JWT_SEED;

export class JWTAdapter {
  static async generateToken(
    payload: Record<string, any>,
    duration: string = "20d"
  ): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(
        payload,
        JWT_SEED,
        {
          expiresIn: duration,
        },
        (err, token) => {
          if (err) return resolve(null);
          resolve(token ?? null);
        }
      );
    });
  }

  static validateToken<T>(token: string): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(token, JWT_SEED, (err, decoded) => {
        if (err) return resolve(null);
        resolve(decoded as T);
      });
    });
  }
}
