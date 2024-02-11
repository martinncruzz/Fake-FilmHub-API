export class UpdateUserDto {
  private constructor(
    public readonly user_id: number,
    public readonly fullname?: string,
    public readonly email?: string,
    public readonly password?: string,
    public readonly avatar?: string
  ) {}

  static update(props: { [key: string]: any }): [string?, UpdateUserDto?] {
    const { user_id, fullname, email, password, avatar } = props;

    if (!user_id) return ["Missing user id"];

    if (isNaN(user_id) || user_id <= 0) {
      return ["Invalid ID"];
    }

    return [
      undefined,
      new UpdateUserDto(user_id, fullname, email, password, avatar),
    ];
  }
}
