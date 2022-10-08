# Boilerplate Node.js + TypeScript for Serverless

> WIP - Boilerplate Node.js + TypeScript + Prisma + Serverless

## Setup

### Update project information

- In `serverless.yml`, update `service` field with the name of your project;
- In `package.json`, update `name` field with the name of your project;

### Choose your database

To use with **Planet Scale** (MySQL serverless DB), you can use this env config:

```zsh
DB_USER=mysqluser
DB_ROOT_USER=root
DB_PASSWORD=mysqlpass
DB_HOST=0.0.0.0
DB_PORT=3306
DB_DATABASE=mydb
DATABASE_URL="mysql://${DB_ROOT_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}"
```

To use with Mongo Atlas serverless, use this env config:

```zsh
DB_USER=mongodbuser
DB_PASSWORD=mongodbpass
DB_HOST=mongodbhost
DB_DATABASE=db
DATABASE_URL="mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true&w=majority"
```

### Local server

WIP

### Deploy

WIP

### Custom domain

WIP
