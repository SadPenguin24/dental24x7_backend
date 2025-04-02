FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

# Install app dependencies
COPY package*.json ./
COPY /app/node_modules ./node_modules
COPY /app/node_modules/.prisma ./node_modules/.prisma

USER node

EXPOSE 8080
CMD [ "node", "dist/index.js" ]
