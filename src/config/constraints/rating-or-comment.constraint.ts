import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'RatingOrComment', async: false })
export class RatingOrCommentConstraint implements ValidatorConstraintInterface {
  validate(_value: any, args: ValidationArguments): boolean {
    const object = args.object as any;
    return object.rating !== undefined || object.comment !== undefined;
  }

  defaultMessage(): string {
    return 'At least one of rating or comment must be provided.';
  }
}
