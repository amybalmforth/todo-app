To-do list app with functionality to add a todo (task name and description required, date optional), complete a todo, uncomplete a todo, and delete a todo.

## Requirements
* OS: MacOS or Linux
* Node.js
* Homebrew

## Instructions for setting up

Clone the repository:
```
git clone git@github.com:amybalmforth/todo-app.git
cd todo-app
```

Install MongoDB:
```
brew tap mongodb/brew
brew install mongodb-community@4.4.3
```

Start the MongoDB service:
```
brew services start mongodb-community@4.4.3
```

Install the backend dependencies:
```
cd backend
npm install
```

Install the frontend dependencies:
```
cd frontend
npm install
```

## Run the backend tests using test database
```
cd backend
npm run backend-test
```

## Run the frontend tests using test database
Server needs to be running using the test database in order to run frontend tests. In one terminal:
```
cd backend
npm run backend-test
```
In a separate terminal:
```
cd frontend
npm run cypress
```
Opens the Cypress GUI - click "run integration tests"

## Run the application
```
cd backend
npm run dev
```
