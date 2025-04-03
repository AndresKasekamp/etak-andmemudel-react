FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm ci && npm cache clean --force

RUN npm run build

FROM nginx:1.27.2-alpine-slim AS prod

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf  /etc/nginx/conf.d

EXPOSE 4173

CMD ["nginx", "-g", "daemon off;"]