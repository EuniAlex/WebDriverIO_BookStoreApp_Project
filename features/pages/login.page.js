const BasePage = require('./base.page')
const SecurePage = require('./secure.page')
const expectChai = require('chai').expect;

class LoginPage extends BasePage {

    get loginPageButtom () {return $('#login')}
    get loginWelcome () {return $('//h2[contains(text(),"Welcome,")]')}
    get loginTitle () {return $('//h5[contains(text(),"Login in Book Store")]')}
    get loginUsernameLabel () {return $('#userName-label')}
    get loginPasswordLabel () {return $('#password-label')}
    get loginUsernameTextBox () {return $('#userName')}
    get loginPasswordTextBox () {return $('#password')}
    get returnLoginButtom () {return $('#gotologin')}
    get loginButtom () {return $('#login')}
    
    get newUserButtom () {return $('#newUser')}
    get registerTitle () {return $('//h4[contains(text(),"Register to Book Store")]')}
    get firstnameLabel () {return $('#firstname-label')}
    get lastnameLabel () {return $('#lastname-label')}
    get usernameLabel () {return $('#userName-label')}
    get passwordLabel () {return $('#password-label')}
    get firstnameTextBox () {return $('#firstname')}
    get lastnameTextBox () {return $('#lastname')}
    get usernameTextBox () {return $('#userName')}
    get passwordTextBox () {return $('#password')}
    get captchaCheckBox () {return $('//body/div[@id="app"]/div[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[6]/div[1]/div[1]/div[1]/iframe[1]')}
    get registerButtom ()  {return $('button[id="register"]')}
    
    get usernameLoginTextBox () {return $('#userName')}
    get passwordLoginTextBox () {return $('#password')}
    get messageInvalid () {return $('#name')}
    
    get bookStoreTitle () {return $('//div[contains(text(),"Book Store")]')}
    get logoutButton () {return $('#submit')}

    open() {
        super.open('https://demoqa.com/books')
    }

    async loginPageValidacion(){

        await this.loginPageButtom.click();
        await expect(this.loginWelcome).toBeExisting();
        await expect(this.loginTitle).toBeExisting();
        await expect(this.loginWelcome).toBeExisting();
        await expect(this.loginUsernameLabel).toBeExisting();
        await expect(this.loginPasswordLabel).toBeExisting();
        await expect(this.loginButtom).toBeExisting();
        await expect(this.loginPageButtom).toBeExisting();
    
    }

    async newUserValidacion(){

        await this.newUserButtom.click();
        await expect(this.registerTitle).toBeExisting();
        await expect(this.firstnameLabel).toBeExisting();
        await expect(this.lastnameLabel).toBeExisting();
        await expect(this.usernameLabel).toBeExisting();
        await expect(this.passwordLabel).toBeExisting();
        await expect(this.firstnameTextBox).toBeExisting();
        await expect(this.lastnameLabel).toBeExisting();
        await expect(this.usernameLabel).toBeExisting();
        await expect(this.passwordTextBox).toBeExisting();
        await expect(this.captchaCheckBox).toBeExisting();
        await expect(this.returnLoginButtom).toBeExisting();
        await expect(this.registerButtom).toBeExisting();
    }

    async createNewUser(firstname, lastname, username, password){

        await this.firstnameTextBox.setValue(firstname);
        await this.lastnameTextBox.setValue(lastname);
        await this.usernameTextBox.setValue(username);
        await this.passwordTextBox.setValue(password);
        await this.captchaCheckBox.click();
        await this.registerButtom.scrollIntoView();
    }

    async returnToLogin(){
       
            super.open('https://demoqa.com/login')
        
    }

    async insertCredentials(username,password){
        await this.loginPageButtom.click();
        await this.usernameLoginTextBox.setValue(username);
        await this.passwordLoginTextBox.setValue(password);
    }

    async findErrorMessage(username,password){
        await expect(this.messageInvalid).toBeExisting();
    }

    async validateLogin(username,password){
        await expect(this.bookStoreTitle).toBeExisting();
        await expect(this.logoutButton).toBeExisting();
    }

    
}


module.exports = new LoginPage();