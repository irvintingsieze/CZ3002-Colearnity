# backend
Clean installation
cmd to working directory
npm install -g express-generator
express backend --view pug
cd into backend folder
npm install
replace app.js with the one in github



To test POST/GET without frontend, use CURL to send POST/GET request using the sample command lines below:

curl -H "Content-Type: application/json" -X POST "http://localhost:3000/account/create" -d {\"username\":\"TOM\",\"PASSWORD\":\"123456\"}

curl -H "Content-Type: application/json" -X GET "http://localhost:3000/account/create" -d {\"username\":\"TOM\",\"PASSWORD\":\"123456\"}