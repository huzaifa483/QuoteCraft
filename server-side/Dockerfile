# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /server-side

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install project dependencies
RUN npm install

# Copy the remaining application files to the working directory
COPY . .

# Expose the port that your application will run on
EXPOSE 8000

# Define the command to run your app
CMD ["npm", "start"]