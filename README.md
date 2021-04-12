# FSA-11 [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://grp-11-full-stack-app.herokuapp.com/)

Welcome to Location based Game Application.

## Overview

A location based gaming app that helps the user to find the treasure location. First it checks the device coordinates with the target location and tells the user whether he/she is inside or outside the target location. when user clicks/touches on the first color then it provides a valid treasure location and a confirmation message will appear that a particular location is selected.Even after confirmation user is provided with option to select another location, if so the user can start the game from beginning.when the user clicks or touches the second color, if the user is inside the treasure location, user will hear information that a treasure is earned, if the user is outside the target location, user will hear information about help like in direction to walk, how far away or any other clue.


## Heroku published link:

- https://grp-11-full-stack-app.herokuapp.com/

## Link shows 2-color for home page ("/")

- https://grp-11-full-stack-app.herokuapp.com/

## location logic
- The logic is written inside the function named getLocationDirections in location-quad.js
- Next,sorting the latitudes of a quest location in descending order and the longitudes in ascending order since they are negative. 
- When we have that, compare the first two of these values with the relevant point value e.g. latitude with latitude. In case of latitude, if either of the first two values of sorted quest location's latitude is less than the latitude of the given point then we know that the user is located to the north of quad and have to move towards south to reach the logic. 
- similarly, You can extend this logic to find other locations too.
- <img src = "https://github.com/KHARIKA17/Group-11-Full-stack-app/blob/main/public/images/logicpic.jpg" width= "450" height="300" />

## User stories

- [X] As a player, I want to touch/click the first color to request a valid (treasure) location.
- [X] As a player, I want to hear confirmation that a location has been selected (so I can I can begin searching).
- [ ] As a player, I want to touch/click the second color: If I am outside the treasure location, I want to hear information to help me find the treasure location (clue? how far away? what direction to walk?)
- [X] As a player, I want to touch/click the second color: If I am inside the treasure location, I want to hear and see confirmation that I have earned this treasure.
- [ ] As a player, after confirmation that I have earned a location: I want the game to ask me if I would like to select another location. If I select yes, we reset and begin again.

## Stack

- Platform: Node (v15.0.1)
- Web Framework: Express
- View engine: EJS
- Web App Host: Heroku
- ORM: PostgreSQL
- Coding standards: Prettier/ESlint

## Working app screenshots 
- when the user clicks on the second color component without selecting a location.
- <img src = "https://github.com/KHARIKA17/Group-11-Full-stack-app/blob/main/public/images/location.png" width= "450" height="300" />
- when the user is inside a target location
- <img src = "https://github.com/KHARIKA17/Group-11-Full-stack-app/blob/main/public/images/app_1.jpeg" width ="450" height="300" />
## CI/CD

-Auto-deploying from our main repo.

## Team Members:

<table>
  <tr>
   <td align="center"><a href="https://github.com/KHARIKA17"><img src="https://avatars.githubusercontent.com/u/60010885?s=460&u=24c5428d5a37b37a3efd752d271740b402177734&v=4" width="100px;" alt=""/><br /><sub><b>Harika Kulkarni</b></sub></a><br /></td>
  
  <td align="center"><a href="https://github.com/GUNDUPOOJA"><img src="https://avatars.githubusercontent.com/u/60015515?s=460&u=a691ffb3d3f0d5b6668835340aa29ca8599d7667&v=4" width="100px;" alt=""/><br /><sub><b>Pooja Gundu</b></sub></a><br /></td>
</tr>
</table>

## Prerequisites

- Node.js (comes with npm)
- Git
- TortoiseGit
- VS Code

## Prerequisites for Publishing

- [Heroku CLI - to publish](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- [Heroku login](https://id.heroku.com/login)
- [PostgreSQL local install](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

## How to Contribute

### Step 1 - Get fresh code.

1. Pull fresh code. (Fork & clone if this is the first time.)
1. Run npm install.
1. Run npm run start
1. Verify everything runs.

### Step 2 - Make your contributions.

As you test your code, format it with Prettier and
lint (clean it up) with ESLint.
See scripts in package.json.

1. Immediately, make your local edits.
1. Verify the app still runs & standarize your code (see commands below)

```PowerShell
npm install
npm run start

npm run prettier
npm run lint
npm run lint-fix
```

## Start Options

Start the app by running npm run start.
Until error handling is complete, a clean shutdown is better.

```PowerShell
npm run start
```

## References:

- [Web App fall 2020](https://github.com/denisecase/web-app-2020-fall)
- [Talk-2-treasure-8](https://github.com/sumana-reddy/talk-2-treasure-8)
