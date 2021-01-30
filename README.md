## Requirements
* OS: MacOS or Linux
* Node.js
* Homebrew

## Instructions for setting up

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

## Run the backend tests
```
cd backend
npm run test
```

## Run the application
```
cd backend
npm run dev
```
