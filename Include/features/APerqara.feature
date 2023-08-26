Feature: Perqara Login Noob Project

  Scenario Outline: Scenario End to End Shopping Product Web, Search Contact in Mobile Phone App, CRUD User Gorest API
    Given Navigation to : Main Web Login
    When input username <Username> and password <Password> to login to web
    Then enter dashboard page
    Given In the dashboard page
    When Click Add to Chart One of Products in Dashboard Product
    When Click Shopping Cart Icon with Number at The Right Top Corner
    When Click Checkout Shoping Cart
    When Input Form ID to Continue Checkout
    When Confirm to Finish Checkout
    Then Succesfuly Buy Product
    Given Creating User Gorest API to be Update and Delete
    When Update User Gorest API
    Then Delete User Gorest API
    Given Go to Contacts App
  	When Click search button
  	Then input contact name <Namecontact> in search contact button
  	When click contact that want to be selected one of the research results
  	Then Directing to Next Page Detail Selected Contact Information with <Namecontact>
  	Then Click back until app close
  	

    Examples: 
      | Username      | Password     |Namecontact|
      | standard_user | secret_sauce |irsyad Gw|
