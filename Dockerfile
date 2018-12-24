FROM nginx
MAINTAINER ardeshir.ahouri@gmail.com
COPY dist/BlogUI /usr/share/nginx/html
EXPOSE 80

