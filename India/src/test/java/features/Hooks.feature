Feature: Application Login

Background:
Given Open the browser
And Navigate to the "http://shop.ng.unicityqa.com/master/#/home" application

Scenario Outline: Shopping Cart Applciation Order Submit
When user enters <username> and <password> to login
Then Check products


Examples:

|username   |password   |
|108639101  |1234       |
