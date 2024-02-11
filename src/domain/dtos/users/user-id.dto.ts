export class UserIdDto {
  private constructor(public readonly user_id: number) {}

  static get(props: { [key: string]: any }): [string?, UserIdDto?] {
    const { user_id } = props;

    if (!user_id) return ["Missing user id"];

    if (isNaN(user_id) || user_id <= 0) {
      return ["Invalid ID"];
    }

    return [undefined, new UserIdDto(user_id)];
  }
}
