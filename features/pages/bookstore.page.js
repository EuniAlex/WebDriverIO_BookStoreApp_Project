const BasePage = require('./base.page')
const SecurePage = require('./secure.page')
const expectChai = require('chai').expect;
let inicialLenght = 0;
let validateIncrement = false;


class BookStore extends BasePage {

    open() {
        super.open('https://demoqa.com/books')
    }

    get bookStoreTitle () {return $('//div[contains(text(),"Book Store")]')}
    get tableOfBooks () {return $('div[class="ReactTable -striped -highlight"]')}
    get searchBar () {return $('#searchBox')}
    get searchButtom () {return $('#basic-addon2')}
    get paginacionSeccion () {return $('div[class="pagination-bottom"]')}
    get incrementRowSelector () {return $('span[class="select-wrap -pageSizeOptions"]')}
    get incrementOption20() {return $('option[value="20"]')}
    get tableOfBooksBody() {return $$('div[class="rt-tr-group"]')}
    get bookTitleLink() {return $('//a[contains(text(),"Git Pocket Guide")]')}
    
    get titleBookLabel() {return $('#title-label')}
    get titleBook() {return $('//label[contains(text(),"Git Pocket Guide")]')}
    get isbnLabel() {return $('#ISBN-label')}
    get isbn() {return $('//label[contains(text(),"9781449325862")]')}
    get subTitleLabel() {return $('//label[@id="subtitle-label"]')}
    get subTitle() {return $('//label[contains(text(),"A Working Introduction")]')}
    get authorLabel() {return $('#author-label')}
    get author() {return $('//label[contains(text(),"Richard E. Silverman")]')}
    get publisherLabel() {return $('#publisher-label')}
    get publisher() {return $('/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[5]/div[2]/label[1]')}
    get totalPagesLabel() {return $('#pages-label')}
    get totalPages() {return $('//label[contains(text(),"234")]')}
    get descriptionLabel() {return $('#description-label')}
    get description() {return $('//label[contains(text(),"This pocket guide is the perfect on-the-job compan")]')}
    get websiteLabel() {return $('#website-label')}
    get website() {return $('//label[contains(text(),"http://chimera.labs.oreilly.com/books/123000000056")]')}

    

    async validateMainPageBookStore(){
        await expect(this.bookStoreTitle).toBeExisting();
        await expect(this.tableOfBooks).toBeExisting();
        await expect(this.searchBar).toBeExisting();
        await expect(this.searchButtom).toBeExisting();
        await this.paginacionSeccion.scrollIntoView();
        await expect(this.paginacionSeccion).toBeExisting();

    }

    async incrementRows(){
        inicialLenght = await this.tableOfBooksBody.length;
        await this.incrementRowSelector.click();
        await this.incrementOption20.click();
    }

    async ValidateIncrementRows(expectedLenght){
        await expectChai(await this.tableOfBooksBody.length).to.equal(expectedLenght);
    }

    async searchForBook(bookName){
        await this.searchBar.scrollIntoView();
        await this.searchBar.setValue(bookName);
    }

    async clickBookTitle(){
        await this.bookTitleLink.click();
    }

    async validateBookInfo(){
        await expect(this.isbnLabel).toBeExisting();
        await expect(this.isbn).toBeExisting();
        await expect(this.titleBookLabel).toBeExisting();
        await expect(this.titleBook).toBeExisting();
        await expect(this.subTitleLabel).toBeExisting();
        await expect(this.subTitle).toBeExisting();
        await expect(this.author).toBeExisting();
        await expect(this.authorLabel).toBeExisting();
        await expect(this.publisherLabel).toBeExisting();
        await expect(this.publisher).toBeExisting();
        await expect(this.totalPagesLabel).toBeExisting();
        await expect(this.totalPages).toBeExisting();
        await expect(this.description).toBeExisting();
        await expect(this.descriptionLabel).toBeExisting();
        await expect(this.websiteLabel).toBeExisting();
        await expect(this.website).toBeExisting();
    }

    async addToCollection(){
        await this.addToCollectionButton.scrollIntoView();
        await this.addToCollectionButton.click();
    }

    async clickOnWebSite(){
        await this.website.scrollIntoView();
        await this.website.click();
    }

    async validateOreillyPage(urlPage){
        browser.switchWindow(urlPage);
        await browser.pause(5000);    
        let url =  await browser.getUrl();
        await expectChai(url).to.equal(urlPage);

    }

}

module.exports = new BookStore();