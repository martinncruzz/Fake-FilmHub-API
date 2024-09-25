import { prisma } from "../postgres";
import { seedData } from "..";
import { UserRole } from "../../domain/interfaces/shared/shared.interfaces";

(async () => {
  await main();
})();

async function main() {
  await prisma.$transaction([
    prisma.userModel.deleteMany(),
    prisma.movieGenreModel.deleteMany(),
    prisma.genreModel.deleteMany(),
    prisma.movieModel.deleteMany(),
  ]);

  await prisma.$transaction([
    prisma.userModel.createMany({
      data: seedData.users.map((user) => ({ ...user, role: UserRole.USER })),
    }),

    prisma.genreModel.createMany({
      data: seedData.genres.map((genre) => genre),
    }),
  ]);

  for (const movie of seedData.movies) {
    const { genre_ids, ...movieData } = movie;

    await prisma.movieModel.create({
      data: {
        ...movieData,
        genres: {
          createMany: {
            data: genre_ids.map((genre_id) => ({ genre_id })),
          },
        },
      },
    });
  }

  console.log("SEEDED");
}
