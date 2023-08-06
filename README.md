# [Githunt - A GitHub Finder App](https://githunt.onrender.com/)
Githunt is a github finder app to search for Github users and display their info. The app shows the most followed users, most starred repositories and can find a user and display their github info and their repositories. The app achieves this by fetching from the Github API. Made with React 18

<!-- toc -->

- [Features](#features)
- [Built with](#built-with)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies](#install-dependencies)
  - [Run](#run)
- [Build & Deploy](#build--deploy)

<!-- tocstop -->

## Features

- Allows the client to search for any user on GitHub
- Displays the most followed users currently on GitHub
- Displays the most starred repositories currently on GitHub.
- Allows the client to get all the repositories hosted on GitHub for any user.

## Built with

- ReactJs
- React Hooks
- React Bootstrap

## Usage

- Register for a GitHub OAuth Account and get the github client and secret id.

### Env Variables

In the '.env' file 

```
GITHUB_CLIEND_ID = your github client id
GITHUB_CLIENT_SECRET = your github secret id
```


### Install Dependencies

```
npm install
```

### Run

```
npm start
```

## Build & Deploy

```
npm run build
```


