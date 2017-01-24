# Neurobot-frontend with react

## Follow the steps below to set up the environment for this project.

#### 1. Navigate to (https://nodejs.org/en/) and download the latest version of NodeJS and run through the installer.

#### 2. Navigate into the folder in the terminal where you want to create/clone this React project.

#### 3. To create a new directory, follow step 4 onwards, or to clone and run this project, follow step 8 onwards.

#### 4. Set up the workspace in the directory to work with ReactJS using webpack.

```    npm init     ```

###### Press 'Enter' several times to set the npm init using the default settings.

###### This will create a file 'package.json' within your working directory.
###### This 'package.json' file is where you will manage the project dependencies which will be added later.

#### 5. Installing production dependencies

```    npm install react react-dom --save   ```

#### 6 . Installing development dependencies

```    npm install webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 babel-core --save-dev    ```

###### This will modify the 'package.json' file and add the dependencies needed.

#### 7. Copy the code below and replace the 'scripts' section in the 'package.json' file.

```
      "scripts": {
        "start": "npm run build",
        "build": "webpack -d && cp src/index.html dist/index.html && webpack-dev-server --content-base src/ --inline --hot",
        "build:prod": "webpack -p && cp src/index.html dist/index.html"
      },
```

#### 8. Run 'npm start' within the working directory to run webpack server in your terminal.

#### 9. Open your browser and enter (http://localhost:8080/) to view the project in the browser.