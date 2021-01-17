include .env

up:
	docker-compose up -d

down:
	docker-compose down -v --remove-orphans

reset:
	docker-compose down -v --remove-orphans
	docker rmi postgres:12.2-alpine --force
	docker-compose up

##Eslint CORREÇÃO DE ERROS
eslint:
	npx eslint ./src --fix"

##REMOVE O BANCO DE DADOS
remove:
	docker rm db 
##FAZ AS MIGRATIONS DO BANCO DE DADOS
migrate:
	npx sequelize db:migrate
##FAZ AS SEED DO BANCO DE DADOS
seed:
	npx sequelize db:seed:all
##DELETA AS MIGRATIONS DO BANCO DE DADOS
undoMigrate:
	npx sequelize db:migrate:undo:all
##DELETA AS SEEDS DO BANCO DE DADOS
undoSeed:
	npx sequelize db:seed:undo:all
##CRIA UM DO BANCO DE DADOS NECESSÁRIO PARAMETRO make createDb="NOMEDOBANCO"
createDB:
	npx sequelize db:create ${DB_DATABASE}
