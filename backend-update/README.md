# Getting Started with Django and Docker

This backend component was made with [Django](https://www.djangoproject.com/).
The databse of choice is [PostgrSQL](https://www.postgresql.org/).
The backend and databse is containerised with [Docker Desktop](https://docs.docker.com/desktop/) for ease of collaborative use.

## Setting up

Install Docker-Desktop [here](https://www.docker.com/products/docker-desktop/).
- Ensure

## Starting the backend

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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


# hdbfinder-app-api
Stock market API project

docker build .

docker-compose build

To start the backend, go to the backend directory, and type in your console "docker-compose up"

To type in a relevant command, go to the backend directory, and type in your console "docker-compose run --rm app sh -c "abcde" "

"abcde" can be starting a project "django-admin startproject name_of_app ."
"abcde" can be starting an app "python manage.py startapp name_of_app"
"abcde" can make migrations when a new model is created "python manage.py makemigrations && python manage.py wait_for_db && python manage.py migrate"
"abcde" can create superuser "python manage.py createsuperuser"

To view the APIs, go to http://127.0.0.1:8000/api/docs/#/ in a common web browser (e.g. google chrome)

To view the admin page, go to http://127.0.0.1:8000/admin/login/?next=/admin/