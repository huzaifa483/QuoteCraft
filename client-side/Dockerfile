# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /client-side

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install project dependencies
RUN npm install

# Copy the remaining application files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
