# Designing Your Life: Companion App

The Designing Your Life: Companion App is a web-based workbook for Bill Burnett and David Evans’s book, Designing Your Life. It is a digital resource for readers to record and update their responses to the book’s exercises. The app guides a user through the process of creating a Health/Work/Play/Love Dashboard where they can assess where they are and add commentary.

## Getting Started

For deployment and testing purposes, clone this repository on GitHub.

![Designing Your Life: Companion App UI](https://i.imgur.com/YVL4W8c.png)

### Installing

To install all necessary dependencies, run
```
$ npm install
```
then launch the server on port 4000 using
```
$ nodemon
```
To access the data launch MongoDB and in a new tab use mongo to find all users in the database.
```
$ mongod
```
```
$ mongo
```
```
$ dyl use
$ show collections
$ db.users.find()
```

## Built With

* MongoDB
* Express
* Handlebars
* Node
* CSS

## Contributing

Contributions not accepted at this time.

## Screencast

https://www.youtube.com/watch?v=JbpadrqhYOs&feature=youtu.be

## Authors

* **Donell Ellis** https://github.com/donellellis

## Acknowledgments

* Inspiration https://designingyour.life/the-book/
