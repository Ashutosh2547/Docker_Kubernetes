# Download the base image
FROM node:alpine 
#using alpine (bare minimum version of node repository)

# change the working directory to prevent any override of folder
#WORKDIR /usr/app

# copy pacakge json
COPY ./ ./

# Install dependencies
RUN npm install


#Specify the command
CMD ["npm", "start"]

# docker build -t ashu . 
# run docker run -p 8080:8080 <your port: container port> ashu
# docker run -it ashu sh
# run : docker ps to view all containers
# run: docker exec -it <containerid> sh
# docker ps -> show all cotainers
# docker images -> show all images