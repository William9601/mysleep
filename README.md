# mysleep
> To start the app, first, in the server folder, 'npm nodemon', then in the client folder 'npm start'
> Go to google auth playground, choose the fitness API and sleep read data, then retrieve the bearer token. Enter that token in the dotFile.js file,  'Bearer ya29....', make sure you write 'Bearer' in front. The link for the playground is: https://developers.google.com/oauthplayground/
> Make sure the wifi IP address in the client/services files match the wifi address you are connected to
> The mongodb DB is My Sleep
> In the .env file I have more private instructions

> To do. Implement Google login
> Check if there's already a token in local storage. If true then the user is authenticated and they can use the app.
> If false then read the params and get the token from there
> In screens/home line 22, I console log the params that are sent whenever I click Login on the app.
> The token from these params needs to be sent to the API request, it can only be used once
> I access the params from home because that's where I can use the router

MongoDB
> 1- Type 'mongo' in terminal
> 2- Type 'show dbs'
> 3- 'use MySleep'
> 4- 'db.habits.find()' to see the habits
> 5- 'db.habits.drop()' to delete all habits