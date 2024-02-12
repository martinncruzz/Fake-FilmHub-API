import { Router } from "express";
import { MovieService } from "../services";
import { MovieController } from "../controllers/movie.controller";

export class MovieRoutes {
  static get routes(): Router {
    const router = Router();

    const movieService = new MovieService();
    const movieController = new MovieController(movieService);

    router.get("/get-movies", movieController.getMovies);
    router.get("/get-movie/:id", movieController.getMovieById);
    router.post("/create-movie", movieController.createMovie);
    router.put("/update-movie/:id", movieController.updateMovie);
    router.delete("/delete-movie/:id", movieController.deleteMovie);

    return router;
  }
}
