# CONTACT-BOOK

## Gio's Flatiron Rails Project

This is my 4th project with Flatiron. This projects encapsules everything learn up to this point: JavaScript, Ruby, HTML, CSS, ActiveRecord, Rails, CRUD & REST.

## The App

This is a single page app used to keep track of your contacts emails and phone numbers.

The backend is a database built using Rails-API and the frontend is built with JavaScript. 

## Getting Started

To get started with the app, clone the repo and then install the needed gems:

```
$ bundle install
```

Next, we're going to set up the database, starting with the migration:

```
$ rails db:migrate
```

And adding seeds if you'd like with:

```
$ rails db:seed
```

Then run the app in a local server:

```
$ rails s
```
Now that the API is set up and ready to handle all the information thru the app, open the **index.html** file using chrome. 

*And voila*, the app is ready for you to use!

For more details about my web app you can [see my video walkthrough here](https://youtu.be/oTD9QlBKlAs).

or check out my [blog post]https://gzavaglia.github.io/js_rails_project_contact_book).

## Testing the App

This app is avaliable to:
- Create new contacts by adding the information asked and clicking submit
- Update contacts by double-clicking on the phone number/email address
- Delete contacts when clicking on the delete button
- Throw an error if the contact that is being trying to create doesn't have a name or if the phone number/email address are already part of the database.


### Built With
- ActiveRecord
- JavaScript
- Ruby on Rails
- VS Code

### Author
Gio Zavaglia