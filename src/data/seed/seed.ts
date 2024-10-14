import { Prisma } from '@prisma/client';

import { prisma } from '../postgres';
import { seedData } from '..';
import { UserRole } from '../../domain/interfaces/shared/shared.interfaces';

(async () => {
  await seedDatabase();
})();

async function seedDatabase(): Promise<void> {
  try {
    await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        await resetDatabaseSequences(tx);
        await clearDatabase(tx);
        await initializeDatabaseWithSeedData(tx);
      },
      {
        timeout: 300000,
      },
    );

    console.log('Database seeding completed successfully.');
  } catch (error) {
    console.error('Error during database seeding:', error);
  }
}

async function resetDatabaseSequences(tx: Prisma.TransactionClient): Promise<void> {
  await Promise.all([
    tx.$executeRawUnsafe(`ALTER SEQUENCE "UserModel_user_id_seq" RESTART WITH 1;`),
    tx.$executeRawUnsafe(`ALTER SEQUENCE "GenreModel_genre_id_seq" RESTART WITH 1;`),
    tx.$executeRawUnsafe(`ALTER SEQUENCE "MovieModel_movie_id_seq" RESTART WITH 1;`),
    tx.$executeRawUnsafe(`ALTER SEQUENCE "ReviewModel_review_id_seq" RESTART WITH 1;`),
  ]);
}

async function clearDatabase(tx: Prisma.TransactionClient): Promise<void> {
  await Promise.all([
    tx.movieGenreModel.deleteMany(),
    tx.reviewModel.deleteMany(),
    tx.genreModel.deleteMany(),
    tx.movieModel.deleteMany(),
    tx.userModel.deleteMany(),
  ]);
}

async function initializeDatabaseWithSeedData(tx: Prisma.TransactionClient): Promise<void> {
  await Promise.all([
    tx.userModel.createMany({
      data: seedData.users.map((user) => ({
        ...user,
        role: UserRole.USER,
      })),
    }),
    tx.genreModel.createMany({
      data: seedData.genres,
    }),
  ]);

  const moviesCreation = seedData.movies.map(async (movie) => {
    const { genre_ids, ...movieData } = movie;

    return tx.movieModel.create({
      data: {
        ...movieData,
        genres: {
          createMany: {
            data: genre_ids.map((genre_id) => ({ genre_id })),
          },
        },
      },
    });
  });

  await Promise.all(moviesCreation);

  const reviewsCreation = seedData.reviews.map(async (review) => {
    return tx.reviewModel.create({ data: review });
  });

  await Promise.all(reviewsCreation);
}
