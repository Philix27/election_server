FROM node:14-alpine
WORKDIR /app
RUN yarn global add @nestjs/cli
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app
# Build production files
RUN nest build proto-schema
RUN nest build service-role
EXPOSE 3000
CMD npm run start:dev
