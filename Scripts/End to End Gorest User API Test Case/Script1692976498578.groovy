import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys
import groovy.json.JsonSlurper as JsonSlurper
import com.kms.katalon.core.testobject.RequestObject as RequestObject

//create user
def jsonSlurper = new JsonSlurper()

RequestObject requestcreate = findTestObject('Gorest API/Postman/create user')

println(GlobalVariable.gorestUrl + 'public/v2/users/')

requestcreate.setRestUrl(GlobalVariable.gorestUrl + 'public/v2/users/')

def responsecreate = WS.sendRequestAndVerify(requestcreate)

def resultcreate = jsonSlurper.parseText(responsecreate.getResponseText())

def valueid = resultcreate.id

println(valueid)

//get detail user
RequestObject requestdetail = findTestObject('Gorest API/Postman/get user detail')

println(GlobalVariable.gorestUrl + "public/v2/users/$valueid")

requestdetail.setRestUrl(GlobalVariable.gorestUrl + "public/v2/users/$valueid")

def responsedetail = WS.sendRequestAndVerify(requestdetail)

def resultdetail = jsonSlurper.parseText(responsedetail.getResponseText())

System.out.println(responsedetail.getResponseText())

System.out.println((('get user detail name is ' + resultdetail.name) + ' with id ') + resultdetail.id)

// update user
RequestObject requestupdate = findTestObject('Gorest API/Postman/update user')

println(GlobalVariable.gorestUrl + "public/v2/users/$valueid")

requestupdate.setRestUrl(GlobalVariable.gorestUrl + "public/v2/users/$valueid")

def responseupdate = WS.sendRequestAndVerify(requestupdate)

def resultupdate = jsonSlurper.parseText(responseupdate.getResponseText())

System.out.println(responseupdate.getResponseText())

System.out.println((('get user update name is ' + resultupdate.name) + ' with id update ') + resultupdate.id)

//delete user
RequestObject requestdelete = findTestObject('Gorest API/Postman/delete user')

println(GlobalVariable.gorestUrl + "public/v2/users/$valueid")

requestdelete.setRestUrl(GlobalVariable.gorestUrl + "public/v2/users/$valueid")

def responsedelete = WS.sendRequestAndVerify(requestdelete)

System.out.println((('user data after delete with id ' + valueid) + ' has been deleted ') + responsedelete.getResponseText())