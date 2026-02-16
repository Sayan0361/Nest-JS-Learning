**Local Setup Instructions**

1. Start your Docker Engine.

2. Create a `.env` file in the project root with the following configuration:

```
APP_NAME=NESTJS

# Postgres setup
DB_HOST=localhost
DB_PORT=5432
DB_USER=your-username
DB_PASS=your-password
DB_NAME=your-database-name
```

3. Start the database container:

```
docker compose up -d
```

4. Install dependencies:

```
pnpm install
```

5. Run the application in development mode:

```
pnpm start:dev
```

6. Open a PostgreSQL client (for example, the VS Code PostgreSQL extension) and connect using the credentials from the `.env` file.

7. Use Postman (or any API client) to test the endpoints defined in:

```
posts/controllers/post.controller.ts
```
