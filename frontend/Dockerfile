FROM node:latest

WORKDIR /usr/src/app/frontend

COPY . .

RUN npm install

RUN npm run build

#ENTRYPOINT [ "/usr/src/app/frontend/entrypoint.sh" ]