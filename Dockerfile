FROM node:14-alpine AS local-builder

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
EXPOSE 3000
WORKDIR /usr/src/tmen
COPY package.json ./
RUN npm install && npm cache clean --force
ENV PATH /tmen/node_modules/.bin:$PATH
COPY ./ ./
CMD ["npm", "start"]

# build me up buttercup :D
## docker-compose up --build

# to display process names:
## sudo netstat -tlnp

# to inspect network (expect something like 172.19.0.2/16)
# so in your browser you can http://176.19.0.2:3000/ or http://localhost:3000/
## sudo docker network inspect -v tmen_default

# to view docker logs
## docker-compose logs tmen
