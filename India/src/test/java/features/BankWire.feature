Feature: BankWire

Scenario Outline: BankWire

Given Navigate to the "http://shop.ng.unicityqa.com/master/#/home" application
Given <username> and <password>
Then Home Page <username>
Then All Products
And Products
And Accessories

When Search Product

Then All Products in List View
And Products in List View
And Accessories in List View

When Product Added to Cart <username>
Then Check the Cart Details

When Remove Products from Cart
Then Add Products To Cart <username>
Then Check Product
Then Check Cart

When Cart Go Back
When Check Out <username>
Then Check Form Fields

When Payment Go Back
When Payment Fields <username>
Then Banks Names
Then Order Summary

When Review Fields
Then Shipping Information
Then Contact Information
Then Payment Information
When Update Shipping
When Update Contact
When Update Payment
When Go Back

Then Review Orders

When Placed Order Fields
Then Placed Shipping Information
Then Placed Contact Information
Then Placed Payment Information

Then Placed Orders

When Return Home
When Logout
Then Home Page <username>

Examples:
|username |password   |
|108639101|1234       |
