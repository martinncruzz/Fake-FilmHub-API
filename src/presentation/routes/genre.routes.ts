import { Router } from "express";

import { GenreController, GenreService } from "..";

export class GenreRoutes {
  static get routes(): Router {
    const router = Router();

    const genreService = new GenreService();
    const genreController = new GenreController(genreService);

    router.get("/", genreController.getGenres);
    router.get("/:id/movies", genreController.getMoviesByGenre);
    router.get("/:id", genreController.getGenreById);
    router.post("/", genreController.createGenre);
    router.put("/:id", genreController.updateGenre);
    router.delete("/:id", genreController.deleteGenre);

    return router;
  }
}
