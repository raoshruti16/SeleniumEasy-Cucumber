@Test
Feature: Test Progress Bar

			
  @StartDownload
  Scenario: 01 Test Start Download button
    Given I launch selenium easy website
    And I click on Progress Bar Tab
    And I click on sub tab JQuery Download Progress bars
    Then I click on Start Download button
    And I verify download status is complete before clicking close button
    And I click on Close button 
    Then I close app
	
   
	
	@ProgressBar
	Scenario Outline: 02 Test Bootstrap Progress Bar button
    Given I launch selenium easy website
  	And I click on Progress Bar Tab
    And I click on sub tab Bootstrap Progress Bar
    Then I verify initial value of progress bar is "<percent>"
    Then I close app
	
    Examples:
  	|percent|
    |0%|
    
    
	
  @Downloadsize
  Scenario: 03 Test the download
    Given I launch selenium easy website
    And I click on Progress Bar Tab
    And I click on sub tab Bootstrap Progress Bar
    And I click on Downloadsize:20480kb button
    Then I verify the progress bar stops at 100%
    Then I close app
	
   

 