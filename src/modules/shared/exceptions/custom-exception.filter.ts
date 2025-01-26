import { ExceptionFilter, Catch, ArgumentsHost, Logger, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(CustomExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const statusCode = exception instanceof HttpException ? exception.getStatus() : 500;
    const errorResponse =
      exception instanceof HttpException ? exception.getResponse() : { message: 'Internal server error', statusCode };
    const errorDetails = exception instanceof Error ? exception.stack : 'Details not available';

    this.logger.error(
      `
      ❌ Error Detected:
      ─────────────────────────────────────────────────────────
      🌐 Request: ${request.method} ${request.url}
      🛑 Response: ${JSON.stringify(errorResponse)}
      📝 Details: ${errorDetails}
      ─────────────────────────────────────────────────────────
      `,
    );

    response.status(statusCode).json(errorResponse);
  }
}
