FROM node:20-alpine as builder

WORKDIR /app

COPY . .

# ARG VITE_APP_BACKEND_ADDRESS

# ENV VITE_APP_BACKEND_ADDRESS $VITE_APP_BACKEND_ADDRESS

RUN npm install

RUN npm run build

FROM nginx:1.27.2-alpine-slim as prod

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf  /etc/nginx/conf.d

EXPOSE 4173

CMD ["nginx", "-g", "daemon off;"]