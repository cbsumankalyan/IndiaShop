$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Shopping Cart Applciation Order Submit",
  "description": "",
  "id": "application-login;shopping-cart-applciation-order-submit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Check Topmenu \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "SearchOption",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Check products",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Listview",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "AddProductsToCart",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "application-login;shopping-cart-applciation-order-submit;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "application-login;shopping-cart-applciation-order-submit;;1"
    },
    {
      "cells": [
        "108639101",
        "1234"
      ],
      "line": 20,
      "id": "application-login;shopping-cart-applciation-order-submit;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "duration": 4324205930,
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
  "duration": 12167270543,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Shopping Cart Applciation Order Submit",
  "description": "",
  "id": "application-login;shopping-cart-applciation-order-submit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters 108639101 and 1234 to login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Check Topmenu 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "SearchOption",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Check products",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Listview",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "AddProductsToCart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 12
    },
    {
      "val": "1234",
      "offset": 26
    }
  ],
  "location": "Login.user_enters_and_to_login(String,String)"
});
formatter.result({
  "duration": 10729733743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 14
    }
  ],
  "location": "Home.check_topmenu(String)"
});
formatter.result({
  "duration": 12406624,
  "status": "passed"
});
formatter.match({
  "location": "Home.SearchOption()"
});
formatter.result({
  "duration": 16214,
  "status": "passed"
});
formatter.match({
  "location": "Home.Check_products()"
});
formatter.result({
  "duration": 18347,
  "status": "passed"
});
formatter.match({
  "location": "Home.Listview()"
});
formatter.result({
  "duration": 13227,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});