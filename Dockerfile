FROM node:20-alpine3.20

WORKDIR /app

COPY package.json .

RUN npx prisma generate
RUN npm install

COPY . .

EXPOSE 8080

CMD ["sh","c","npx prisma generate && npx prisma db push && npm run start"]
