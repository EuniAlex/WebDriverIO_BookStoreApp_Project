const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login.page');

Given('the user is on book Aplication', function()  {
    LoginPage.open();
});

//Scenario: User creates a new user

When('the user enters login page', async() =>{
        await LoginPage.loginPageValidacion();
           
});

When('clicks on new user', async() => {
        await LoginPage.newUserValidacion();
           
});

When('creates new user with firstname as {string}, lastname as {string}, username as {string} and password as {string}', async(firstname, lastname, username, password) =>{
        await LoginPage.createNewUser(firstname,lastname,username,password);
        
});

Then('the user could not create new user {string}', async(errorMessage) => {      
        await LoginPage.returnToLogin();
});

//Scenario: User logs in using invalid credentials 

When('inserts invalid credencials username as {string} and password as {string}', async(username,password) => {
        await LoginPage.insertCredentials(username,password);
           
});

When('click on login button', async() =>{
        await LoginPage.loginButtom.click();
});

Then('error message is shown on screen {string}', async(errorMessage) => {      
        await LoginPage.findErrorMessage();
        
});

//Scenario: User logs in using valid credentials

When('inserts username as {string} and password as {string}', async(username,password) => {
        await LoginPage.insertCredentials(username,password);
           
});

When('click button to login', async() =>{
        await LoginPage.loginButtom.click();
        
});

Then('user enter to profile', async() => {      
        await LoginPage.validateLogin();
        
});

