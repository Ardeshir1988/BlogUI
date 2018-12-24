FROM nginx
COPY dist/BlogUI /usr/share/nginx/html
EXPOSE 80
