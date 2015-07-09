ReadMe
========

### A MEAN stack app using the Amazon Products API

This app uses the Amazon Products API to allow users to save their favourites authors and then receive an alert when they release a new book. At least that's the theory. It turns out that the API doesn't return all new releases in the Amazon database so it would actually be very tricky to tell when specific new titles are released. The solution would be to check the database every day and do a diff of some kind, but that's obviously not ideal so this app is on hiatus for a while ;).

#### The techy stuff

Node server running express with an Angular front end and Mongo DB database. It uses bootstrap and SASS (although I haven't done much in the way of styling yet).