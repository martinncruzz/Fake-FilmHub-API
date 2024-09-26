-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "UserModel" (
    "user_id" SERIAL NOT NULL,
    "fullname" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "avatar" VARCHAR(255) NOT NULL,
    "role" "UserRole" NOT NULL,

    CONSTRAINT "UserModel_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "MovieModel" (
    "movie_id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "release_year" INTEGER NOT NULL,
    "director" VARCHAR(100) NOT NULL,
    "duration_minutes" INTEGER NOT NULL,
    "trailer_link" VARCHAR(255) NOT NULL,
    "poster_image_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "MovieModel_pkey" PRIMARY KEY ("movie_id")
);

-- CreateTable
CREATE TABLE "GenreModel" (
    "genre_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "GenreModel_pkey" PRIMARY KEY ("genre_id")
);

-- CreateTable
CREATE TABLE "MovieGenreModel" (
    "movie_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,

    CONSTRAINT "MovieGenreModel_pkey" PRIMARY KEY ("movie_id","genre_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserModel_email_key" ON "UserModel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GenreModel_name_key" ON "GenreModel"("name");

-- AddForeignKey
ALTER TABLE "MovieGenreModel" ADD CONSTRAINT "MovieGenreModel_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "MovieModel"("movie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieGenreModel" ADD CONSTRAINT "MovieGenreModel_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "GenreModel"("genre_id") ON DELETE RESTRICT ON UPDATE CASCADE;
