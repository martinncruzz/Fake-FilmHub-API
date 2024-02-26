import express, { Router } from "express";
import cors from "cors";
import morgan from "morgan";
import { envs } from "../config";

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private serverListener?: any;
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    /* Middlewares */
    this.app.use(
      cors({
        origin: [envs.WEBSERVICE_URL],
      })
    );
    this.app.use(morgan("dev"));
    this.app.use(express.json());

    this.app.use(express.json());

    /* Routes */
    this.app.use(this.routes);

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  public close() {
    this.serverListener?.close();
  }
}
