export class GetProductDto {
  private constructor(public readonly product_id: number) {}

  static get(props: { [key: string]: any }): [string?, GetProductDto?] {
    const { product_id } = props;

    if (!product_id) return ["Missing product id"];

    return [undefined, new GetProductDto(product_id)];
  }
}
