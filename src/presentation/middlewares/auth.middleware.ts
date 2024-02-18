import { NextFunction, Request, Response } from "express";
import { JWTAdapter } from "../../config";
import { prisma } from "../../data/postgres";

export class AuthMiddleware {
  static async validateJWT(req: Request, res: Response, next: NextFunction) {
    const authorization = req.header("Authorization");

    if (!authorization)
      return res.status(401).json({ error: "No token provided" });

    if (!authorization.startsWith("Bearer"))
      return res.status(401).json({ error: "Invalid Bearer token" });

    const token = authorization.split(" ").at(1) || ``;

    try {
      const payload = await JWTAdapter.validateToken<{ user_id: number }>(
        token
      );
      if (!payload) return res.status(401).json({ error: "Invalid token" });

      const user = await prisma.user.findFirst({
        where: {
          user_id: payload.user_id,
        },
      });
      if (!user) return res.status(401).json({ error: "Invalid token - User" });

      req.body.user_id = payload.user_id;
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
