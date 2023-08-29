Feature: Perqara Web Noob Project Shop

  Scenario Outline: Scenario End to End Shopping Product Web Shop
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

    Examples: 
      | Username      | Password     | Namecontact |
      | standard_user | secret_sauce | irsyad Gw   |
