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
  "duration": 4317851578,
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
  "duration": 12547506387,
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
  "duration": 13863642764,
  "status": "passed"
});
formatter.match({
  "location": "Login.check_login_details_and_menu()"
});
formatter.result({
  "duration": 3902477143,
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
  "duration": 6431048901,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_the_cart_details()"
});
formatter.result({
  "duration": 1391897080,
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
  "duration": 269694950,
  "status": "passed"
});
formatter.match({
  "location": "Cart.add_products_to_cart()"
});
formatter.result({
  "duration": 7227025687,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_product()"
});
formatter.result({
  "duration": 886807797,
  "status": "passed"
});
formatter.match({
  "location": "Cart.check_cart()"
});
formatter.result({
  "duration": 1011645023,
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
  "name": "Check Out Go Back",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Check Out",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Check Form Fields",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOut.check_out_go_back()"
});
formatter.result({
  "duration": 1046919720,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut.check_out()"
});
formatter.result({
  "duration": 267825722,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut.check_form_fields()"
});
formatter.result({
  "duration": 1177561752,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "PaymentPage",
  "description": "",
  "id": "application-login;paymentpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "Payment Go Back",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Payment Fields",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Banks Names",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Order Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "Payment.payment_go_back()"
});
formatter.result({
  "duration": 6463554955,
  "status": "passed"
});
formatter.match({
  "location": "Payment.payment_fields()"
});
formatter.result({
  "duration": 190067362,
  "status": "passed"
});
formatter.match({
  "location": "Payment.banks_names()"
});
formatter.result({
  "duration": 146004605,
  "status": "passed"
});
formatter.match({
  "location": "Payment.order_summary()"
});
formatter.result({
  "duration": 5795745532,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "ReviewPage",
  "description": "",
  "id": "application-login;reviewpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "Review Fields",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Shipping Information",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Contact Information",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Payment Information",
  "keyword": "Then "
});
formatter.match({
  "location": "Review.review_fields()"
});
formatter.result({
  "duration": 318139152,
  "status": "passed"
});
formatter.match({
  "location": "Review.shipping_information()"
});
formatter.result({
  "duration": 34321523,
  "status": "passed"
});
formatter.match({
  "location": "Review.contact_information()"
});
formatter.result({
  "duration": 32101148,
  "status": "passed"
});
formatter.match({
  "location": "Review.payment_information()"
});
formatter.result({
  "duration": 34414536,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "OrderDetails",
  "description": "",
  "id": "application-login;orderdetails",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "Review Orders",
  "keyword": "Then "
});
formatter.match({
  "location": "Review.review_orders()"
});
formatter.result({
  "duration": 5522116712,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "PlaceOrderPage",
  "description": "",
  "id": "application-login;placeorderpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "Placed Order Fields",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "Placed Shipping Information",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Placed Contact Information",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Placed Payment Information",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.placed_order_fields()"
});
formatter.result({
  "duration": 5503701336,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrder.placed_shipping_information()"
});
formatter.result({
  "duration": 25819329,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrder.placed_contact_information()"
});
formatter.result({
  "duration": 27519170,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrder.placed_payment_information()"
});
formatter.result({
  "duration": 33348722,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "OrderDetails",
  "description": "",
  "id": "application-login;orderdetails",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "Placed Orders",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.placed()"
});
formatter.result({
  "duration": 5467514852,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "ReturnHomePage",
  "description": "",
  "id": "application-login;returnhomepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "Return Home",
  "keyword": "When "
});
formatter.match({
  "location": "PlaceOrder.return_home()"
});
formatter.result({
  "duration": 9016302521,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "LogOut",
  "description": "",
  "id": "application-login;logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "Logout",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.logout()"
});
formatter.result({
  "duration": 102038700,
  "status": "passed"
});
formatter.match({
  "location": "Home.homepage()"
});
formatter.result({
  "duration": 60498398,
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           formatter.result({
  "duration": 20039113420,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@ng-click\u003d \u0027review.goHome()\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027QASERVER01\u0027, ip: \u002710.2.0.23\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\sumancb\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:54487}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e864af0f06ebddca2995cf0e93eb4274\n*** Element info: {Using\u003dxpath, value\u003d//a[@ng-click\u003d \u0027review.goHome()\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat POM.PlaceOrderPage.ReturnHome(PlaceOrderPage.java:156)\r\n\tat stepDefinitions.PlaceOrder.return_home(PlaceOrder.java:42)\r\n\tat ✽.When Return Home(Hooks.feature:64)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 66,
  "name": "LogOut",
  "description": "",
  "id": "application-login;logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "Logout",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.logout()"
});
formatter.result({
  "duration": 20033012081,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@ng-click\u003d\u0027app.logout()\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027QASERVER01\u0027, ip: \u002710.2.0.23\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\sumancb\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:54487}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e864af0f06ebddca2995cf0e93eb4274\n*** Element info: {Using\u003dxpath, value\u003d//a[@ng-click\u003d\u0027app.logout()\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat POM.HomePage.Logout(HomePage.java:542)\r\n\tat stepDefinitions.Home.logout(Home.java:51)\r\n\tat ✽.When Logout(Hooks.feature:67)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Home.homepage()"
});
formatter.result({
  "status": "skipped"
});
});