export class ProductIdDto {
  private constructor(public readonly product_id: number) {}

  static get(props: { [key: string]: any }): [string?, ProductIdDto?] {
    const { product_id } = props;

    if (!product_id) return ["Missing product id"];

    if (isNaN(product_id) || product_id <= 0) {
      return ["Invalid ID"];
    }

    return [undefined, new ProductIdDto(product_id)];
  }
}
