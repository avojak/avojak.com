FROM node:12

ENV SERVICE_USER=node \
    APP_DIR=/usr/src/app

WORKDIR ${APP_DIR}
COPY package*.json ./
COPY . .
RUN npm install

RUN chown -R ${SERVICE_USER} ${APP_DIR}

USER ${SERVICE_USER}

EXPOSE 8080
CMD ["node", "app.js"]