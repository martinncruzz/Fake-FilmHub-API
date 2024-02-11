export class UpdateCategoryDto {
  private constructor(
    public readonly category_id: number,
    public readonly name: string
  ) {}

  static update(props: { [key: string]: any }): [string?, UpdateCategoryDto?] {
    const { category_id, name } = props;

    if (!category_id) return ["Missing category id"];

    if (isNaN(category_id) || category_id <= 0) {
      return ["Invalid ID"];
    }

    return [undefined, new UpdateCategoryDto(category_id, name)];
  }
}
