import { Router } from "express";
import { UserRoutes } from "./routes/user.routes";
import { MovieRoutes } from "./routes/movie.routes";
import { GenreRoutes } from "./routes/genre.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/users", UserRoutes.routes);
    router.use("/api/movies", MovieRoutes.routes);
    router.use("/api/genres", GenreRoutes.routes);

    return router;
  }
}
