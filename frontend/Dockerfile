FROM node:18

WORKDIR /app

# Install dependencies FIRST
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of code
COPY . .

# Build React app
RUN npm run build

# Install serve
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]