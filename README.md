# watchflix
A full stack React Redux application to replicate Netflix

Mobile First and Desktop Oriented

## Technologies Used

- React.js
- Redux
- Redux-Thunk
- Webpack 4
- Babel
- Node
- Express
- Postgresql
- Axios
- Dotenv
- HTML5
- CSS3
- PM2
- AWS EC2
- themoviedb API

## Live Demo

Try the application live at [https://watchflix.uzairashraf.dev/](https://watchflix.uzairashraf.dev/)

To login use any of the five premade users

## Features

- User can login
- User can view movie data
- User can view movies from randomly generated genres
- User can add movies to their list
- User can remove movies from their list
- User can watch trailer from movie


## Preview

![Watchflix](preview.gif)


## Development

#### System Requirements

- NPM 6 or higher
- Postgresql 10 or higher

#### Getting Started

1. Get api key.

    Headover to:
    ```shell
    https://www.themoviedb.org/account/signup
    ```

    Create an account and request an api key.

1. Clone the repository.

    ```shell
    git clone https://github.com/uzair-ashraf/watchflix.git
    cd watchflix
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```

1. Create enviornment variables.

    ```shell
    npm run clone:env
    ```
    head into the .env file to add your api key and your postgres credentials.
    

1. Import the example database to Postgresql.

    ```shell
    npm run db:import
    ```

1. Start node server.

    ```shell
    npm run server
    ```

1. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```

