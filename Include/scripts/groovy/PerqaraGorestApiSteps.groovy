import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class PerqaraGorestApiSteps {
	
	@Given("Creating User Gorest API to be Update and Delete")
	def Creating_User_Gorest_API() {
		WebUI.callTestCase(findTestCase('End to End Gorest User API Test Case'), [:], FailureHandling.STOP_ON_FAILURE)
		println "Creating User Gorest API to be Update and Delete pass"
	}
	
	@When("Update User Gorest API")
	def Update_User_Gorest_API() {
		println "Update User Gorest API pass"
	}
	
	@Given("Delete User Gorest API")
	def Delete_User_Gorest_API() {
		println "Update User Gorest API pass"
	}
}
