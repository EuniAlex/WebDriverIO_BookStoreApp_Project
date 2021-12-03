const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login.page');
const ProfilePage = require('../pages/profile.page');
const BookStorePage = require('../pages/bookstore.page');

Given('the user logged in with username as {string} and password as {string}', async(username, password) =>  {
    ProfilePage.open();
    await LoginPage.insertCredentials(username,password);
    await LoginPage.loginButtom.click();
    await LoginPage.validateLogin();
});

//Scenario: User searchs for a book

When('enters to profile seccion', async() =>{
        await ProfilePage.enterProfilePage();
        await ProfilePage.profilePageValidacion();
});

Then('user inserts book title as {string} in the search bar', async(bookTitle) =>{
        await ProfilePage.searchForBook(bookTitle);
        await ProfilePage.validateBookTitleLink();
        await ProfilePage.logout();
        
});

//User deletes one book of the profile

When('user click on the delete button of the desire book to be deleted', async() =>{
        await ProfilePage.enterProfilePage();
        await ProfilePage.deleteBook2();
        await ProfilePage.confirmDelete();
        await browser.refresh();
});

Then('the book was deleted', async() =>{
        await ProfilePage.validateBook2NotExiste();
        await ProfilePage.logout();
});


//Scenario: User deletes all books 

When('click on the button Delete All Books', async() =>{
        await ProfilePage.enterProfilePage();
        await ProfilePage.deleteAllBook();
        await ProfilePage.confirmDelete();
        await browser.refresh();
});

Then('all books of the profile are deleted', async() =>{
        await ProfilePage.ValidateTableZero();
});