## Typescript & Docker

This is a project to get up and running with building a docker application with Typescript.

# Installation

You must have Docker installed locally.

`docker -v`

Once docker is installed, install the packages:

`yarn install`

# Environment

The development environment uses `ts-node` and `nodemon` to serve locally. You store the variables in the `.env.development` file, which are loaded via `dotenv`

The different required variables for these files can be found in the `modules.d.ts` file.

In production, you can either specify the the path of your environment variables with Docker's `--env-file` flag, or pass each variable individually via the `-e` flag. The mandatory environment variables are still contained in the `modules.d.ts` file.

# Development

After configuring your `.env.development` file, run `yarn dev` which will spin up nodemon with ts-node.

# Production

Build your Docker image. You can then pass the required environment variables from a `.env.production` file on your server with the following command:

`docker run -it --env-file .env.production -p 3000:3000 name-of-image`
