Feature: To test the login functionality in "Book Store Aplication"

Background:
    Given the user is on book Aplication

Scenario: User creates a new user

    When the user enters login page
    And clicks on new user
    And creates new user with firstname as "Eunice", lastname as "Dominguez", username as "euniced1" and password as "Euni123$"
    Then the user could not create new user "Have to select Captcha image"

Scenario: User logs in using invalid credentials

    And inserts invalid credencials username as "eunicead" and password as "Euni123$"
    And click on login button
    Then error message is shown on screen "Invalid username or password!"

Scenario: User logs in using valid credentials

    And inserts username as "euniceadr" and password as "Euni123!"
    And click button to login
    Then user enter to profile

Scenario Outline: The one where user logs in using invalid credentials

    #When the user enters  firstname as "Eunice", lastname as "Dominguez", username as "euniced1" and password as "Euni123!"
    #And clicks on new user
    #Then the user must remain on login page displaying a message "Somethings wrong with your data"

Examples:

      |firstname|lastname|username|password| message|errorMessage|
      |Eunice|Dominguez|euniced1|Euni123!|You have created your user!|Somethings wrong with your data|