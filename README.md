## demo.planetmarvel.net

<div align="center">
    <img height="96px" src="./public/planet-marvel-logo-dark.png" /><br />
    <img height="24px" src="./public/planet-marvel-title-img.png" />
</div>
<br/>
<p align="center">Home for the better, <i>witty</i> Supers.</p>

[Planet Marvel ](https://demo.planetmarvel.net)is a demo app built with create-react-app. It was built per these [specs](./SPECS.md)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The app is hosted on AWS S3 & CloudFront.

## INTERACTING WITH THE DEMO

1. Navigate to [demo.planetmarvel.net](https://demo.planetmarvel.net)
2. Login with `bwayne@batcave.io` and password `iamironman` (someone is spying in from the other superhero multiverse, with some envy.)
3. Navigate to `Comics` on the NavBar.
4. Search for any Marvel super hero. Iron Man. Captain America. Hulk. Thor. Spider-Man. 
5. Scroll thru results. Click on any Comic card, should navigate to the comics details page.
6. Select `Return to List` to go back to the search.
7. Reload the page. State should be preserved.

That's it!

## DEVELOPMENT

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn serve`

Run after `yarn build` in order to serve up the App locally in production mode

### Local Development

Note: You will have to have a public and private key to the developer.marvel.com API for this to work.

1. Install dependencies: `$ yarn install`
2. Create a local `.env` file for the Proxy API from [./proxyApi/.env.example](./proxyApi/.env.example). Populate needed values.
3. Create a local `.env` file for the Client from [./.env.example](./.env.example). Populate needed values.
4. Run the proxy: `$ yarn proxy-api`
5. Launch the client: `$ yarn start`
