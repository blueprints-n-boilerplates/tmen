# tmen

> This [repository](https://github.com/blueprints-n-boilerplates/tmen) is authored by [@cinnamonplum](https://github.com/cinnamonplum). This is intended as a boilerplate written in Typescript, Mongodb, Express, and Node.

## Before running the app for the first time

Copy the `.env.template` file and rename it to `.env`.

Replace the values.

## Rebase to the first commit

```
git rebase -i --root
```

## Running the app using Docker

### Getting Started with Docker

Refer to the links below for Docker installation notes:

-   [Windows](https://docs.docker.com/desktop/windows/install/)
-   [Linux](https://docs.docker.com/desktop/linux/install/)
-   [Mac](https://docs.docker.com/desktop/mac/install/)

### Docker-Compose

```
docker-compose build
docker-compose up --build
```

## NPM tasks

### Run development server

```
npm start
```

## Folder Structure

### docs/

Contains project documentations including API endpoints and whatnots.

### src/controllers

Contains all the business logic of the project.

### src/middlewares

Contains all config for various middlewares such as jwt and mongoose.

### src/models

Contains all the database models and matching interfaces.

### src/routes

Contains routing-related logic.

### src/utils

Contains utility functions.

### src/app.ts

Starts the web server and where the setup logic is written.

### src/config.ts

Contains configuration for dotenv.

### src/index.ts

Loads app.ts and config.ts, and includes server setup.

### todos/

Contains notes about features and technologies that will be added in this boilerplate.
