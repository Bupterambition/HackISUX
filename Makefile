all:
	npm run build --prefix farm_market
	cd ..
	mkdir farmland/app/templates
	cp -r farm_market/build/* farmland/app/templates
	mv farmland/app/templates/static farmland/app/