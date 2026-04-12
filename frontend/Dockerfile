FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy code
COPY . .

# Expose React port
EXPOSE 3001

# Start frontend
CMD ["npm", "start"]