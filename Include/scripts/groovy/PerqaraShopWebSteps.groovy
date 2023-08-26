
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



class PerqaraShopWebSteps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("In the dashboard page")
	def In_the_dashboard_page() {
		println "In the dashboard page pass"
	}

	@When("Click Add to Chart One of Products in Dashboard Product")
	def Click_Add_to_Chart_One_of_Products_in_Dashboard_Product() {
		WebUI.click(findTestObject('Object Repository/Buy Shop Product Web/Page_Swag Labs/button_Add to cart'))
		println "Click Add to Chart One of Products in Dashboard Product pass"
	}

	@When("Click Shopping Cart Icon with Number at The Right Top Corner")
	def Click_Shopping_Cart_Icon_with_Number_at_The_Right_Top_Corner() {

		WebUI.click(findTestObject('Object Repository/Buy Shop Product Web/Page_Swag Labs/a_1'))

		println "Click Shopping Cart Icon with Number at The Right Top Corner pass"
	}

	@When("Click Checkout Shoping Cart")
	def I_verify_the_status_in_step() {
		WebUI.click(findTestObject('Object Repository/Buy Shop Product Web/Page_Swag Labs/button_Checkout'))
		println "Click Checkout Shoping Cart pass"
	}

	@When("Input Form ID to Continue Checkout")
	def Input_Form_ID_to_Continue_Checkout() {
		WebUI.setText(findTestObject('Object Repository/Buy Shop Product Web/Page_Swag Labs/input_Checkout Your Information_firstName'), 'david')

		WebUI.setText(findTestObject('Object Repository/Buy Shop Product Web/Page_Swag Labs/input_Checkout Your Information_lastName'), 'beckam')

		WebUI.setText(findTestObject('Object Repository/Buy Shop Product Web/Page_Swag Labs/input_Checkout Your Information_postalCode'), '16118')

		println "Input Form ID to Continue Checkout pass"
	}

	@When("Confirm to Finish Checkout")
	def Confirm_to_Finish_Checkout() {
		WebUI.click(findTestObject('Object Repository/Buy Shop Product Web/Page_Swag Labs/input_Cancel_continue'))

		WebUI.click(findTestObject('Object Repository/Buy Shop Product Web/Page_Swag Labs/button_Finish'))
		println "Confirm to Finish Checkout pass"
	}

	@Then("Succesfuly Buy Product")
	def Succesfuly_Buy_Product() {
		println "Succesfuly Buy Product pass"
	}
}