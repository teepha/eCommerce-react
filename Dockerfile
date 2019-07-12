FROM node:11-alpine as builder

# Create working app directory
RUN mkdir -p /usr/src/app

# Set working app directory
WORKDIR /usr/src/app

# Copy both package.json AND package-lock.json
COPY package*.json ./
RUN npm install

# Install production dependencies
RUN  npm set progress false && npm install --only=production --loglevel warn

# Bundle app source
COPY . .

# Build Application
RUN npm run build

FROM nginx

ENV NODE_ENV=production

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
