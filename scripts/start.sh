./scripts/stop-micro-uis.sh 

cd ../product-header; npm run build-prod; cd ../productmgt

cd ../product-cart; npm run build-prod; cd ../productmgt

cd ../product-view; npm run build-prod; cd ../productmgt

./scripts/start-micro-uis.sh

node server.js
