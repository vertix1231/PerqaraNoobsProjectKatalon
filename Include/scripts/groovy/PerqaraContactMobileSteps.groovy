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



class PerqaraContactMobileSteps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("Go to Contacts App")
	def Go_to_Contacts_App() {
		WebUI.callTestCase(findTestCase('Search Phone Contact Other Test Case'), [:], FailureHandling.STOP_ON_FAILURE)
		println "Go to Contacts App pass"
	}

	@When("Click search button")
	def Click_search_button() {
		println "Click search button pass"
	}

	@Then("input contact name (.*) in search contact button")
	def input_contact_name_in_search_contact_button(String status) {
		println "input contact name in search contact button pass"
	}

	@When("click contact that want to be selected one of the research results")
	def click_contact_that_want_to_be_selected_one_of_the_research_results() {
		println "click contact that want to be selected one of the research results pass"
	}

	@Then("Directing to Next Page Detail Selected Contact Information with (.*)")
	def Directing_to_Next_Page_Detail_Selected_Contact_Information_with_name(String name) {
		println "Directing to Next Page Detail Selected Contact Information with "+name+" pass"
	}

	@Then("Click back until app close")
	def Click_back_until_app_close() {
		println "Click back until app close pass"
	}
}


