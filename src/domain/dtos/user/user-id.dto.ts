export class UserIdDto {
  private constructor(public readonly user_id: number) {}

  static get(props: { [key: string]: any }): [string?, UserIdDto?] {
    const { user_id } = props;

    if (!user_id || !Number.isInteger(user_id) || user_id <= 0)
      return ["Missing user id or invalid user id"];

    return [undefined, new UserIdDto(user_id)];
  }
}
