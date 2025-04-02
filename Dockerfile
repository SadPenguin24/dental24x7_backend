FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV production

# Install app dependencies
COPY prisma ./prisma/
COPY package*.json ./

COPY --chown=node:node --from=builder /prisma /prisma
COPY --chown=node:node --from=builder /src /src

USER node

EXPOSE 8080
CMD [ "node", "dist/index.js" ]
