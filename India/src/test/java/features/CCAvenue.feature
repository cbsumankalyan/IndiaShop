Feature: CCAvenue

Scenario Outline: CCAvenue Payment

Given Navigate to the "https://shop.unicity.com/#/home" application
Given <username> and <password>
Then Home Page <username>

Then Add Products To Cart <username>
Then Check Product
Then Check Cart

Then Check Form Fields

Then Payment Avenue

Then Order Summary

Then Review Orders

Then CCAvenue Payment Details

Examples:
|username |password   |
|108639101|1234       |