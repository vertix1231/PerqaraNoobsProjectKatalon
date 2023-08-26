
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class PerqaraLoginWebSteps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("Navigation to : Main Web Login")
	def Navigation_to_Main_Web_Login() {
		WebUI.openBrowser('')
		
		WebUI.navigateToUrl('https://www.saucedemo.com/')
		println "Navigation to : Main Web Login pass"
	}

	@Then("enter dashboard page")
	def enter_dashboard_page() {
		println "enter dashboard page"
	}

	@When("input username (.*) and password (.*) to login to web")
	def input_username_and_password_to_login_to_web(String username,String password) {
		WebUI.setText(findTestObject('Object Repository/Login Shop Web/Page_Swag Labs/input_Swag Labs_user-name'), 'standard_user')
		
		WebUI.setEncryptedText(findTestObject('Object Repository/Login Shop Web/Page_Swag Labs/input_Swag Labs_password'), 'qcu24s4901FyWDTwXGr6XA==')
		
		WebUI.click(findTestObject('Object Repository/Login Shop Web/Page_Swag Labs/input_Swag Labs_login-button'))
		println username+" "+password+" pass"
	}
}