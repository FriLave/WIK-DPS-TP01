FROM node:latest
RUN useradd -s /bin/bash api_user
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npx tsc
USER api_user
CMD ["node", "./build/app.js"]
