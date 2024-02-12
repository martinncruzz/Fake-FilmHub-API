export class CreateGenreDto {
  private constructor(public readonly name: string) {}

  static create(props: { [key: string]: any }): [string?, CreateGenreDto?] {
    const { name } = props;

    //ToDo add more validations

    if (!name) return ["Missing name"];

    return [undefined, new CreateGenreDto(name)];
  }
}
