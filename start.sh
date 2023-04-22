trap 'kill 0' INT
cd api && ./bin/setup &
cd client && yarn install && yarn start