Feature: Google Translate French to English feature
  In order to understand other languages I do not speak
  As any Google user
  I want to translate my text

  Scenario Outline: Translate some basic French phrases
    Given I am on the Google Translate page
    When I enter <French> in Google Translate
    Then I check for <English> in English

    Examples: 
      | French                | English               |
      | "Bonjour"             | "Hello"               |
      | "Au revoir"           | "Goodbye"             |
      | "Je ne comprends pas" | "I do not understand" |