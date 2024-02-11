export class CreateCategoryDto {
  private constructor(public readonly name: string) {}

  static create(props: { [key: string]: any }): [string?, CreateCategoryDto?] {
    const { name } = props;

    //ToDo add more validations

    if (!name) return ["Missing name"];

    return [undefined, new CreateCategoryDto(name)];
  }
}
