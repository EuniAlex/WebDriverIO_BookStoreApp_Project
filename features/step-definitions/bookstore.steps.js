const { Given, When, Then } = require('@cucumber/cucumber');
const BookStore = require('../pages/bookstore.page');

Given('the user is on the book store seccion', async()  =>{
    BookStore.open();
    await BookStore.validateMainPageBookStore();
    
});

//Scenario: User increments the number of rows shown in the table

When('user click to increment rows to 20', async() =>{
    await BookStore.incrementRows();
       
});

Then('the number of row increases to 20', async() => {      
    await BookStore.ValidateIncrementRows(20);
});

//Scenario: User search for the book "You Don't Know JS"

When('enter the title of the book as {string} in the search bar', async(bookName) =>{
    await BookStore.searchForBook(bookName);
       
});

When('clicks on the books title', async() =>{
    await BookStore.clickBookTitle();
       
});

Then('user should be redirected to the book informacion page', async() => {      
    await BookStore.validateBookInfo();
});

//Scenario: User search for the book "You Don't Know JS"

When('user click on the title on book {string}', async(bookName) =>{
    await BookStore.searchForBook(bookName);
    await BookStore.clickBookTitle();
       
});

When('reads the information and clicks on the url displayed', async() =>{
    await BookStore.validateBookInfo();
    await BookStore.clickOnWebSite();
       
});

Then('user will be redirected to page {string}', async(urlPage) => {      
    await BookStore.validateOreillyPage(urlPage);
});