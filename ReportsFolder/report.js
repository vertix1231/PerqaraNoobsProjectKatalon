$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/APerqaraWeb.feature");
formatter.feature({
  "name": "Perqara Web Noob Project Shop",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Scenario End to End Shopping Product Web Shop",
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
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Namecontact"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "irsyad Gw"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Scenario End to End Shopping Product Web Shop",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Navigation to : Main Web Login",
  "keyword": "Given "
});
formatter.match({
  "location": "PerqaraLoginWebSteps.Navigation_to_Main_Web_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "input username standard_user and password secret_sauce to login to web",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraLoginWebSteps.input_username_and_password_to_login_to_web(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "PerqaraLoginWebSteps.enter_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "In the dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "PerqaraShopWebSteps.In_the_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add to Chart One of Products in Dashboard Product",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraShopWebSteps.Click_Add_to_Chart_One_of_Products_in_Dashboard_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Shopping Cart Icon with Number at The Right Top Corner",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraShopWebSteps.Click_Shopping_Cart_Icon_with_Number_at_The_Right_Top_Corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout Shoping Cart",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraShopWebSteps.I_verify_the_status_in_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input Form ID to Continue Checkout",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraShopWebSteps.Input_Form_ID_to_Continue_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm to Finish Checkout",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraShopWebSteps.Confirm_to_Finish_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Succesfuly Buy Product",
  "keyword": "Then "
});
formatter.match({
  "location": "PerqaraShopWebSteps.Succesfuly_Buy_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/BPerqaraApi.feature");
formatter.feature({
  "name": "Perqara Api Noob Project",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Scenario End to End CRUD User Gorest API",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Creating User Gorest API to be Update and Delete",
  "keyword": "Given "
});
formatter.match({
  "location": "PerqaraGorestApiSteps.Creating_User_Gorest_API()"
});
formatter.result({
  "error_message": "groovy.lang.MissingPropertyException: No such property: test for class: com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords\r\n\tat groovy.lang.MetaClassImpl.invokeStaticMissingProperty(MetaClassImpl.java:1014)\r\n\tat groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:1852)\r\n\tat groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:1828)\r\n\tat groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:3773)\r\n\tat org.codehaus.groovy.runtime.callsite.ClassMetaClassGetPropertySite.getProperty(ClassMetaClassGetPropertySite.java:50)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callGetProperty(AbstractCallSite.java:299)\r\n\tat PerqaraGorestApiSteps.Creating_User_Gorest_API(PerqaraGorestApiSteps.groovy:32)\r\n\tat ✽.Creating User Gorest API to be Update and Delete(Include/features/BPerqaraApi.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Update User Gorest API",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraGorestApiSteps.Update_User_Gorest_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Delete User Gorest API",
  "keyword": "Then "
});
formatter.match({
  "location": "PerqaraGorestApiSteps.Delete_User_Gorest_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Include/features/CPerqaraMobile.feature");
formatter.feature({
  "name": "Perqara Mobile Noob Project Contact",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Scenario Search Contact in Mobile Phone App",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Go to Contacts App",
  "keyword": "Given "
});
formatter.match({
  "location": "PerqaraContactMobileSteps.Go_to_Contacts_App()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Search Phone Contact Other Test Case\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:310)\r\n\tat PerqaraContactMobileSteps.Go_to_Contacts_App(PerqaraContactMobileSteps.groovy:52)\r\n\tat ✽.Go to Contacts App(Include/features/CPerqaraMobile.feature:4)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Unable to start app at: \u0027myandroidapp\\Contacts_4.15.24.554449442.apk\u0027 (Root cause: java.lang.IllegalArgumentException: The mobile device is missing. Please select the mobile device to be executed and try again.\r\n\tat com.google.common.base.Preconditions.checkArgument(Preconditions.java:135)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory.startLocalMobileDriver(MobileDriverFactory.java:564)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory.startMobileDriver(MobileDriverFactory.java:481)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword$_startApplication_closure1.doCall(StartApplicationKeyword.groovy:61)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword$_startApplication_closure1.call(StartApplicationKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword.startApplication(StartApplicationKeyword.groovy:63)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword.execute(StartApplicationKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.startApplication(MobileBuiltInKeywords.groovy:78)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$startApplication.call(Unknown Source)\r\n\tat Search Phone Contact Other Test Case.run(Search Phone Contact Other Test Case:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:310)\r\n\tat PerqaraContactMobileSteps.Go_to_Contacts_App(PerqaraContactMobileSteps.groovy:52)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner Test Case.run(Runner Test Case:22)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:148)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:187)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1693231602970.run(TempTestSuite1693231602970.groovy:36)\r\n)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword.startApplication(StartApplicationKeyword.groovy:63)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword.execute(StartApplicationKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.startApplication(MobileBuiltInKeywords.groovy:78)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$startApplication.call(Unknown Source)\r\n\tat Search Phone Contact Other Test Case.run(Search Phone Contact Other Test Case:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:310)\r\n\tat PerqaraContactMobileSteps.Go_to_Contacts_App(PerqaraContactMobileSteps.groovy:52)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner Test Case.run(Runner Test Case:22)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:148)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:187)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1693231602970.run(TempTestSuite1693231602970.groovy:36)\r\nCaused by: java.lang.IllegalArgumentException: The mobile device is missing. Please select the mobile device to be executed and try again.\r\n\tat com.google.common.base.Preconditions.checkArgument(Preconditions.java:135)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory.startLocalMobileDriver(MobileDriverFactory.java:564)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory.startMobileDriver(MobileDriverFactory.java:481)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword$_startApplication_closure1.doCall(StartApplicationKeyword.groovy:61)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword$_startApplication_closure1.call(StartApplicationKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\t... 88 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraContactMobileSteps.Click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "input contact name irsyad Gw in search contact button",
  "keyword": "Then "
});
formatter.match({
  "location": "PerqaraContactMobileSteps.input_contact_name_in_search_contact_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click contact that want to be selected one of the research results",
  "keyword": "When "
});
formatter.match({
  "location": "PerqaraContactMobileSteps.click_contact_that_want_to_be_selected_one_of_the_research_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Directing to Next Page Detail Selected Contact Information with irsyad Gw|",
  "keyword": "Then "
});
formatter.match({
  "location": "PerqaraContactMobileSteps.Directing_to_Next_Page_Detail_Selected_Contact_Information_with_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click back until app close",
  "keyword": "Then "
});
formatter.match({
  "location": "PerqaraContactMobileSteps.Click_back_until_app_close()"
});
formatter.result({
  "status": "skipped"
});
});