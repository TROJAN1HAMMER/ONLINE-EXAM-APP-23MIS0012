FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

# FORCE clean install
RUN npm install

COPY . .

RUN npx react-scripts build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]