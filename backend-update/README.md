# stock-app-api
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