import { PartialMovieEntity, PartialUserEntity } from '..';

export class ReviewEntity {
  constructor(
    public review_id: number,
    public rating: number | null,
    public comment: string | null,
    public user_id: number,
    public movie_id: number,
    public user?: PartialUserEntity,
    public movie?: PartialMovieEntity,
  ) {}
}
