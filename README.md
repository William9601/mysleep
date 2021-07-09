# My Sleep

My Sleep is an app designed to help users identify what habits are causing worse or better sleep. It does so by getting sleep data from Google Fit and relating the hours of deep sleep to the user's inputted habits.

## Screenshots

![App Images](/public/images/App-Images.png)

## Getting started

1. Clone the repo `https://github.com/William9601/mysleep`

2. Install dependencies `npm install`

3. In the /server folder, run `nodemon`

4. In the `/client` folder, tun `nom start`, with Expo Go installed on your phone, scan the genereated QR code to open the app

5. Make sure your wifi IP address in `/client/services` matches the wifi address you are connected to

6. Go to google auth playground, choose the fitness API and sleep read data, then retrieve the bearer token. Enter that token in the `dotFile.js` file, 'Bearer ya29....', make sure you write 'Bearer' in front. The link for the playground is: https://developers.google.com/oauthplayground/

## Tech Stack

Front-end

- React Native with Expo

## Back-end

- Express
- MongoDb
