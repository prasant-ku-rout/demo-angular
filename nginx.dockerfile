
# Node server Configuration
FROM node:11.15.0-alpine as node-server
WORKDIR /app
COPY ["package.json", "./"]
RUN npm install --silent
COPY . .
RUN npm run build 

FROM nginx:1.16.0-alpine as prod-stage
COPY --from=node-server /app/dist/demoang /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx" ,"-g","daemon off;"]




#use following command build the image and run the container (run from the root folder)
#ng build --watch --delete-output-path false

# Build the docker Image 
#docker build -t nginx-angular -f nginx.dockerfile .

# Run the Docker Container
#docker run -p 4200:80 -d -v $(pwd)/dist:/usr/share/nginx/html nginx-angular 
# docker run -it -p 8000:80 --name nginx-angular-container  nginx-angular 


