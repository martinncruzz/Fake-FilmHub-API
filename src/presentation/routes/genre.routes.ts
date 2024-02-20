import { Router } from "express";
import { GenreService } from "../services";
import { GenreController } from "../controllers/genre.controller";

export class GenreRoutes {
  static get routes(): Router {
    const router = Router();

    const genreService = new GenreService();
    const genreController = new GenreController(genreService);

    router.get("/get-genres", genreController.getGenres);
    router.get("/get-movies-by-genre/:id", genreController.getMoviesByGenre);
    router.get("/get-genre/:id", genreController.getGenreById);
    router.post("/create-genre", genreController.createGenre);
    router.put("/update-genre/:id", genreController.updateGenre);
    router.delete("/delete-genre/:id", genreController.deleteGenre);

    return router;
  }
}
