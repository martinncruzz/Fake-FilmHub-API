import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export class PostgresDatabase {
  private static prisma: PrismaClient;
  private static readonly logger = new Logger(PostgresDatabase.name);

  static async connect() {
    try {
      if (!this.prisma) this.prisma = new PrismaClient();

      await this.prisma.$connect();

      this.logger.log('Connected successfully');
      return true;
    } catch (error) {
      this.logger.error('Connection failed');

      if (this.prisma) await this.prisma.$disconnect();
      throw error;
    }
  }

  static getClient() {
    if (!this.prisma) throw new Error('PrismaClient not connected, call connect() first');
    return this.prisma;
  }
}
