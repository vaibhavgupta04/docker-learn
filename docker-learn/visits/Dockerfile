#Use an existing docker image as base
FROM alpine:3.14

# Step 2: Download and install dependency
# Install Node.js and npm
RUN apk update && apk add nodejs npm



#Mention the working directory
WORKDIR /usr/app


# Copy your application files to the container
COPY ./ ./

RUN npm install

CMD [ "npm","start" ]


