Feature: To test the profile functionality in "Book Store Aplication"

Background:
    Given the user logged in with username as "euniceadr" and password as "Euni123!"  
     

Scenario: User searchs for a book

    When enters to profile seccion
    Then user inserts book title as "Git Pocket Guide" in the search bar
    
Scenario: User deletes one book of the profile

    When user click on the delete button of the desire book to be deleted
    Then the book was deleted

Scenario: User deletes all books 

    When click on the button Delete All Books
    Then all books of the profile are deleted

Scenario Outline: The one where user logs in using invalid credentials

    #When the user enters  firstname as "Eunice", lastname as "Dominguez", username as "euniced1" and password as "Euni123!"
    #And clicks on new user
    #Then the user must remain on login page displaying a message "Somethings wrong with your data"

Examples:

      |firstname|lastname|username|password| message|errorMessage|
      |Eunice|Dominguez|euniced1|Euni123!|You have created your user!|Somethings wrong with your data|