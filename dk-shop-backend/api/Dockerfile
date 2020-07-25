# Use a lighter version of Node as a parent image
FROM node:10-alpine
RUN apk add --no-cache \
	curl \
	&& rm -rf /tmp/* \
  && npm config set unsafe-perm true \
  && npm install -g loopback-cli nodemon
# Create workingdir
RUN mkdir -p /usr/src/api
# Set the working directory to /api
WORKDIR /usr/src/api
# copy package.json into the container at /api
COPY package*.json ./
# install dependencies
RUN npm install
# WARNING: Remove this setting in production.
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
# Copy the current directory contents into the container at /api
COPY . ./
# Make port 80 available to the world outside this container
EXPOSE 3002
## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
## Launch the wait tool and then your application
CMD /wait && npm start
