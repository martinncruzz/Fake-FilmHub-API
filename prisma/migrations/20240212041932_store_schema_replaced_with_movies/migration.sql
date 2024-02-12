/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order_details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shopping_cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'user');

-- DropForeignKey
ALTER TABLE "order_details" DROP CONSTRAINT "order_details_order_id_fkey";

-- DropForeignKey
ALTER TABLE "order_details" DROP CONSTRAINT "order_details_product_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_user_id_fkey";

-- DropForeignKey
ALTER TABLE "product_categories" DROP CONSTRAINT "product_categories_category_id_fkey";

-- DropForeignKey
ALTER TABLE "product_categories" DROP CONSTRAINT "product_categories_product_id_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_product_id_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_user_id_fkey";

-- DropForeignKey
ALTER TABLE "shopping_cart" DROP CONSTRAINT "shopping_cart_product_id_fkey";

-- DropForeignKey
ALTER TABLE "shopping_cart" DROP CONSTRAINT "shopping_cart_user_id_fkey";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "order_details";

-- DropTable
DROP TABLE "orders";

-- DropTable
DROP TABLE "product_categories";

-- DropTable
DROP TABLE "products";

-- DropTable
DROP TABLE "reviews";

-- DropTable
DROP TABLE "shopping_cart";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "fullname" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "avatar" VARCHAR(255) NOT NULL,
    "role" "UserRole" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "movie_id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "release_year" INTEGER NOT NULL,
    "director" VARCHAR(100) NOT NULL,
    "duration_minutes" INTEGER NOT NULL,
    "trailer_link" VARCHAR(255) NOT NULL,
    "poster_image_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("movie_id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "genre_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("genre_id")
);

-- CreateTable
CREATE TABLE "MovieGenre" (
    "movie_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,

    CONSTRAINT "MovieGenre_pkey" PRIMARY KEY ("movie_id","genre_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- AddForeignKey
ALTER TABLE "MovieGenre" ADD CONSTRAINT "MovieGenre_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("movie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieGenre" ADD CONSTRAINT "MovieGenre_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genre"("genre_id") ON DELETE RESTRICT ON UPDATE CASCADE;
