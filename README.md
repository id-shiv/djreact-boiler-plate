# Django + REACT

## Setup Visual Studio Code

- Install `Simple React Snippets` extension.
- Install `Prettier` extension.

## Create a REACT frontend app

`npm create-react-app web-ui`  
`cd web-ui`  
`rm -rf .git`  
`npm start`  
`npm i @material-ui/core`  
`npm i @material-ui/icons`

## Install Chrome extension for React debugging

`React Developer Tools`

## Create a Django backend app

`mkdir backend`  
`cd backend`  
`pip install virtualenv`  
`virtualenv venv`  
`source venev/bin/activate`  
`pip install django`  
`pip install djangorestframework`
`pip freeze > requirements.txt`  
`django-admin startproject api`  
`rename api src`  
`cd src`  
`python manage.py startapp applications`
