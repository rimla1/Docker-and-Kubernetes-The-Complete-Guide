# Using an existing docker image as a base
FROM alpine

# Download and install a dependecy
RUN apk add --update gcc
RUN apk add --update redis


# Tell the image what to do when it starts as container
CMD ["redis-server"]