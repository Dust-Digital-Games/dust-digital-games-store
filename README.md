# Dust Digital Games Store

Dust Digital Games Store is an application that heavily relies on the Blockchain to inherit the security and storage capacity of the system. Not only it let us build more quickly as we rely on the already solid foundation of the Blockchain, we can also reduce costs and provide another layer of security on top of the Blockchain system to assure our users are secured in both ways.

Leaving behind all the reputation that NFT's and Crypto currencies have due to scams and shady operations, Dust Digital Games is determined to use the technologies for what they were created for: **providing a decentralized open network to let the users decide on their assets and currency.**

## Tech-stack

DDG was founded because we wanted to learn new technologies and work as a team. These stacks could be updated as we are still early in development.

- **Frontend**: NextJS 13, Typescript, TailwindCSS, Web3.js
- **Backend**: NextJS 13 (_API_), Typescript, Prisma, PostgreSQL, Docker

# Project Setup

We can setup the project using Docker or manually configuring the environment.

Remember to ask for the `.env` file to the team.

## Docker Setup

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- Database client (e.g. [DBeaver](https://dbeaver.io/download/))

<hr>

1. Clone the project
2. Run `npm i` to install the dependencies
3. Run `docker-compose up --build` to start the application
4. Attach a shell into the dust-digital-games-store container
5. Run `npx run prismaMigrateDev` to get the initial schema

## Manual Setup

### Prerequisites

- [NodeJS](https://nodejs.org/en/download/) (v16.9.1)
- [PostgreSQL](https://www.postgresql.org/download/) (v13.4)

<hr>
