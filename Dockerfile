FROM node:12
WORKDIR /home/node/app
COPY app /home/node/
RUN npm install
CMD npm start
EXPOSE 9999