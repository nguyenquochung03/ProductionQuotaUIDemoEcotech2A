FROM nginx:alpine

COPY hud_admin_v2.3/ /usr/share/nginx/html/hud_admin_v2.3/
COPY khoansanluonguidemo/ /usr/share/nginx/html/khoansanluonguidemo/
COPY khoansanluonguidemo/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
