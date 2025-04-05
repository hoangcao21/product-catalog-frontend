# Getting Started

Step by step, top to bottom.

## Bootstrap Backend application first
Follow steps of `product-catalog-backend` first, then copy `localhost.pem` and `localhost-key.pem` to this current directory.

## Install required dependencies
Simply execute `yarn`.

## Run docker
Requires that Docker Desktop is up and running.

Simply execute `docker-compose -f ./docker-compose.yml -p 'product-catalog-frontend' up -d`.


## Run the application
Each time you invoke Lambda function, AWS SAM CLI will try to create new Docker container and run the container to simulate API Gateway and Lambda behind the gateway. Note that the API Gateway is fronted by Caddy reverse proxy that server HTTPS request.

Simply execute `yarn dev`. Voila, the application should be up and running.