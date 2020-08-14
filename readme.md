## ADDRESS BOOK APP

### TECHNOLOGIES

- **YARN**
- **WEBPACK**
- **ESLINT**
- **PRETTIER**
- **BABEL**
- **REACT HOOKS**
- **REACT-ROUTER**
- **REACT-MODAL**
- **REDUX**
- **AXIOS**
- **SCSS**
- **JEST**
- **REACT-TESTING-LIBRARY**

### SETUP

* **clone repo**: In your folder, open a new terminal and clone the repo
* **install dependencies**: Execute *yarn*
* **run local server**: Execute *yarn start*
* **create production files**: Execute *yarn build*
* **run test suites**: Execute *yarn test*

### DEVELOPMENT

First, I created my own scaffolding by adding Webpack, Eslint, Prettier and Babel files. As package manager I used Yarn.

This app was developed with React, React-router, React-modal Redux, Axios. SCSS was used to style the application.

The source files are in src folder that is composed of following folders:

* **assets**: Images and html generator (.ejs)
* **components**: App components organized by the following folders:
    * **core**: Presentational components related to UI elements
    * **hooks**: Custom hook components
    * **layout**: Presentational components related to the layout of the application
    * **pages**: Container components related to the pages of the application
- **scss**: Styles of application with the same structure as components folder by adding a utils folder with vars, mixins, etc...
- **services**: Api requests
- **store**: Global state by implementing reducers, actions and actionTypes
- **utils**: Supporting constants and models

Finally, Github was used in order to handle this repository. I worked with different branches regarding the required tasks and when these ones were ready I merged the metioned branches to master branch by using Pull Requests.

### TESTING

I added unit tests to Layout and Core components with Jest and React-testing-library.


