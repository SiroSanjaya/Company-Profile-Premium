# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm install --legacy-peer-deps

# Install serve to run the production build
RUN npm install -g serve

# Expose port 8080
EXPOSE 8080

# Serve the build directory on port 8080
CMD ["serve", "-s", "build", "-l", "8080"]