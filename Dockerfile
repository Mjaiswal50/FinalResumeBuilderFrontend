#Dockerfile

# Stage 1: Build the Angular app
FROM node:12 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --f

# Install Angular CLI globally
RUN npm install @angular/cli@10.1.5 -g

RUN npm install typescript@4.0.3 --save-dev

# Copy the rest of the application code
COPY . .

# Run ngcc
RUN npx ngcc || true


# Expose the port is running on
EXPOSE 4200

#set host so that any other host can run this from outside container

CMD ["ng", "serve", "--host", "0.0.0.0"]


