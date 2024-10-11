# Use the official Node.js image to build the app
FROM node:lts AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the .env file
COPY .env .env

# Build the Angular app
RUN npm run build --prod

# Use the official Nginx image to serve the app
FROM nginx:alpine

# Copy the built Angular app from the previous stage
COPY --from=build /app/dist/your-angular-app /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
