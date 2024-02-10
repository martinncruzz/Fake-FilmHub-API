export class DeleteProductDto {
  private constructor(public readonly product_id: number) {}

  static delete(props: { [key: string]: any }): [string?, DeleteProductDto?] {
    const { product_id } = props;

    if (!product_id) return ["Missing product id"];

    return [undefined, new DeleteProductDto(product_id)];
  }
}
