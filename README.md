# ZZ's Mini Radio

I use the `npm create-react-app` to create this app, then develop it to the requirements

IDE: Webstorm

Stack: React 17 + JS

Total time: 3 Hrs

Most time spent to find the appropriate tag input, and tune it to working

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##Some FYI

- I tried send HTTP request to fetch the JSON from S3, however, the CORS prevented me. So I directly copy it into the repo.
I use a Promise to mimic the async call
  
## What to do next
### React-router
I thought about the react-router to deliver better single-page app experience. Due to the time limit, I decide not to implement it

I would be happy to talk more about it in the onsite interview, if I make it that far :)

Same apples to *redux*

### Better styling
The css is minimal here. We can take advantage of less or scss if we continue on this project.


### Unit Test
Yeah, if I have more time, we can talk more about unit test

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

