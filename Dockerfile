FROM node:20-alpine3.20

WORKDIR /app

COPY package.json .
COPY prisma .

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 8080

CMD ["npm", "server"]
