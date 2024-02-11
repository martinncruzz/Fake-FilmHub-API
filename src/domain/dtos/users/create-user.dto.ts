export class CreateUserDto {
  private constructor(
    public readonly fullname: string,
    public readonly email: string,
    public readonly password: string,
    public readonly avatar: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateUserDto?] {
    const { fullname, email, password, avatar } = props;

    //ToDo add more validations

    if (!fullname) return ["Missing fullname"];

    if (!email) return ["Missing email"];

    if (!password) return ["Missing password"];

    if (!avatar) return ["Missing avatar"];

    return [undefined, new CreateUserDto(fullname, email, password, avatar)];
  }
}
