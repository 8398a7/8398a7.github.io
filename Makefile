LAST_MODIFIED ?= $(shell git log --oneline --pretty=format:'%cd' --date=format:'%Y-%m-%d %H:%M:%S %z' | head -n1)

start:
	VITE_LAST_MODIFIED="$(LAST_MODIFIED)" pnpm run start
test:
	CI=true pnpm run test
clean:
	rm -rf static && rm -f service-worker.js precache-*.js
build: clean
	VITE_LAST_MODIFIED="$(LAST_MODIFIED)" pnpm run build
publish: build
	cp -r ./build/* .
docker-start:
	docker build . -t 8398a7.github.io
	docker run -it -e VITE_LAST_MODIFIED="$(LAST_MODIFIED)" -p 3000:3000 8398a7.github.io
