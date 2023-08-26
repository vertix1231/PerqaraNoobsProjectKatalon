$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/APerqara.feature");
formatter.feature({
  "name": "Perqara Login Noob Project",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Scenario End to End Shopping Product Web, Search Contact in Mobile Phone App, CRUD User Gorest API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Navigation to : Main Web Login",
  "keyword": "Given "
});
formatter.step({
  "name": "input username \u003cUsername\u003e and password \u003cPassword\u003e to login to web",
  "keyword": "When "
});
formatter.step({
  "name": "enter dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "In the dashboard page",
  "keyword": "Given "
});
formatter.step({
  "name": "Click Add to Chart One of Products in Dashboard Product",
  "keyword": "When "
});
formatter.step({
  "name": "Click Shopping Cart Icon with Number at The Right Top Corner",
  "keyword": "When "
});
formatter.step({
  "name": "Click Checkout Shoping Cart",
  "keyword": "When "
});
formatter.step({
  "name": "Input Form ID to Continue Checkout",
  "keyword": "When "
});
formatter.step({
  "name": "Confirm to Finish Checkout",
  "keyword": "When "
});
formatter.step({
  "name": "Succesfuly Buy Product",
  "keyword": "Then "
});
formatter.step({
  "name": "Creating User Gorest API to be Update and Delete",
  "keyword": "Given "
});
formatter.step({
  "name": "Update User Gorest API",
  "keyword": "When "
});
formatter.step({
  "name": "Delete User Gorest API",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Scenario End to End Shopping Product Web, Search Contact in Mobile Phone App, CRUD User Gorest API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Navigation to : Main Web Login",
  "keyword": "Given "
});
formatter.match({
  "location": "PerqaraLoginWeb.Navigation_to_Main_Web_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "input username standard_user and password secret_sauce to login to web",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraLoginWeb.input_username_and_password_to_login_to_web(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "PerqaraLoginWeb.enter_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "In the dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "PerqaraShopWeb.In_the_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add to Chart One of Products in Dashboard Product",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraShopWeb.Click_Add_to_Chart_One_of_Products_in_Dashboard_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Shopping Cart Icon with Number at The Right Top Corner",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraShopWeb.Click_Shopping_Cart_Icon_with_Number_at_The_Right_Top_Corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout Shoping Cart",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraShopWeb.I_verify_the_status_in_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input Form ID to Continue Checkout",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraShopWeb.Input_Form_ID_to_Continue_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm to Finish Checkout",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraShopWeb.Confirm_to_Finish_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Succesfuly Buy Product",
  "keyword": "Then "
});
formatter.match({
  "location": "PerqaraShopWeb.Succesfuly_Buy_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Creating User Gorest API to be Update and Delete",
  "keyword": "Given "
});
formatter.match({
  "location": "PerqaraGorestApi.Creating_User_Gorest_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Update User Gorest API",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraGorestApi.Update_User_Gorest_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete User Gorest API",
  "keyword": "Then "
});
formatter.match({
  "location": "PerqaraGorestApi.Delete_User_Gorest_API()"
});
formatter.result({
  "status": "passed"
});
});