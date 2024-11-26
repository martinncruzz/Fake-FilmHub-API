# 🎬 Fake FilmHub API

Welcome to Fake FilmHub API, a versatile and efficient solution for managing movie-related data. This API follows Domain-Driven Design (DDD) and Clean Architecture, ensuring scalability, maintainability, and ease of extension for future features.

![image](https://github.com/user-attachments/assets/dd44d585-3a59-44a4-b55f-7497a9f6e9fe)

> [!NOTE]
> For detailed instructions on how to use the API, please refer to the documentation available. It covers everything from endpoints usage to authentication, ensuring a smooth experience for developers.
>
> [Explore API Documentation](https://filmhub-api-docs.vercel.app)

## 🛠️ Stack

- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript for enhanced code quality.
- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 engine.
- [Express.js](https://expressjs.com/) - Minimalist web framework for Node.js.
- [PostgreSQL](https://www.postgresql.org/) - Open-source relational database system.
- [Prisma](https://www.prisma.io/docs) - Modern ORM for Node.js and TypeScript.
- [Docker](https://www.docker.com/) - Platform for developing, shipping, and running applications in containers.

## 🏗️ Project Architecture

- 📂 **domain/**:  
  In the domain layer resides the core of the business logic. It is completely independent of any external infrastructure or framework, ensuring that business rules remain pure and reusable. This layer defines entities, rules, and use cases that drive the core functionality of the application.

- 📂 **application/**:  
  This layer is responsible for coordinating and interacting with both the domain and infrastructure layers, ensuring that business logic is applied. It handles application-specific workflows, ensuring that requests are processed seamlessly and that operations align with the defined business rules.

- 📂 **infrastructure/**:  
  The infrastructure layer brings to life the abstract rules defined in the domain layer by implementing data sources and external service integrations. It manages the actual interaction with databases, APIs, or any other external systems.

- 📂 **presentation/**:  
  This layer focuses on how the system interacts with the external world, specifically through API endpoints. It contains all framework-specific components, such as drivers, routes, and middleware. By isolating these concerns, the architecture remains adaptable, allowing easy migration to different frameworks without affecting the business logic.

## 🚀 Running the Project in Development Mode

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

3. **Run Prisma migrations**

   ```bash
   pnpm prisma migrate dev
   ```

4. **Seed the database**

   ```bash
   pnpm run seed
   ```

5. **Start the server in development mode**

   ```bash
   pnpm run dev
   ```
