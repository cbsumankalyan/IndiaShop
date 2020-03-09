$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AllUsers.feature");
formatter.feature({
  "line": 1,
  "name": "All Users",
  "description": "",
  "id": "all-users",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "With Out Order",
  "description": "",
  "id": "all-users;with-out-order",
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
  "line": 9,
  "name": "Add Products To Cart \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Check Product",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Check Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Check Form Fields",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Payment Avenue",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Review Orders",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "CCAvenue Payment Details",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "all-users;with-out-order;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "all-users;with-out-order;;1"
    },
    {
      "cells": [
        "206914401",
        "0155"
      ],
      "line": 24,
      "id": "all-users;with-out-order;;2"
    },
    {
      "cells": [
        "314852591",
        "asiaaktar"
      ],
      "line": 25,
      "id": "all-users;with-out-order;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5271715645,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "With Out Order",
  "description": "",
  "id": "all-users;with-out-order;;2",
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
  "name": "206914401 and 0155",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 206914401",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Products To Cart 206914401",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Check Product",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Check Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Check Form Fields",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Payment Avenue",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Review Orders",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "CCAvenue Payment Details",
  "keyword": "Then "
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
  "duration": 13124520640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "206914401",
      "offset": 0
    },
    {
      "val": "0155",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 14358992093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "206914401",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13753913390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "206914401",
      "offset": 21
    }
  ],
  "location": "Cart.add_products_to_cart(String)"
});
formatter.result({
  "duration": 16731270170,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_product()"
});
formatter.result({
  "duration": 806061488,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_cart()"
});
formatter.result({
  "duration": 1045105958,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut.check_form_fields()"
});
formatter.result({
  "duration": 1510650462,
  "status": "passed"
});
formatter.match({
  "location": "Payment.payment_avenue()"
});
formatter.result({
  "duration": 5498549758,
  "status": "passed"
});
formatter.match({
  "location": "Review.review_orders()"
});
formatter.result({
  "duration": 10781180827,
  "status": "passed"
});
formatter.match({
  "location": "CCAvenue.ccavenue_payment_details()"
});
formatter.result({
  "duration": 6257082246,
  "status": "passed"
});
formatter.after({
  "duration": 121173,
  "status": "passed"
});
formatter.before({
  "duration": 4642870309,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "With Out Order",
  "description": "",
  "id": "all-users;with-out-order;;3",
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
  "name": "314852591 and asiaaktar",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314852591",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add Products To Cart 314852591",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Check Product",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Check Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Check Form Fields",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Payment Avenue",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Review Orders",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "CCAvenue Payment Details",
  "keyword": "Then "
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
  "duration": 12981612784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314852591",
      "offset": 0
    },
    {
      "val": "asiaaktar",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 14581888070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314852591",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13737897589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314852591",
      "offset": 21
    }
  ],
  "location": "Cart.add_products_to_cart(String)"
});
formatter.result({
  "duration": 16652695170,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_product()"
});
formatter.result({
  "duration": 680847515,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_cart()"
});
formatter.result({
  "duration": 821610941,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut.check_form_fields()"
});
formatter.result({
  "duration": 1122468798,
  "status": "passed"
});
formatter.match({
  "location": "Payment.payment_avenue()"
});
formatter.result({
  "duration": 5405318319,
  "status": "passed"
});
formatter.match({
  "location": "Review.review_orders()"
});
formatter.result({
  "duration": 10627225708,
  "status": "passed"
});
formatter.match({
  "location": "CCAvenue.ccavenue_payment_details()"
});
formatter.result({
  "duration": 6128447683,
  "status": "passed"
});
formatter.after({
  "duration": 21760,
  "status": "passed"
});
formatter.uri("BankWire.feature");
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
formatter.uri("CCAvenue.feature");
formatter.feature({
  "line": 1,
  "name": "CCAvenue",
  "description": "",
  "id": "ccavenue",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "CCAvenue Payment",
  "description": "",
  "id": "ccavenue;ccavenue-payment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.uri("Essecom.feature");
formatter.feature({
  "line": 1,
  "name": "Essecom",
  "description": "",
  "id": "essecom",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Essecom Payment",
  "description": "",
  "id": "essecom;essecom-payment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
});