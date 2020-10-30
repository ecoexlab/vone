FROM nginx:1.16.0-alpine

COPY default.conf /etc/nginx/conf.d
COPY /build /usr/share/nginx/html

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
