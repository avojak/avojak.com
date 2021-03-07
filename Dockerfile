FROM node:12

ENV SERVICE_USER=node \
    APP_DIR=/usr/src/app

WORKDIR ${APP_DIR}
COPY package*.json ./
COPY app.js ./app.js
COPY public/ ./public/
COPY views/ ./views/
COPY docker-entrypoint.sh /

RUN npm install

RUN chown -R ${SERVICE_USER} ${APP_DIR} && \
    chown ${SERVICE_USER} /docker-entrypoint.sh && \
    chmod +x /docker-entrypoint.sh

USER ${SERVICE_USER}

EXPOSE 8080

ENTRYPOINT [ "/docker-entrypoint.sh" ]
