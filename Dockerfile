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

USER node

EXPOSE 8080
CMD [ "npm", "run", "start" ]
