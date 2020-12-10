# Our application requires node.js to run.
FROM node:10

# Specify that when you create the container, put the application inside the /app container
WORKDIR /app

# Copy our package.json file into the /app folder
COPY package.json /app

# Run your install
RUN npm install

# Copy all files except for those specified in the .dockerignore file (node_modules)
COPY . .

# Build and run the index file
CMD npm run start:prod

# Expose the port that our application is running on (passed in .env.production file)
EXPOSE 3000
