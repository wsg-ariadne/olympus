olympus
===

![build-docker-image workflow](https://github.com/wsg-ariadne/olympus/actions/workflows/build-olympus-image.yml/badge.svg)

🌋 Olympus is the web-based dashboard for the Ariadne project. It works with [Dionysus](https://github.com/wsg-ariadne/olympus) to display summary statistics of all the user-submitted reports of deceptive design, along with a preview of the most recent reports. It is powered by [Nuxt v3](https://nuxt.com/) and [Tailwind CSS](https://tailwindcss.com/).

Olympus also makes use of the [Auth0](https://auth0.com) SDK, which allows for login functionality. At the moment Olympus does not include functionality that necessitates login, but in the future this could allow administrators to delete reports on user request, allow registered users to verify, dispute, and comment on reports, etc., although this is not currently planned and is beyond the current scope of the Ariadne research project.

## Development

### Prerequisites

You will need [Node.js](https://nodejs.org/en/) (v16 or higher). We recommend installing the latest LTS version.

Install the dependencies:

```bash
npm install
```

You will also need an Auth0 account and a configured Auth0 application. You can sign up for a free account [here](https://auth0.com/signup). Once you have an account, you can create an application [here](https://manage.auth0.com/#/applications). You will need to configure the following settings:

- Allowed Callback URLs: `http://localhost:3000/`
- Allowed Logout URLs: `http://localhost:3000/`
- Allowed Web Origins: `http://localhost:3000/`

If you will [deploy](#deployment) Olympus publicly, you will need to add the appropriate URLs to these settings.

You will also need to take note of your Auth0 domain and client ID. You can find these in the Settings tab of your Auth0 application.

Save these values in a `.env` file in the root of the project:

```bash
NUXT_PUBLIC_AUTH_DOMAIN="********************"
NUXT_PUBLIC_AUTH_CLIENT_ID="********************"
NUXT_PUBLIC_API_BASE_URL="http://localhost:5000"
```

Change `NUXT_PUBLIC_API_BASE_URL` to whatever domain and port Dionysus is listening on.

### Building

Olympus is a Nuxt app, which means that you can

1. start the development server on `http://localhost:3000` using `npm run dev`,
2. build the application for production using `npm run build`, and
3. locally preview the production build using `npm run preview`.

## Deployment

When building for production, Vite will output a server at `.output/server/index.mjs`. You can run this server using `node .output/server/index.mjs`, and it will listen on port 3000 by default.

Olympus is Dockerized, so as long as you have a working Docker Compose stack with Dionysus and an accompanying PostgreSQL container, you can simply pull the image from [Docker Hub](https://hub.docker.com/r/jareddantis/wsg-ariadne-olympus) and create a container with it.

You can use the following `docker-compose.yml` file as a starting point:

```yaml
version: '3.8'
services:
  database:
    container_name: dionysus-db
    image: postgres:alpine
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=dionysus
    user: postgres
    volumes:
      - dionysus_db:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD', 'pg_isready']
      interval: 1s
      timeout: 1s
      retries: 3
      start_period: 1s
    restart: always
  backend:
    container_name: dionysus
    image: jareddantis/wsg-ariadne-dionysus:latest
    depends_on:
      database:
        condition: service_healthy
    ports:
      - '5000:5000'
    healthcheck:
      test: ['CMD', 'curl', '-f', 'http://localhost:5000/api/v1/healthcheck']
      interval: 1s
      timeout: 5s
      retries: 5
      start_period: 30s
    volumes:
      - /PATH/TO/dionysus.conf:/opt/app/dionysus.conf
    restart: unless-stopped
  olympus:
    container_name: olympus
    image: jareddantis/wsg-ariadne-olympus:latest
    depends_on:
      backend:
        condition: service_healthy
    environment:
      - NUXT_PUBLIC_AUTH_DOMAIN="**********************"
      - NUXT_PUBLIC_AUTH_CLIENT_ID="**********************"
      - NUXT_PUBLIC_API_BASE_URL="https://ariadne.dantis.me"
      - NUXT_API_BASE_URL="http://localhost:5000"
    ports:
      - '5002:3000'
    restart: unless-stopped

volumes:
  dionysus_db:
```
