# DevSpace-App

## App link
Got to the following link to access the app:
[DevSpace-App](https://github.com/shady-mungai/DevSpace-App)

# Description
DevSpace-App is a web application built with React, Ruby and Node.js that allows developers to create and share coding tutorials with other developers. The application allows users to sign up, create a tutorial, and publish it to the site for others to view and learn from. Users can also browse and search for tutorials created by other users.

- Diagram showing the table relationships of the backend tables 

![alt text](/dev-space-server/public/erd.png)

### Deployment 
#### Backend 
- The backend application is deployed by render
```bash 
 https://dev-space-server-fodl.onrender.com/
 ```

#### Front-end
- Front-end application is deployed by vercel 
```bash
https://dev-space-app.vercel.app/
```

## User Story
Once the application is up and running, you can sign up for an account by clicking on the "Sign Up" button on the homepage. Once you have created an account, you can create a new tutorial by clicking on the "Create Tutorial" button in the navigation bar. From there, you can enter the title and content of your tutorial.

You can also browse and search for tutorials created by other users by clicking on the "Search" button in the navigation bar. From there, you can filter tutorials by category or search for tutorials by keyword.

## Installation
- Node.js (v10.0.0 or later)
- Git (v2.13.0 or later)
- Ruby (v2.7.4 or later)

## Development Requirements
(a) Client side
- Visual Studio Code.
- Live server extension.
- Json-server packages installed 
- npm 
- Browser(Chrome or any other Chromium based Browser)

(b) Server side
- Visual Studio Code.
- Thunder Client extension.
- Json-server packages installed.
- Gem-server packages installed

## Development Installation
To get the code..

1. Got to the following github repository to access the files.
```bash
https://github.com/shady-mungai/DevSpace-App

2. Fork and Clone the repository above to your local computer.

3. Move to the folder where you cloned the files and install the relevant extension. the extension are:

```bash
LiveServer Extension
```

```bash
ThunderClient Extension
```

4. Open the folder in `VS Code` using the command 
```bash
code .
```

5. Running the application

- For the client side open a new terminal, change the directory to client and write:
```bash
npm install
```
This will install the relevant dependencies for the json packages.
To run the server, type:
```bash
npm start
```

This will run the front-end program that shall open in a web browser.
- For the server side open a new terminal and write:
```bash
bundle install
```

- This will installs all the gems listed in the Gemfile lock.

- To run the server, type:
```bash
rails s
```
- In ThunderClient, navigate to:
```bash
http://localhost:3000
```

-  You can then perform CRUD (Create, Read, Update, Delete) using:
```bash
POST, GET, PATCH and DELETE
```

## Technology used

- [HTML5](https://www.python.org/)
- [Javascript](https://heroku.com)
- [CSS]
- [React]
- [Rails]

## Author.
This project was contributed to by:

- Shadrack Mungai.
- Steve Mbugua.
- Simon Muriithi.
- Ryan Langat.
For this project's sourcecode is in [Shadrack Mungai github  account.](https://github.com/shady-mungai/)

## License
The DevSpace-App is licensed under the MIT license.