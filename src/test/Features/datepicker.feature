@Test
Feature: Test Date pickers tab

@Calendar
  Scenario: 01 Test if date selected is displayed
  Given I login to the app
  And I click on Date pickers Tab
  And I click on Bootstrap Date Picker tab
  When I click on Calendar button
  When I select some date from the list
  Then I verify if date is displayed in the text box
  Then I close the app
 
@ClearButton
  Scenario: 02 Test clear button
  Given I login to the app
  And I click on Date pickers Tab
  And I click on Bootstrap Date Picker tab
  When I click on Calendar button
  When I select some date from the list
  When I click on Calendar button
  When I select clear tab
  Then I verify if date textbox is empty
  Then I close the app
  
@TodayButton 
  Scenario: 03 Test Today button
  Given I login to the app
  And I click on Date pickers Tab
  And I click on Bootstrap Date Picker tab
  When I click on Calendar button
  And I click on today button
  Then I verify if date is today
  Then I close the app
     
@RangeDate
  Scenario: 05 Check range of date
  Given I login to the app
  And I click on Date pickers Tab
  And I click on JQuery Date Picker tab
  Then I click on From and To text field and select date and verify
  Then I close the app
 
  
   