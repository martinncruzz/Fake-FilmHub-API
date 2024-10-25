import { CustomError } from '..';

export class ErrorHandler {
  static handleError(error: unknown): { statusCode: number; message: string } {
    if (error instanceof CustomError) {
      return { statusCode: error.statusCode, message: error.message };
    }

    return { statusCode: 500, message: 'Internal server error' };
  }
}
