# 🎬 Fake FilmHub API

![image](https://github.com/user-attachments/assets/dd44d585-3a59-44a4-b55f-7497a9f6e9fe)

> [!NOTE]
> For detailed instructions on how to use the API, please refer to the documentation available. It covers everything from endpoints usage, ensuring a smooth experience for developers.
>
> [Explore API Documentation](https://filmhub-api-docs.vercel.app)

## 🛠️ Stack

- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript for enhanced code quality.
- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 engine.
- [Express.js](https://expressjs.com/) - Minimalist web framework for Node.js.
- [NestJS](https://nestjs.com/) - Progressive Node.js framework.
- [PostgreSQL](https://www.postgresql.org/) - Open-source relational database system.
- [Prisma](https://www.prisma.io/docs) - Modern ORM for Node.js and TypeScript.
- [Docker](https://www.docker.com/) - Platform for developing, shipping, and running applications in containers.

## 🏗️ Project Architecture

- 📂 **config/** → Contains configurations and integrations for external packages.

- 📂 **database/** → Manages database connections, configurations, model definitions, and migrations, ensuring that all data-related setups are centralized.

- 📂 **modules/** → Contains the core modules (auth, users, genres, movies, reviews), each with a structured setup including DTOs, entities, and repositories, controllers and services for handling routes and business logic.

## 🚀 Getting started

> [!IMPORTANT]
> Rename `.env.template` to `.env` and fill in all required variables. The application won’t start if any are missing. Use the links in the template to obtain the missing values.

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Start the database container**

   ```bash
   docker compose up -d
   ```

3. **Run prisma migrations**

   ```bash
   pnpm prisma migrate dev
   ```

4. **Start the server in development mode**

   ```bash
   pnpm run dev
   ```
