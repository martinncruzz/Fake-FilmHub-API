export class CreateProductDto {
  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly stock_quantity: number
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateProductDto?] {
    const { name, description, price, stock_quantity } = props;

    //ToDo add more validations

    if (!name) return ["Missing name"];

    if (!description) return ["Missing description"];

    if (!price) return ["Missing price"];

    if (!stock_quantity) return ["Missing stock"];

    return [
      undefined,
      new CreateProductDto(name, description, price, stock_quantity),
    ];
  }
}
