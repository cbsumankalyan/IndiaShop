Feature: Application Login

Scenario Outline: Shopping Cart Applciation Order Submit

Given Navigate to the "https://shop.unicity.com/#/home" application
When user enters <username> and <password> to login
Then Check products


Examples:

|username   |password   |
|108639101  |1234       |
