FROM node:latest
RUN mkdir -p /usr/src/hungry
WORKDIR /usr/src/hungry
COPY package.json /usr/src/hungry
RUN npm install
EXPOSE 4000
CMD [ "npm", "start"]