$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Shopping Cart Applciation Order Submit",
  "description": "",
  "id": "application-login;shopping-cart-applciation-order-submit",
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
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e to login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Check products",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "application-login;shopping-cart-applciation-order-submit;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "application-login;shopping-cart-applciation-order-submit;;1"
    },
    {
      "cells": [
        "108639101",
        "1234"
      ],
      "line": 13,
      "id": "application-login;shopping-cart-applciation-order-submit;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3797835774,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Shopping Cart Applciation Order Submit",
  "description": "",
  "id": "application-login;shopping-cart-applciation-order-submit;;2",
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
  "name": "user enters 108639101 and 1234 to login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Check products",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://shop.unicity.com/#/home",
      "offset": 17
    }
  ],
  "location": "stepDefinition.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11966473785,
  "status": "passed"
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
  "location": "stepDefinition.user_enters_and_to_login(String,String)"
});
formatter.result({
  "duration": 10676709697,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.Suman()"
});
formatter.result({
  "duration": 5899630847,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cBIOS LIFE [COFFEE 30 IN]\u003e but was:\u003cBIOS LIFE [AIR FILTER]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat POM.Home.HomePage(Home.java:59)\r\n\tat stepDefinitions.stepDefinition.Suman(stepDefinition.java:46)\r\n\tat ✽.Then Check products(Hooks.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 172800,
  "status": "passed"
});
});