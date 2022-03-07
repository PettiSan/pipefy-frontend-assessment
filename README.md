# Huge disclaimer

About the CSS structure, due to a bug between Tailwind and CRA in the latest versions it is not possible to use the postcss-nested plugin.

See more **[here](https://stackoverflow.com/a/70976599)**

How it's
![image](/src/assets/css-default.jpeg)

How should it be
![image](/src/assets/css-formated.jpeg)

# Firebase Hosting

Firebase Hostring **[URL](https://pipefy-assessment.web.app/)**

# Features

- <b>Firebase Hosting</b> - To live test
- <b>Apollo codegen</b> - To automatically generates GraphQL types
- <b>TailwindCSS</b> - As CSS framework
- <b>React Helmet Async</b> - To handle head meta tags
- <b>Craco</b> - To overwrite the CRA tsconfig.json and enable paths aliases

# App Instructions

To run this App you will need to create a .env file and add these <b>3</b> variables in it:

**OBS: There's a new enviroment variable dependency, REACT_APP_PIPEFY_ORGANIZATION_ID**

```
REACT_APP_PIPEFY_API_URL=https://app.pipefy.com/queries
REACT_APP_PIPEFY_API_TOKEN=<API_TOKEN>
REACT_APP_PIPEFY_ORGANIZATION_ID=<ORGANIZATION_ID>
```

## Available Scripts

### `yarn start`

Runs the app in the development mode and also gql-watch-schema script.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `gql-watch-schema`

Launches the apollo codegen in the watch mode.\

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
