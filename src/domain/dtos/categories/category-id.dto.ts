export class CategoryIdDto {
  private constructor(public readonly category_id: number) {}

  static get(props: { [key: string]: any }): [string?, CategoryIdDto?] {
    const { category_id } = props;

    if (!category_id) return ["Missing category id"];

    if (isNaN(category_id) || category_id <= 0) {
      return ["Invalid ID"];
    }

    return [undefined, new CategoryIdDto(category_id)];
  }
}
