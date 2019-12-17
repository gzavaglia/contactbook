# CONTACT-BOOK

## Gio's Flatiron Rails Project

This is my 3rd project with Flatiron. This projects encapsules everything learn up to this point: Ruby, HTML, CSS, ActiveRecord, Rails, CRUD & REST.

## The App

This application helps you keep track of your favorite workouts! You can find the main workout database and add them to your list. Just Sign up/Log in using an email or through Facebook and start pumping iron!

## Getting Started

To get started with the app, clone the repo and then install the needed gems:

```
$ bundle install
```

Next, migrate the database:

```
$ rake db:migrate
```

Then run the app in a local server:

```
$ rails server
```

For more details about my web app you can [see my video walkthrough here](https://youtu.be/4gj6FD57kuo).

or check out my [blog post](https://gzavaglia.github.io/rails_project_make_it_or_break_it).

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