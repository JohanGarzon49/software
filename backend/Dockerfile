FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
# No build step required for plain Node; if usas Babel/TS, compila aquí.
FROM node:20-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=builder /usr/src/app ./
EXPOSE 4000
CMD ["node", "src/index.js"]
