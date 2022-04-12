# Getting Started with React

## Learning Objectives

Today's goal is to set up the structure of our application and end up with a basic, static page.

## Your Mission

### Step 1. Installation

Create a folder for this project (I suggest you call it `intro-react`). Inside this folder, type the following command:

`npx create-react-app .`

_Don't forget the ending period!_

The installation may take a few minutes. At the end you will see a recap in your terminal with a few commands you now have available. The most important ones are:

1. `npm start` (or `yarn start` if you prefer **yarn** to **npm**) is the command you will use every time you work on the application locally - it will start a local server, do a bunch of magics, and provide the application at the address: `http://localhost:3000`
2. `npm run build` (or `yarn build` if you prefer **yarn** to **npm**) will create the production-ready application files inside a folder called `build` (this is the folder that you can drop in Netlify)

### Step 2. Git

I shouldn't be saying it but... `git init`, commit, push etc.!

The cool thing is that `create-react-app` generates a `.gitignore` file for you so that you only commit the necessary files (never commit the `node_modules` folder, for example).

### Step 3. Start! And code...

Run:

`npm run start`

and watch the magic happen (your browser should self-open at `http://localhost:3000`). Yay!

Try to change something in the file `App.js`. For example, change the line that says

`Learn React`

to

`Learn React @ BeCode`

and save. The browser will immediately reload with the new version. Isn't that cool?


### Step 4.

Done?

Great, that means we can go to the next **must-have** from the exercise!

## Good Luck!