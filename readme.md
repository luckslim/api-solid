npm init -y
npm i typescript @types/node tsx tsup -D
npx tsc --init


docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql
docker ps -a ver todos os containers
docker logs <container>
docker start <idContainer>
docker stop <idContainer>
docker rm <idContainer>
docker compose up -d
docker compose stop

npm i vitest vite-tsconfig-paths -D