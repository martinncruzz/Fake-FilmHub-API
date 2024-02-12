export class CreateMovieDto {
  private constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly release_year: number,
    public readonly director: string,
    public readonly duration_minutes: number,
    public readonly trailer_link: string,
    public readonly poster_image_url: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateMovieDto?] {
    const {
      title,
      description,
      release_year,
      director,
      duration_minutes,
      trailer_link,
      poster_image_url,
    } = props;

    //ToDo add more validations

    if (!title) return ["Missing title"];

    if (!description) return ["Missing description"];

    if (!release_year) return ["Missing release year"];

    if (!director) return ["Missing director"];

    if (!duration_minutes) return ["Missing duration minutes"];

    if (!trailer_link) return ["Missing trailer link"];

    if (!poster_image_url) return ["Missing poster image url"];

    return [
      undefined,
      new CreateMovieDto(
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
