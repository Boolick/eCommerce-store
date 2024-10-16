# RSS eCommerce Application

A final task of stage#2

### Project Overview:

- **Explore a Wide Variety of Products**: Dive into our extensive collection, discover detailed product descriptions, and effortlessly add your favorites to your shopping basket for a seamless checkout experience.
- **Responsive Design:** Our application adapts flawlessly to various screen sizes, ensuring a delightful shopping journey on any device, with a minimum resolution of 390px.
- **Explore Engaging Pages:**
  - Login and Registration: **_Start_** your journey securely with our user-friendly login and registration process.
  - Main Page: **_Discover_** trending products and exciting offers on our dynamic main page.
  - Catalog Product: Explore our diverse product catalog with ease, finding exactly **_what you need_**.
  - Detailed Product: Get in-depth insights into each product, making informed decisions before purchase.
  - User Profile: Customize your experience and manage your preferences effortlessly.
  - Basket: Review and manage your selected items before finalizing your purchase.
  - About Us: Learn more about our vision, mission, and the team behind the scenes.

### Project Purpose:

- Our project aims to provide users with a seamless and enjoyable online shopping experience. By offering a wide variety of products, detailed descriptions, and a responsive design, we strive to make shopping convenient and accessible to everyone.

### Technology Stack

- **Frontend:**
  - [React.js](https://legacy.reactjs.org/): a JavaScript library for building user interfaces.
  - [Redux](https://redux.js.org/): a predictable state container for managing application state.
  - [RTK Query](https://redux-toolkit.js.org/introduction/getting-started): a powerful data fetching and caching tool built on top of Redux Toolkit.
  - [TypeScript](https://www.typescriptlang.org/): a statically typed superset of JavaScript.
  - [SCSS](https://sass-lang.com/): a preprocessor scripting language that is interpreted or compiled into CSS.
  - [Webpack](https://webpack.js.org/): a module bundler for JavaScript applications.
  - [Jira](https://www.atlassian.com/software/jira): a project management tool for agile teams.
  - [ESLint](https://eslint.org/): a pluggable linting utility for JavaScript and TypeScript.
  - [Prettier](https://prettier.io/): an opinionated code formatter for JavaScript and TypeScript.
  - [Husky](https://typicode.github.io/husky/): a Git hooks manager for running scripts on git actions.
  - [Jest](https://jestjs.io/): a JavaScript testing framework with a focus on simplicity.
- **API Integration:**
  - [Commercetools](https://docs.commercetools.com/docs/): a platform for e-commerce

### Setup and Running eCommerce application instructions:

- Use `node 18.20.1` or higher.
- Clone this repo: `$ git clone https://github.com/nadyayusova/rss-ecommerce.git`.
- Go to downloaded folder: `$ cd rss-ecommerce`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm start`.  
  \*note: if you have any errors after `$ npm install` please delete **_node_modules_** folder and **_package-lock.json_** file and run `$ npm install` again\*

### Scripts description:

- npm start  
  Runs the app in the development mode.  
  Open http://localhost:3000 to view it in the browser.  
  The page will reload if you make edits.  
  You will also see any lint errors in the console.

- npm run build  
  Builds the app for production to the build folder.  
  It correctly bundles React in production mode and optimizes the build for the best performance.  
  _The build is minified and the filenames include the hashes.
  Your app is ready to be deployed!_

- npm run build:dev  
  Builds the app for development to the build folder.
  This command is used to create a development build of the application.

- npm run check  
  Checks the code formatting using Prettier.
  This command will check all .ts and .tsx files in the project and report any formatting issues.

- npm run format  
  Formats the code using Prettier.
  This command will format all .ts and .tsx files in the project according to the Prettier configuration.

- npm run lint  
  Runs the ESLint linter on the project.
  This command will check all .ts and .tsx files for any linting issues.

- npm run lint:fix  
  Runs the ESLint linter and automatically fixes any linting issues found.
  This command will format all .ts and .tsx files in the project according to the ESLint configuration.

- npm run styles  
  Runs the Stylelint linter on the SCSS files.
  This command will check all .scss files for any styling issues.

- npm run styles:fix  
  Runs the Stylelint linter and automatically fixes any styling issues found.
  This command will format all .scss files in the project according to the Stylelint configuration.

- npm test  
  Runs the tests using Jest.
  This command will execute all the tests defined in the project, and report the results.

- npm run test:coverage  
  Runs the tests using Jest and generates a coverage report.
  This command will execute all the tests defined in the project, and generate a coverage report.

- npm run prepare  
  This command sets up the Husky git hooks in the project.
  Husky is used to run certain scripts before git actions like commit, push, etc.
