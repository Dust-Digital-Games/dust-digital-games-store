FROM node:16-alpine

WORKDIR /app

COPY package*.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build && npx next build

EXPOSE 3000

CMD ["npm", "start"]
