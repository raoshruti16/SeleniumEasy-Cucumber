@Test
Feature: Alert tab

@fileDownload
Scenario Outline: 01 Test file download
	Given I open
	And I click on alert tab
	And I choose file download
	And Send <text> in file
	And I click on generate file
	Then I verify download
	Then I close them

	Examples:
	|text	|
	|shruti	|


@javacriptAlert
Scenario Outline: 02 Test javascript alert
	Given I open
	And I click on alert tab
	And I choose javascript alert
	And I click on prompt box
	And I send <ex> in alert
	Then I click on ok button
	Then I close them

	Examples:
	|ex		|
	|shruti	|
	|shreya	|