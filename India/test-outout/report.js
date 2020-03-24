$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BankWire.feature");
formatter.feature({
  "line": 1,
  "name": "BankWire",
  "description": "",
  "id": "bankwire",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "BankWire",
  "description": "",
  "id": "bankwire;bankwire",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"https://shop.unicity.com/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Then All Products"
    },
    {
      "line": 10,
      "value": "#And Products"
    },
    {
      "line": 11,
      "value": "#And Accessories"
    },
    {
      "line": 12,
      "value": "#"
    }
  ],
  "line": 13,
  "name": "Search Product",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "All Products in List View",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Products in List View",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Accessories in List View",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Product Added to Cart \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Check the Cart Details",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Remove Products from Cart",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Add Products To Cart \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Check Product",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Check Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Cart Go Back",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Check Out \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Check Form Fields",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Payment Go Back",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Payment Fields \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Banks Names",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Order Summary",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Review Fields \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Shipping Information \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Contact Information \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Payment Information",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Update Shipping",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Update Contact",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Update Payment",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Go Back",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Review Orders",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Placed Order Fields \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Placed Shipping Information",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Placed Contact Information",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Placed Payment Information",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Placed Orders",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Return Home \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "Logout",
  "keyword": "When "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "bankwire;bankwire;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 58,
      "id": "bankwire;bankwire;;1"
    },
    {
      "cells": [
        "108639101",
        "1234"
      ],
      "line": 59,
      "id": "bankwire;bankwire;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4300942764,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "BankWire",
  "description": "",
  "id": "bankwire;bankwire;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"https://shop.unicity.com/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "108639101 and 1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Then All Products"
    },
    {
      "line": 10,
      "value": "#And Products"
    },
    {
      "line": 11,
      "value": "#And Accessories"
    },
    {
      "line": 12,
      "value": "#"
    }
  ],
  "line": 13,
  "name": "Search Product",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "All Products in List View",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Products in List View",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Accessories in List View",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Product Added to Cart 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Check the Cart Details",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Remove Products from Cart",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Add Products To Cart 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Check Product",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Check Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Cart Go Back",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Check Out 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Check Form Fields",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Payment Go Back",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Payment Fields 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Banks Names",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Order Summary",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Review Fields 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Shipping Information 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Contact Information 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Payment Information",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Update Shipping",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Update Contact",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Update Payment",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Go Back",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Review Orders",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Placed Order Fields 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Placed Shipping Information",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Placed Contact Information",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Placed Payment Information",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Placed Orders",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Return Home 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "Logout",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "https://shop.unicity.com/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12281660400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 0
    },
    {
      "val": "1234",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 14501501015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 23758089607,
  "status": "passed"
});
formatter.match({
  "location": "Home.search_product()"
});
formatter.result({
  "duration": 8066422670,
  "status": "passed"
});
formatter.match({
  "location": "Home.all_products_in_list_view()"
});
formatter.result({
  "duration": 177412419338,
  "status": "passed"
});
formatter.match({
  "location": "Home.products_in_list_view()"
});
formatter.result({
  "duration": 144139322999,
  "status": "passed"
});
formatter.match({
  "location": "Home.accessories_in_list_view()"
});
formatter.result({
  "duration": 34357434758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 22
    }
  ],
  "location": "Cart.product_added_to_cart(String)"
});
formatter.result({
  "duration": 15732602652,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_the_cart_details()"
});
formatter.result({
  "duration": 1340553251,
  "status": "passed"
});
formatter.match({
  "location": "Cart.remove_products_from_cart()"
});
formatter.result({
  "duration": 1003220909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 21
    }
  ],
  "location": "Cart.add_products_to_cart(String)"
});
formatter.result({
  "duration": 17458987058,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_product()"
});
formatter.result({
  "duration": 663811980,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_cart()"
});
formatter.result({
  "duration": 821364327,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut.cart_go_back()"
});
formatter.result({
  "duration": 972138216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 10
    }
  ],
  "location": "CheckOut.check_out(String)"
});
formatter.result({
  "duration": 10302698925,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut.check_form_fields()"
});
formatter.result({
  "duration": 1287777526,
  "status": "passed"
});
formatter.match({
  "location": "Payment.payment_go_back()"
});
formatter.result({
  "duration": 6606737585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 15
    }
  ],
  "location": "Payment.payment_fields(String)"
});
formatter.result({
  "duration": 10234266653,
  "status": "passed"
});
formatter.match({
  "location": "Payment.banks_names()"
});
formatter.result({
  "duration": 177355672,
  "status": "passed"
});
formatter.match({
  "location": "Payment.order_summary()"
});
formatter.result({
  "duration": 11009014195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 14
    }
  ],
  "location": "Review.review_fields(String)"
});
formatter.result({
  "duration": 10968098106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 21
    }
  ],
  "location": "Review.shipping_information(String)"
});
formatter.result({
  "duration": 35641631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 20
    }
  ],
  "location": "Review.contact_information(String)"
});
formatter.result({
  "duration": 48614441,
  "status": "passed"
});
formatter.match({
  "location": "Review.payment_information()"
});
formatter.result({
  "duration": 43099770,
  "status": "passed"
});
formatter.match({
  "location": "Review.update_shipping()"
});
formatter.result({
  "duration": 18260534836,
  "status": "passed"
});
formatter.match({
  "location": "Review.update_contact()"
});
formatter.result({
  "duration": 17504991577,
  "status": "passed"
});
formatter.match({
  "location": "Review.update_payment()"
});
formatter.result({
  "duration": 21236897056,
  "status": "passed"
});
formatter.match({
  "location": "Review.go_back()"
});
formatter.result({
  "duration": 22111372042,
  "status": "passed"
});
formatter.match({
  "location": "Review.review_orders()"
});
formatter.result({
  "duration": 10590124877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 20
    }
  ],
  "location": "PlaceOrder.placed_order_fields(String)"
});
formatter.result({
  "duration": 15519735910,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrder.placed_shipping_information()"
});
formatter.result({
  "duration": 37083765,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrder.placed_contact_information()"
});
formatter.result({
  "duration": 49165695,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrder.placed_payment_information()"
});
formatter.result({
  "duration": 43915557,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrder.placed()"
});
formatter.result({
  "duration": 5435691891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 12
    }
  ],
  "location": "PlaceOrder.return_home(String)"
});
formatter.result({
  "duration": 29668478010,
  "status": "passed"
});
formatter.match({
  "location": "Home.logout()"
});
formatter.result({
  "duration": 106366811,
  "status": "passed"
});
formatter.after({
  "duration": 171947,
  "status": "passed"
});
});