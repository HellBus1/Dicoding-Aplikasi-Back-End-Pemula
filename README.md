# Dicoding Submission Belajar Membuat Aplikasi Back End untuk Pemula

## Warning
Use this repository with consent and avoid plagiarism

## Course
https://www.dicoding.com/academies/261

## Prerequisite
1. Node.js v16 (or nvm)
2. Visual Studio Code
3. npm / yarn

## How to run
```
yarn install / npm install
yarn start (to start prod compiled code - js)
yarn dev (to start dev code - ts)
yarn build (to compile)
yarn lint (to perform syntax check)
```

## Project structure
```
├── ...
├── src                  
│   ├── handlers  # Contains request / response handlers for hapi               
│   ├── books.ts  # Array that act as storage
│   ├── index.ts  # Entry point
│   ├── model.ts  # Model for parsing request / response
│   └── routes.ts # API Routing
└── ...
```