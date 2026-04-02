FROM nginx:alpine

COPY dist/orsproject-10-main /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]