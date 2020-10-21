run:
	cd app; ng serve

test:
	ts-mocha lib/*.test.ts

particles:
	@python scripts/particles_baryons.py 
	@python scripts/particles_mesons.py

build:
	cd app; ng build --prod --outputPath=../docs --deploy-url "https://blog.c0nrad.io/feynman/" --base-href "/feynman/"

deploy: build
	cd ../..; git add -A .;	git commit -m "release"; git push origin master
