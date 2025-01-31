import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'ReleaseYearRange', async: false })
export class ReleaseYearRangeConstraint implements ValidatorConstraintInterface {
  validate(_value: any, args: ValidationArguments): boolean {
    const object = args.object as any;

    if (object.minReleaseYear && object.maxReleaseYear) return object.minReleaseYear <= object.maxReleaseYear;

    return true;
  }

  defaultMessage(): string {
    return 'maxPrice must be greater than or equal to minPrice';
  }
}
