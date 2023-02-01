install:
	pnpm install

start:
	pnpm run dev

lint:
	pnpm run lint

build:
	#build container
	docker build -t rokiis1/table .
	
deploy:
	aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 184489571052.dkr.ecr.eu-west-2.amazonaws.com
	docker build -t table .
	docker tag table:latest 184489571052.dkr.ecr.eu-west-2.amazonaws.com/table:latest
	docker push 184489571052.dkr.ecr.eu-west-2.amazonaws.com/table:latest

all: install lint deploy
