FROM nginx:alpine
COPY dist/BlogUI /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80