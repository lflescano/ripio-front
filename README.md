# Front
The front-end was made by folowing the ATOMIC DESIGN principles. 

## Dependencies
 - Node
 - NPM

## Instructions
 - Clone repo
 - cd to project folder
 - Install Node y NPM usando NVM. Version 14 en adelante
 - --- yarn install or npm install
 - cp .env.example .env
 - Configure the API route

## Dev Run with Yarn
 - yarn start
 - Access https://localhost:3000
## Dev Run with Npm
 - npm run start
 - Access https://localhost:3000

## Storybook Run Npm
 - npm run storybook or yarn storybook
 - Access https://localhost:9009
## Storybook Run Yarn
 - yarn run storybook or yarn storybook
 - Access https://localhost:9009

## Prod Build
 - npm run build or yarn build

## Docker 

### Build
docker build -t ripio-front .

### Run
docker run -dp 3000:80 --name ripio-front ripio-front
add "-d" to run in background

### Stop
docker stop ripio-Front

### Remove
docker rm ripio-front


### Info
https://github.com/kunokdev/cra-runtime-environment-variables
