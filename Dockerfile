FROM node:lts-alpine AS build
ARG NUXT_AUTH_DOMAIN
ARG NUXT_AUTH_CLIENT_ID
ARG NUXT_API_BASE_URL

# Copy build files
COPY . /opt/app
WORKDIR /opt/app

# Build app
RUN npm ci && npm run build


FROM node:lts-alpine AS runtime
LABEL maintainer="Jared Dantis <jareddantis@gmail.com>"
ARG NUXT_AUTH_DOMAIN
ARG NUXT_AUTH_CLIENT_ID
ARG NUXT_API_BASE_URL

# Copy app
COPY --from=build /opt/app/.output /opt/app
WORKDIR /opt/app

# Run app
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
ENTRYPOINT ["node", "server/index.mjs"]
