Feature: To test the book store functionality in "Book Store Aplication"

Background:
    Given the user is on the book store seccion

Scenario: User increments the number of rows shown in the table

    When user click to increment rows to 20
    Then the number of row increases to 20

Scenario: User search for the book "Git Pocket Guide"

    When enter the title of the book as "Git Pocket Guide" in the search bar
    And clicks on the books title
    Then user should be redirected to the book informacion page

Scenario: User enter to the url indicated in book information

    When user click on the title on book "Git Pocket Guide"
    And reads the information and clicks on the url displayed
    Then user will be redirected to page "https://www.oreilly.com/"

Scenario Outline: The one where user logs in using invalid credentials

    #When the user enters  firstname as "Eunice", lastname as "Dominguez", username as "euniced1" and password as "Euni123!"
    #And clicks on new user
    #Then the user must remain on login page displaying a message "Somethings wrong with your data"

Examples:

      |firstname|lastname|username|password| message|errorMessage|
      |Eunice|Dominguez|euniced1|Euni123!|You have created your user!|Somethings wrong with your data|