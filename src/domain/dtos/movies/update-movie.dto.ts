export class UpdateMovieDto {
  private constructor(
    public readonly movie_id: number,
    public readonly title?: string,
    public readonly description?: string,
    public readonly release_year?: number,
    public readonly director?: string,
    public readonly duration_minutes?: number,
    public readonly trailer_link?: string,
    public readonly poster_image_url?: string
  ) {}

  static update(props: { [key: string]: any }): [string?, UpdateMovieDto?] {
    const {
      movie_id,
      title,
      description,
      release_year,
      director,
      duration_minutes,
      trailer_link,
      poster_image_url,
    } = props;

    if (!movie_id) return ["Missing product id"];

    if (isNaN(movie_id) || movie_id <= 0) {
      return ["Invalid ID"];
    }

    return [
      undefined,
      new UpdateMovieDto(
        movie_id,
        title,
        description,
        release_year,
        director,
        duration_minutes,
        trailer_link,
        poster_image_url
      ),
    ];
  }
}
