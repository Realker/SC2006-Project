# HDBFinder Backend - Getting Started with Django and Docker

- This backend component was made with [Django](https://www.djangoproject.com/).
- The databse of choice is [PostgreSQL](https://www.postgresql.org/).
- The backend and databse is containerised with [Docker Desktop](https://docs.docker.com/desktop/) for ease of collaborative use.

### Setting up
The following steps only needs to be done once, or upon every update to the project's [libraries/requirements](https://github.com/Realker/SC2006-Project/blob/main/Server/requirements.txt).

1. Install Docker-Desktop [here](https://www.docker.com/products/docker-desktop/).
2. Open your terminal and navigate to the "backend" folder (same folder as the README.md file).
3. Type the following command:
    `docker-compose build`
    - This will install the relevant backend [libraries/requirements](https://github.com/Realker/SC2006-Project/blob/main/Server/requirements.txt) and build your project within a new Docker container. This step might take a while.
4. Type the following command:
    `docker-compose run --rm app sh -c "python manage.py makemigrations"`
    - This command is used to check if there are any pending updates/changes within the [models.py](https://github.com/Realker/SC2006-Project/blob/main/Server/app/core/models.py) file to make a migration for.
    - This step only needs to be done whenever there are updates/changes within the [models.py](https://github.com/Realker/SC2006-Project/blob/main/Server/app/core/models.py).

### Creating a super user (admin account)
Type the following command:
    `docker-compose run --rm app sh -c "python manage.py createsuperuser"`
    This command is used to create a superuser/admin account to view the Django administration page. Fill in the details accordingly.

### Starting the backend server and database
1. Type the following command:
    `docker-compose up`
    - This command will do the following:
        - *migrate*: Migrations.
        - *wait_for_db*: Wait for the databse to be running and available before running the server.
        - *runserver*: Run the Django backend application on [127.0.0.1:8000](127.0.0.1:8000).
2. Open google-chrome and proceed to [127.0.0.1:8000](127.0.0.1:8000).

### Populating the database with HDB Resale Flat price info from [data.gov.sg](https://data.gov.sg/dataset/resale-flat-prices)
Ensure that the backend server and database has started and is running. Ensure a superuser account has been created. Only do this step once.

1. Go to the backend API documentation webpage created using [Swagger](https://swagger.io/) at [http://127.0.0.1:8000/api/docs/](http://127.0.0.1:8000/api/docs/).
2. Locate the following endpoint: [/api/user/token/](http://127.0.0.1:8000/api/docs/#/user/user_token_create)
3. Click on "Try it out" and enter the superuser email and password. Click "Execute"
4. If successful, there will be a response:
`{ "token": "<your_admin_token_here>" }`
5. Copy your admin token excluding the quotation marks.
6. Proceed to the top of the page and locate the "Authorize" button. Click on it and a pop-up should appear.
7. Within the tokenAuth (apiKey) value field, type "Token <your_admin_token_here>".
8. Press "Authorize" and then "Close".
9. Locate the following endpoint: [/api/hdbflat/populate_from_datagovsg/](http://127.0.0.1:8000/api/docs/#/hdbflat/hdbflat_populate_from_datagovsg_retrieve)
10. Click on "Try it out". Click "Execute" only ONCE.

The hdbflat within the PostgresQL database will populate.

### Relevant pages
[*Django Administration*](http://127.0.0.1:8000/admin/): Used to manage the database.
[*Live API documentation*](http://127.0.0.1:8000/api/docs/): Used to view API endpoint documentations. Updates made on the source code will be reflected live.
