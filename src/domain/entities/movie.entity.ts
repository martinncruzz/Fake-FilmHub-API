import { PartialGenreEntity, PartialReviewEntity } from '..';

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
    public genres?: PartialGenreEntity[],
    public reviews?: PartialReviewEntity[],
  ) {}
}
