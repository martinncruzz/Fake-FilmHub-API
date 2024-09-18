import { GenreEntity } from "..";

export class MovieEntity {
  constructor(
    public movie_id: number,
    public title: string,
    public description: string,
    public release_year: number,
    public director: string,
    public duration_minutes: number,
    public trailer_link: string,
    public poster_image_url: string,
    public genres?: GenreEntity[]
  ) {}

  static fromObject(object: Record<string, any>): MovieEntity {
    const {
      movie_id,
      title,
      description,
      release_year,
      director,
      duration_minutes,
      trailer_link,
      poster_image_url,
      genres,
    } = object;

    //TODO add validations in all fields, and change the record typing from any to unknown

    return new MovieEntity(
      movie_id,
      title,
      description,
      release_year,
      director,
      duration_minutes,
      trailer_link,
      poster_image_url,
      genres ? genres.map(GenreEntity.fromObject) : undefined
    );
  }
}
