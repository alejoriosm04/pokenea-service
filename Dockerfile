# Use an official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy configuration files (package.json and package-lock.json)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copiar .env.example como .env en el contenedor
COPY .env.example .env

# Copy the rest of the project code to the container
COPY . .

# Expose the port that your application will use (3000 in this case)
EXPOSE 3000

# Command to start the application
CMD ["node", "src/app.js"]
