const BasePage = require('./base.page')
const SecurePage = require('./secure.page')
const expectChai = require('chai').expect;

class Profile extends BasePage {

    open() {
        super.open('https://demoqa.com/books')
    }

    get profileSeccionButton () {return $('//body/div[@id="app"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[6]/div[1]/ul[1]/li[3]')}
    get profileTitle () {return $('//div[contains(text(),"Profile")]')}
    get searchBar () {return $('#searchBox')}
    get usernameLabel () {return $('//label[contains(text(),"User Name :")]')}
    get username () {return $('#userName-value')}
    get logOutButton () {return $('//button[contains(text(),"Log out")]')}
    get tableOfBooks () {return $('div[class="ReactTable -striped -highlight"]')}
    get goToBookStoreButton () {return $('#gotoStore')}
    get deleteAccount () {return $('//button[contains(text(),"Delete Account")]')}
    get deleteAllBooks () {return $('//button[contains(text(),"Delete All Books")]')}
    get bookTitleLink() {return $('//a[contains(text(),"Git Pocket Guide")]')}
    get goToBookStoreInfoButton () {return $('#addNewRecordButton')}
    get deleteconfirmation() {return $('#closeSmallModal-ok')}
    get tableOfBooksBody() {return $$('div[class="rt-tr-group"]')}
    get deleteButtonForBook2() {return $('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper div.ReactTable.-striped.-highlight:nth-child(2) div.rt-table div.rt-tbody div.rt-tr-group:nth-child(2) div.rt-tr.-even div.rt-td:nth-child(5) div.action-buttons span:nth-child(1) > svg:nth-child(1)')}
    get book2Title() {return $('//a[contains(text(),"Learning JavaScript Design Patterns")]')}

    async enterProfilePage(){
        await this.profileSeccionButton.scrollIntoView();
        await this.profileSeccionButton.click();

    }
    
    async profilePageValidacion(){
        
        await expect(this.profileTitle).toBeExisting();
        await expect(this.searchBar).toBeExisting();
        await expect(this.usernameLabel).toBeExisting();
        await expect(this.username).toBeExisting();
        await expect(this.logOutButton).toBeExisting();
        await expect(this.tableOfBooks).toBeExisting();
        await this.goToBookStoreButton.scrollIntoView();
        await expect(this.goToBookStoreButton).toBeExisting();
        await expect(this.deleteAccount).toBeExisting();
        await expect(this.deleteAllBooks).toBeExisting();
    }

    async searchForBook(bookTitle){
        await this.searchBar.scrollIntoView();
        await this.searchBar.setValue(bookTitle);

    }
    async validateBookTitleLink(){
        await expect(this.bookTitleLink).toBeExisting();
    }

    async deleteAllBook(){
        await this.deleteAllBooks.scrollIntoView();
        await this.deleteAllBooks.click();
    }

    async confirmDelete(){
        await this.deleteconfirmation.scrollIntoView();
        await this.deleteconfirmation.click();
    
    }

    async backToBookStore(){

        await this.goToBookStoreInfoButton.scrollIntoView();
        await this.goToBookStoreInfoButton.click();
    }

    async logout(){
        await this.logOutButton.click();
    }

    async ValidateTableZero(){
        
        await expect(this.bookTitleLink).not.toBeDisplayed();
    }

    async deleteBook2(){
        await this.deleteButtonForBook2.click();
    }

    async validateBook2NotExiste(){
        await expect(this.book2Title).not.toBeDisplayed();
    }

}

module.exports = new Profile();