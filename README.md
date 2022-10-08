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

To use with MongoDB local (docker-compose), use this env config:

```zsh
DB_USER=mongodbuser
DB_PASSWORD=mongodbpass
DB_HOST=0.0.0.0
DB_PORT=27017
DB_DATABASE=db
DATABASE_URL="mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin&retryWrites=true&w=majority"
```

### Local server

Get the docker up with the command:

```zsh
DEBUG=1 yarn docker:up:logs
```

With this command, you can see if something is wrong by looking at the logs.
You can use `Ctrl + C` any time to came back to your terminal prompt without
get the process down.

To get the docker down, you will have to use the command:

```zsh
yarn docker:down
```

After the docker is up and running, just get your server up with the following command:

```zsh
yarn dev
```

### Deploy

WIP

### Custom domain

WIP
