#BUILD
FROM node:14 as builder

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . .

#RUN
FROM node:14-alpine

WORKDIR /app

COPY package.json ./

COPY --from=builder /app /app

EXPOSE 8000

CMD ["npm", "start"]
