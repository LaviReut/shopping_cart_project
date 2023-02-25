# Shopping-cart
A basic Shopping-cart built with React and Django REST Framework(DRF) and deployed on docker(Django Image + Postgresql Image + Nginx Image) using docker-compose.

## Dependencies
* Docker
* Docker-compose


## High Level Design

![Alt text](ReadmeImages/HLD.png?raw=true "HLD")

## Unit Tests

Run Unit Tests on local host:

    cd backend
    python -m venv venv
    venv/Scripts/Activate.ps1
    pip install -r requirements
    python manage.py test

## Deployment
Clone this repository:

    git clone https://github.com/damnee562/shopping-cart.git

Run Docker-compose Deployment:

    docker-compose up -d --build

Check deployment status:

    docker ps

Suppose to be 3 running containers:
* web
* db
* api
    
To view logs from each container run:

    docker logs <container_id>


## Built With
* [React](https://facebook.github.io/react/) - A JavaScript library for building UI
* [Semantic UI React](https://react.semantic-ui.com/introduction) - A React UI framework
* [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps
* [Django REST framework](http://www.django-rest-framework.org/) - A powerful and flexible toolkit for building Web APIs
* [django-rest-framework-jwt](http://getblimp.github.io/django-rest-framework-jwt/) - JSON Web Token Authentication support for Django REST framework
* [axios](https://github.com/mzabriskie/axios) - A Promised based HTTP client
* [toastr](https://github.com/CodeSeven/toastr) - Simple javascript toast notifications

## Deployed With
* [Dcoker](https://www.docker.com/) - Container service
* [Docker-compose](https://docs.docker.com/compose/) - A tool to manage multi-container application deployment 
* [Postgresql](https://www.postgresql.org/) - SQL Database
* [Nginx](https://www.nginx.com/) - Web Server 