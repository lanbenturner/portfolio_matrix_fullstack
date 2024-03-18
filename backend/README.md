BACKEND DEVELOPMENT:


ACTIVATE VIRTUAL ENVIRONMENT:
python3 -m venv venv
source venv/bin/activate


Make sure your PostgreSQL service is stopped before running. Start server with:
brew services stop postgresql@14
brew services start postgresql@14


Apply Database Migrations:
python manage.py migrate


START APPLICATION:
python manage.py runserver
