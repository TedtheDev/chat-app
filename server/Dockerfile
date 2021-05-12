FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
COPY index.js .
COPY .env .
COPY ./app ./app
RUN npm install
EXPOSE ${SERVER_PORT}
CMD ["npm","start"]