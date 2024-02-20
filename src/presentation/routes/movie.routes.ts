import { Router } from "express";
import { MovieService } from "../services";
import { MovieController } from "../controllers/movie.controller";

export class MovieRoutes {
  static get routes(): Router {
    const router = Router();

    const movieService = new MovieService();
    const movieController = new MovieController(movieService);

    router.get("/", movieController.getMovies);
    router.get("/:id", movieController.getMovieById);
    router.post("/", movieController.createMovie);
    router.put("/:id", movieController.updateMovie);
    router.delete("/:id", movieController.deleteMovie);

    return router;
  }
}
