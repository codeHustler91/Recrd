# RECRD

## To-Do list app with timer

[RECRD website](https://recrd-react-front-end.firebaseapp.com/)

[Backend GitHub](https://github.com/codeHustler91/Recrd-backend)

Thanks for checking it out!

Project by [@codeHustler91](https://github.com/codeHustler91)

## Basic flow of app

### Welcome Menu
   * Login to existing account
   * Register for new account

   ![Welcome Menu](./public/assets/welcomeScreenShot.png)

### Main User Page
   * Task List
       * Save all your daily tasks
       * write a note for each task
       * Add new tasks
       * Click a task to start recording times!
       
   ![Adding Task](./public/assets/addingTask.gif)
   * Active Task
       * Show task
       * Edit task information
       * Click "New Timer" to get a stopwatch for that task
       
   ![Edit Task](./app/assets/editTask.gif)
   * Metrics
       * After 3 data points have been captured:
       * Shows Shortest, Longest, Average, and Total times for the Task
       
   ![Metrics](./app/assets/metrics.gif)
   * Log out of your account

### Settings
   * Change your mame
   * Change your theme (coming soon)

   ![Changing Names](./app/assets/changeName.gif)

### Model

   | User |---------<| Tasks |----------<| Attempts |

### Assets used:
   * React.js
   * Redux

#### Credits
   * API : thanks to Datamuse API for giving open access to their api
      * [link to API!](https://www.datamuse.com/api/)
   * API : thanks to PoetryDB for giving open access to their api
      * [link to API!](http://poetrydb.org/index.html)
   * Thanks to Flatiron Schools for guided support
