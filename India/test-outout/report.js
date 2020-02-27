$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Intiate the browser",
  "description": "",
  "id": "application-login;intiate-the-browser",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "And "
});
formatter.match({
  "location": "BrowserInitiate.Open_the_browser()"
});
formatter.result({
  "duration": 4398200233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11601492567,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "LoginPage",
  "description": "",
  "id": "application-login;loginpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Enter username and Password",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Check Login details and menu",
  "keyword": "And "
});
formatter.match({
  "location": "Login.enter_username_and_password()"
});
formatter.result({
  "duration": 13775647382,
  "status": "passed"
});
formatter.match({
  "location": "Login.check_login_details_and_menu()"
});
formatter.result({
  "duration": 3632705820,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#Scenario: HomePage"
    },
    {
      "line": 12,
      "value": "#Then All Products"
    },
    {
      "line": 13,
      "value": "#And Products"
    },
    {
      "line": 14,
      "value": "#And Accessories"
    },
    {
      "line": 15,
      "value": "#"
    },
    {
      "line": 16,
      "value": "#Scenario: SearchOption"
    },
    {
      "line": 17,
      "value": "#When Search Product"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#Scenario: List View"
    },
    {
      "line": 20,
      "value": "#Then All Products in List View"
    },
    {
      "line": 21,
      "value": "#And Products in List View"
    },
    {
      "line": 22,
      "value": "#And Accessories in List View"
    }
  ],
  "line": 24,
  "name": "CartPage",
  "description": "",
  "id": "application-login;cartpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Product Added to Cart",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Check the Cart Details",
  "keyword": "Then "
});
formatter.match({
  "location": "Cart.product_added_to_cart()"
});
formatter.result({
  "duration": 6166777742,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_the_cart_details()"
});
formatter.result({
  "duration": 1179659246,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "RemoveProducts",
  "description": "",
  "id": "application-login;removeproducts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "Remove Products from Cart",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Add Products To Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Check Product",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Check Cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Cart.remove_products_from_cart()"
});
formatter.result({
  "duration": 332089030,
  "status": "passed"
});
formatter.match({
  "location": "Cart.add_products_to_cart()"
});
formatter.result({
  "duration": 6869316582,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_product()"
});
formatter.result({
  "duration": 509026568,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_cart()"
});
formatter.result({
  "duration": 1078247746,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "CheckoutPage",
  "description": "",
  "id": "application-login;checkoutpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "Check Out",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Check Form Fields",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOut.check_out()"
});
formatter.result({
  "duration": 226883607,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut.check_form_fields()"
});
formatter.result({
  "duration": 1183419890,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "PaymentPage",
  "description": "",
  "id": "application-login;paymentpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "Payment Fields",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Banks Names",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Order Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "Payment.payment_fields()"
});
formatter.result({
  "duration": 138575905,
  "status": "passed"
});
formatter.match({
  "location": "Payment.banks_names()"
});
formatter.result({
  "duration": 132801393,
  "status": "passed"
});
formatter.match({
  "location": "Payment.order_summary()"
});
formatter.result({
  "duration": 5777911704,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "ReviewPage",
  "description": "",
  "id": "application-login;reviewpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "Review Fields",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Shipping Information",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Contact Information",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Payment Information",
  "keyword": "Then "
});
formatter.match({
  "location": "Review.review_fields()"
});
formatter.result({
  "duration": 241403086,
  "status": "passed"
});
formatter.match({
  "location": "Review.shipping_information()"
});
formatter.result({
  "duration": 39415073,
  "status": "passed"
});
formatter.match({
  "location": "Review.contact_information()"
});
formatter.result({
  "duration": 37146059,
  "status": "passed"
});
formatter.match({
  "location": "Review.payment_information()"
});
formatter.result({
  "duration": 35798218,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "OrderDetails",
  "description": "",
  "id": "application-login;orderdetails",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "Review Orders",
  "keyword": "Then "
});
formatter.match({
  "location": "Review.review_orders()"
});
formatter.result({
  "duration": 5521880339,
  "status": "passed"
});
});