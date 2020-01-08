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

For more details about my web app you can [see my video walkthrough here](https://youtu.be/4gj6FD57kuo).

or check out my [blog post]https://gzavaglia.github.io/js_rails_project_contact_book).

## Testing the App

This app is avaliable to:
- Sign Up: Create new user and authenticating passwords and the uniqueness of your email address
- Log in: Utilize your email + password combo to log into your account.
- Log in using Facebook.
- Once you're logged in, you'll be welcome by your name.
- You should be able to creat new workout and add them (new or from our database) into your list and see your workouts list.
- Navigate into each Workout/Routine to see its details (such as calories burned, time/reps, muscle groups).
- Search by muscle group in the workouts index page.
- You can also edit your routines.
- If you don't like that workout anymore you can always delete it!
- Done? Try logging out! 

Try doing all of this things!

### Built With
- ActiveRecord
- JavaScript
- Ruby on Rails
- VS Code

### Author
Gio Zavaglia