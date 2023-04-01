# Use a Node.js base image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build && npx next build

# Expose the port that the app will listen on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
