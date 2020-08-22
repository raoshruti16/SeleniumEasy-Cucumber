@Test
Feature: Test Input Forms tab

@SevenDrop
  Scenario: 01 Test seven drop-down options after clicking input forms tab
    Given I open the application
    And I click on Input Forms Tab
    Then I verify seven dropdown values are getting displayed
    Then I close the application

@GetMessage
  Scenario Outline: 02 Test Show Message Button
    Given I open the application
    And I click on Input Forms Tab
    And I click on sub tab Simple form demo
    And I enter some message <message> into enter message textbox
    And I click on show button
    Then I verify <message> is getting displayed correctly
    Then I close the application
    

    Examples: 
      | message |
      | hi      |
      | zyz123  |
     

@GetTotal
  Scenario Outline: 03 Test the Get Total Button
    Given I open the application
    And I click on Input Forms Tab
    And I click on sub tab Simple form demo
    And I enter some number <no1> into the enter a textbox
    And I enter some number <no2> into the enter b textbox
    And I click on Sum button
    Then I verify sum of <no1> and <no2> is the sum being displayed
    Then I close the application
    

    Examples: 
      | no1 | no2 |
      |   1 |   9 |
      |  11 |  99 |

@SingleCheckbox
  Scenario: 04 Test the Single CheckBox
    Given I open the application
    And I click on Input Forms Tab
    And I click on sub tab CheckBox Demo
    Then I check the given CheckBox and verify
    Then I close the application
    


@MultipleCheckbox
Scenario: 05 Test the Multiple CheckBox
	Given I open the application
	And I click on Input Forms Tab
	And I click on sub tab CheckBox Demo
	And I click on Check All button
	And I click the Uncheck All button 
	Then I verify the button is check all
	Then I close the application
	

@SingleRadio
  Scenario: 06 Test the RadioButton
    Given I open the application
    And I click on Input Forms Tab
    And I click on sub tab RadioButton Demo
    Then I check one of the radiobuttons and verify
    Then I close the application
    

@MultipleRadio
  Scenario: 07 Test the multiple RadioButton
    Given I open the application
    And I click on Input Forms Tab
    And I click on sub tab RadioButton Demo
    Then I check one of the mradiobuttons and verify
    Then I close the application
    

@SelectList
  Scenario: 08 Test the Seletct list
    Given I open the application
    And I click on Input Forms Tab
    And I click on Select Dropdown list
    Then I click on options of dropdown and verify
    Then I close the application
    

@Form
  Scenario Outline: 09 Test the Input Form Submit
    Given I open the application
    And I click on Input Forms Tab
    And I click on sub input form submit
    And I enter first name <fname> and <lname> into textbox1
    And I enter email <email> and <phno> into textbox2
    And I enter address <address> and <city> into textbox3
    And I select state from the state drop-down list
    And I enter zip code <zip> and  <web> into textboxes
    And I select one of the radiobuttons indicating hosting
    Then I enter project description <proj> into project textbox and send
    Then I close the application
    

    Examples: 
      | fname  		| lname	| email            | phno       | address      | city   | zip    | web        | proj                   | 
      | shreya 		| rao   | shreya@gmail.com | 9892573634 | lakshmi park | thane  | 400606 | google.com | google146tdwdgvfjnnvkv |  
     