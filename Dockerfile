FROM node:16-alpine

WORKDIR /dust-digital-games-store

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build && npx next build

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "start"]
