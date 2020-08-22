@Test
Feature: Test Others tab

@ThreeDropDown
Scenario Outline: 01 Test three drop-down options after clicking others tab
    Given I am able to launch the site
    When I click on Others Tab
    Then I verify <option> is getting displayed
	And I close
    Examples: 
      | option               |
      | Drag and Drop        |
      | Dynamic Data Loading |
      | Charts Demo          |

@PageLocation
  Scenario Outline: 02 The options in drop down menu are clickable
    Given I am able to launch the site
    And I verify others tab is present
    When I click on Others Tab
    When I click on <item> in the drop down menu
    Then I verify that it takes me to <name> page
	And I close
	
    Examples: 
      | item                 | name                      |
      | Drag and Drop        | drag-and-drop-demo        |
      | Dynamic Data Loading | dynamic-data-loading-demo |
      | Charts Demo          | charts-mouse-hover-demo   |
 
    
@DynamicDataLoading
   Scenario: 03 Test the dynamic data loading
   Given I am able to launch the site
   And I verify others tab is present
   When I click on Others Tab
   And I click on dynamic loading tab
   And I check the user and again click new user and check
   Then I close