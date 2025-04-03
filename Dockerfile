FROM node:20-alpine3.20

WORKDIR /app

COPY package.json .

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 8080

CMD ["sh","c","npx prisma generate && npx prisma db push && npm run start"]
