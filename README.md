Step 1. VS Studio
Step 2. npm install 
Step 3. npm start
Step 4. use backend url here replace in angular-course\src\app\services\http-service.ts in line no. 13 
  replace private baseURl = 'http://localhost:5000/api'; 
  with 
  private baseURl='https://xyz.herokuapp.com/api';
Step 5. add in angular-course\package.json in line no. 8
   "build-prod": "ng build --prod --aot",
Step 6. npm run build-prod  
Step 7. Use firebase to deploy.
