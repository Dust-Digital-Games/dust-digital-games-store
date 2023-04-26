FROM node:16-alpine

WORKDIR /dust-digital-games-store

COPY package*.json .

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
