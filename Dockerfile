FROM nginx:alpine

COPY . /usr/share/nginx/html/khoansanluonguidemo/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
