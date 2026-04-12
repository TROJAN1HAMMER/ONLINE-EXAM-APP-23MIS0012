FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of code
COPY . .

# Expose backend port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]