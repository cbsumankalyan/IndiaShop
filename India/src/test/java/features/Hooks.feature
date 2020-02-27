Feature: Application Login

Scenario: Intiate the browser
Given Open the browser
And Navigate to the "http://shop.ng.unicityqa.com/master/#/home" application

Scenario: LoginPage
Given Enter username and Password
And Check Login details and menu

#Scenario: HomePage
#Then All Products
#And Products
#And Accessories
#
#Scenario: SearchOption
#When Search Product
#
#Scenario: List View
#Then All Products in List View
#And Products in List View
#And Accessories in List View

Scenario: CartPage
When Product Added to Cart
Then Check the Cart Details

Scenario: RemoveProducts
When Remove Products from Cart
Then Add Products To Cart
Then Check Product
Then Check Cart

Scenario: CheckoutPage
When Check Out
Then Check Form Fields

Scenario: PaymentPage
When Payment Fields
Then Banks Names
Then Order Summary

Scenario: ReviewPage
When Review Fields
Then Shipping Information
Then Contact Information
Then Payment Information

Scenario: OrderDetails
Then Review Orders


