# Conduit Real Worl React

## About the project

This project is an implementation of [Real World example app](https://github.com/gothinkster/realworld), using React ui framework.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run e2e`

Launches cypress test runner.
See [cypress docs](https://docs.cypress.io/guides/overview/why-cypress.html) for more information.

## Archtecture

The project is split in the following layers:

- Domain, includes: Entities, Object Values and Aggregates.
- App, includes the application use cases.
- Infra, handles AJAX methods, persistent data methods and other external services.
- State, handles the controls the logic behind the View
- View, includes UI and how some components should behave.
