# How To Use This Boilerplate Code

You can use this code to quickly and easily use Firebase v9.0.0

It supports these product:

- Firebase Authentication with Email/Password + Google Auth
- Firebase Realtime Database
- Firebase Storage

You can either use this as the base for your application and take out the views folder OR cherry pick the files you need.

## Initialize Firebase

First add firebase to your app: https://firebase.google.com/docs/web/setup

Start by installing using `npm install firebase`

Rename `fakeApiKeys.js` to `apikeys.js` and replace with your Firebase configs

In your `index.js` file make sure that firebase is imported and the app is initialized with `firebase.initializeApp(firebaseConfig);`

## Using It For Google Authentication

If using only google auth keep the `googleAuth.js` file

Initialize Firebase Authentication in your firebase account. Enable google as a sign-in method.

-- Methods --

googleAuth.signIn()

- params: no paramaters
- note: opens google sign in popup

googleAuth.signOut()

- params: no paramaters
- note: could be used for either signout methods

## Using It For Email/Password

If using only email/password auth keep the `emailAuth.js` file

Initialize Firebase Authentication in your firebase account. Enable email/password as a sign-in method.

-- Methods --

emailAuth.register()

- params:
  - userObject --> {name: , password: , displayName: }
- note: If not using Firebase Realtime Database make sure to take out the API call on `line 36` and replace it with your own

emailAuth.signIn()

- params:
  - userObject --> full object{name: , password: , displayName: }

emailAuth.signOut()

- params: none

## Using It For File Storage

If using only file storage keep the `photoStorage.js` file

Initialize Firebase Storage in your firebase account.

-- Methods --

photoStorage.upload()

- params:
  - bucket ---> name of folder
  - file ---> file to be uploaded
- note: Make sure that you are saving the return URL to an object in your database (ex: a user if its a user profile)

## Using It For Firebase Realtime Database

If using only Firebase Realtime Database keep the `api/dataAccess.js` file

Initialize Firebase Realtime Database in your firebase account.

-- Methods --

api.getRequest()

- params:
  - resource ---> name of table EX: users, pets, etc

api.getWithParameterRequest()

- params:
  - resource
  - param ---> What property you are searching by EX: pet_name, book_author
  - value ---> the value of that property EX: Nebula, J.K. Rowling

api.postRequest()

- params:
  - resource
  - info ---> the object that needs to be added to the database

api.putRequest()

- param:
  - resource
  - dataId ---> the ID of the object
  - info

api.deleteRequest()

- param:
  - resource
  - dataId

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
