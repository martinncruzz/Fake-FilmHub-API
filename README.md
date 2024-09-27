# 🎬 Fake FilmHub API

Welcome to Fake FilmHub API, a versatile and efficient solution for managing movie-related data. This API follows Domain-Driven Design (DDD) and Clean Architecture, ensuring scalability, maintainability, and ease of extension for future features.

![image](https://github.com/user-attachments/assets/9635ca13-44e3-42b4-b6a7-da4f73905142)

> [!IMPORTANT]
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
- [JWT](https://jwt.io/introduction) - JSON Web Tokens for secure user authentication.

## 🏗️ Project Architecture

- 📂 **config/**:  
  A dedicated layer for handling external packages and third-party integrations. This architecture leverages an adapter pattern, allowing fluid changes to dependencies without cascading effects throughout the application. For example, changing a library only affects this layer, ensuring that the rest of the system is not affected.

- 📂 **data/**:  
  This layer encapsulates all interactions with the database. It is designed to manage different data sources, providing the necessary configuration for connections, migrations, and models. By isolating the data management logic here, the system can easily support multiple databases without coupling them to the business logic.

- 📂 **domain/**:  
  In the domain layer resides the core of the business logic. It is completely independent of any external infrastructure or framework, ensuring that business rules remain pure and reusable. This layer defines entities, rules, and use cases that drive the core functionality of the application.

- 📂 **infrastructure/**:  
  The infrastructure layer brings to life the abstract rules defined in the domain layer by implementing data sources and external service integrations. It manages the actual interaction with databases, APIs, or any other external systems.

- 📂 **presentation/**:  
  This layer focuses on how the system interacts with the external world, specifically through API endpoints. It contains all framework-specific components, such as drivers, routes, and middleware. By isolating these concerns, the architecture remains adaptable, allowing easy migration to different frameworks without affecting the business logic.

## 🚀 Running the Project in Development Mode

1. **Clone the repository**

   ```bash
   git clone https://github.com/Martinchx/Fake-FilmHub-API
   cd Fake-FilmHub-API
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Rename `.env.template` to `.env` and configure environment variables**

   ```env
    PORT = 3000

    WEBSERVICE_URL = http://localhost:3000/api

    DATABASE_URL = postgresql://admin:admin@localhost:5432/fake-filmhub-api

    JWT_SECRET = your_jwt_secret
   ```

4. **Start the database container**

   ```bash
   docker compose up -d
   ```

5. **Run Prisma migrations**

   ```bash
   npx prisma migrate dev
   ```

6. **Seed the database**

   ```bash
   npm run seed
   ```

7. **Start the server in development mode**
   ```bash
   npm run dev
   ```
