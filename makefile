install:
	pnpm install

start:
	pnpm run start

lint:
	pnpm run lint

build:
		#build container
		docker build -t rokiis1/table .

all: install lint deploy