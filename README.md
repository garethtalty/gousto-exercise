## Gousto Exercise

This is a brief project to display how I would approach creating a simple subscription calendar for Gousto as requested by Tim Haines.

## Live Demo

Can be found at http://gousto-exercise.herokuapp.com

## Timing
Although the exercise instructions advised not to spend time on server-side functionality, I believe a small amount of server side code was required in order to demonstrate how I would implement the front end. Therefore I took a little time to provide simple server side functionality. Please exlude this time from the 1.5 hrs recommended time to spend on this exercise.

Breakdown of timings provided below.

0:20 Planning structure of application
-- 0:20 Setting up new Rails application
-- 0:10 Finding and building a server side calendar
0:20 Writing template HTML
0:25 Writing CSS
0.30 Writing javascript 
0.15 Testing and deploy to github/heroku


## Assumptions
Only built and briefly tested in most recent version of Chrome
Form can be also completed by non-javascript users (currently they can only select delivery/no delivery. plan to extend this for delivery on hold also. JS users have all options)
Utilising bootstrap to conform to current Gousto layout
Form submits an array of objects for selected dates with a value of 1 or 2
1: Delivery
2: On hold

(0: Delivery Available (not submitted in the POST))


## Further Work 
Functionality not yet complete - "Delivery days cannot be edited once a cut off passes (Cut off is Wednesday at 23:59:59, lead time is 7-9 days. For example cut off for delivery 10th and 12th of September was this Wednesday the 3rd"

Plan to implement the above:

Integrate moment.js for timezone/locality parsing. 
1. As calendar is loaded, poll Date.getTime() and parse with moment.js
2. td = time difference between the the Next wednesday and current time.
3. window.setTimeout function to be called after td ms - function will disable both weds and fri by setting the checkbox property to disabled

There is a lot of work that should be added to this short implementation to advance from a prototype, including but not limited to:
- Inclusion of Compass to remove vendor preferences from CSS files
- Minification and compression of CSS/Javascript files
- Unit testing
- Cross browser testing

## Installation

This project can be installed and run locally on any linux machine with RVM 1.9.3+ and Bundler.

Installation is as follows:
bundle install
bundle exec rails s

## Tests

No formal testing has been conducted and has been built using a happy browser. http://browsehappy.com

## Contributors

Gareth Talty (garethtalty@gmail.com)
Based on modified example of Rails Calendar: https://github.com/RichIsOnRails/CalendarExample