Feature: Perqara Mobile Noob Project Contact

  Scenario: Scenario Search Contact in Mobile Phone App
    Given Go to Contacts App
    When Click search button
    Then input contact name irsyad Gw in search contact button
    When click contact that want to be selected one of the research results
    Then Directing to Next Page Detail Selected Contact Information with irsyad Gw|
    Then Click back until app close
