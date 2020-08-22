@Test
Feature: Test the table tab

@TablePagination
Scenario: 01 Test table pagination
	Given I open the app
	And I click on Table tab
	And I choose Table pagination 
	And I click on button2
	And I check two arrows
	And I click on button3
	Then I check one arrow
	Then I close the pg

@tableDataSearch
Scenario Outline: 02 test table data search
	Given I open the app
	And I click on Table tab
	And I choose Table data search
	And I search <text> in searchbar
	Then I verify it is displayed
	Then I close the pg

	Examples:
	|text		|
	|Bootstrap 3|
	|Jane Doe	|
	|completed	|