# Kanban Board with React

Simple implementation of Kanban UI with react

![Kanban Sample Board](doc/kanban-sample-board.jpg?raw=true "Kanban Sample Board")

## Concepts

A Kanban board only has three key components

### Board

A board represents a place to keep track of information — often for large projects, teams, or workflows. Whether you are launching a new website, tracking sales, or planning your next office party, a Kanban board is the place to organize tasks, all the little details, and most importantly—collaborate with your colleagues.

### List

Lists keep cards, or specific tasks or pieces of information, organized in their various stages of progress. Lists can be used to create a workflow where cards are moved across each step in the process from start to finish, or simply act as a place to keep track of ideas and information. There’s no limit to the number of lists you can add to a board, and they can be arranged and titled however you’d like.

### Card

The smallest, but most detailed unit of a board is a card. Cards are used to represent tasks and ideas. A card can be something that needs to get done, like a blog post to be written, or something that needs to be remembered, like company vacation policies. Just click “Add a card…” at the bottom of any list to create a new card, and give it a name like “Hire a new marketing manager” or “Write a blog post.” There’s no limit to the number of cards you can add to a board.

## Atomic Design

I use [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) methodology for creating design systems. There are five distinct levels in atomic design.

Atomic design provides a clear methodology for crafting design systems. Clients and team members are able to better appreciate the concept of design systems by actually seeing the steps laid out in front of them.

Atomic design gives us the ability to traverse from abstract to concrete. Because of this, we can create systems that promote consistency and scalability while simultaneously showing things in their final context. And by assembling rather than deconstructing, we’re crafting a system right out of the gate instead of cherry picking patterns after the fact.

![Atomic Design](doc/atomic-design.jpg?raw=true "Atomic Design")

### 1. Atoms

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button. Like atoms in nature they’re fairly abstract and often not terribly useful on their own.

### 2. Molecules

Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

For example, a form label, input or button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.

### 3. Organisms

Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface. Building up from molecules to organisms encourages creating standalone, portable, reusable components.

### 4. Templates

At the template stage, we break our chemistry analogy to get into language that makes more sense to our clients and our final output. Templates consist mostly of groups of organisms stitched together to form pages. It’s here where we start to see the design coming together and start seeing things like layout in action.

### 5. Pages

Pages are specific instances of templates. Here, placeholder content is replaced with real representative content to give an accurate depiction of what a user will ultimately see.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `npm run deploy`

Deploy the React app to GitHub Page.

> That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.
>
> Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.

**That's it!** The React app has been deployed to GitHub Pages! :rocket:

The Kanban board app deployed and accessible at https://MrJavadAdib.github.io/kanban-react.
