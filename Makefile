LAST_MODIFIED ?= $(shell git log --oneline --pretty=format:'%cd' --date=format:'%Y-%m-%d %H:%M:%S %z' | head -n1)

start:
	REACT_APP_LAST_MODIFIED="$(LAST_MODIFIED)" yarn start
test:
	CI=true yarn test
clean:
	rm -rf static && rm -f service-worker.js precache-*.js
build: clean
	REACT_APP_LAST_MODIFIED="$(LAST_MODIFIED)" yarn build
publish: build
	cp -r ./build/* .
docker-start:
	docker build . -t 8398a7.github.io
	docker run -it -e REACT_APP_LAST_MODIFIED="$(LAST_MODIFIED)" -p 3000:3000 8398a7.github.io
