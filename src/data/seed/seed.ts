import { UserRole } from "@prisma/client";

import { prisma } from "../postgres";
import { seedData } from "..";

(async () => {
  await main();
})();

async function main() {
  await prisma.$transaction([
    prisma.user.deleteMany(),
    prisma.movieGenre.deleteMany(),
    prisma.genre.deleteMany(),
    prisma.movie.deleteMany(),
  ]);

  await prisma.$transaction([
    prisma.user.createMany({
      data: seedData.users.map((user) => ({ ...user, role: UserRole.user })),
    }),

    prisma.genre.createMany({
      data: seedData.genres.map((genre) => genre),
    }),
  ]);

  for (const movie of seedData.movies) {
    const { genre_ids, ...movieData } = movie;

    await prisma.movie.create({
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
