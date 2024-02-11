export class UpdateProductDto {
  private constructor(
    public readonly product_id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly stock_quantity: number
  ) {}

  static update(props: { [key: string]: any }): [string?, UpdateProductDto?] {
    const { product_id, name, description, price, stock_quantity } = props;

    if (!product_id) return ["Missing product id"];

    if (isNaN(product_id) || product_id <= 0) {
      return ["Invalid ID"];
    }

    return [
      undefined,
      new UpdateProductDto(
        product_id,
        name,
        description,
        price,
        stock_quantity
      ),
    ];
  }
}
