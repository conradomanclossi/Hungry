FROM node:latest
RUN mkdir -p /usr/src/hungry
WORKDIR /usr/src/hungry
RUN npm install
EXPOSE 4000
CMD [ "npm", "run", "dev" ]