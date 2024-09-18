import { MovieEntity } from "..";

export class GenreEntity {
  constructor(
    public genre_id: number,
    public name: string,
    public image: string,
    public movies?: MovieEntity[]
  ) {}

  static fromObject(object: Record<string, any>): GenreEntity {
    const { genre_id, name, image, movies } = object;

    //TODO add validations in all fields, and change the record typing from any to unknown

    return new GenreEntity(
      genre_id,
      name,
      image,
      movies ? movies.map(MovieEntity.fromObject) : undefined
    );
  }
}
