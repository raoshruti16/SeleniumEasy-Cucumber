@Test
Feature: Test List Box

@ListBox
  Scenario Outline: 01 bootstrap list box tab
    Given I login to the page
    And I click on list box tab
    And I click on bootstrap list box
    When I select some results <message>
    And I press the shift elements button
    Then I verify the results <message> are shifted
    Then I close it
    Examples: 
      | message                 |
      | bootstrap-duallist      |
  	  |Dapibus ac facilisis in  |

@DataListFilter
  Scenario Outline: 02 Data List Filter tab
    Given I login to the page
    And I click on list box tab
    And I click on data list filter tab
    And I enter a value <random>
    Then I verify the results<random> are shown
	Then I close it
    Examples: 
      | random            |
      | Tyreese Burn      |
      | manager           |
      | 980-543-3333      |
      | test5@company.com |
      
@JqueryList
  Scenario Outline: 03 JQuery list box
    Given I login to the page
    And I click on list box tab
    And I click on JQuery
    And I select a <option> result
    And I click on Add button
    Then I verify result <option> is added
    And I select a <option> result
    And I click on remove
    Then I verify the element <option> is removed
	Then I close it
    Examples: 
      | option   |
      | Alice    |
      | Isabella |

@JqueryAddRemove
  Scenario: 04 JQuery addall and removeall
    Given I login to the page
    And I click on list box tab
    And I click on JQuery
    When I click on addall button
    Then I verify that all the results are added
    And when I click on removeall button
    Then I verify  all the results are removed
    Then I close it
