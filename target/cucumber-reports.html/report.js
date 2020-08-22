$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features.feature");
formatter.feature({
  "line": 2,
  "name": "Test Input Forms tab",
  "description": "",
  "id": "test-input-forms-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "01 Test seven drop-down options after clicking input forms tab",
  "description": "",
  "id": "test-input-forms-tab;01-test-seven-drop-down-options-after-clicking-input-forms-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SevenDrop"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify seven dropdown values are getting displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 11615497800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 82443000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_verify_seven_dropdown_values_are_getting_displayed()"
});
formatter.result({
  "duration": 29542300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 251716800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "02 Test Show Message Button",
  "description": "",
  "id": "test-input-forms-tab;02-test-show-message-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@GetMessage"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter some message \u003cmessage\u003e into enter message textbox",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on show button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify \u003cmessage\u003e is getting displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "test-input-forms-tab;02-test-show-message-button;",
  "rows": [
    {
      "cells": [
        "message"
      ],
      "line": 23,
      "id": "test-input-forms-tab;02-test-show-message-button;;1"
    },
    {
      "cells": [
        "hi"
      ],
      "line": 24,
      "id": "test-input-forms-tab;02-test-show-message-button;;2"
    },
    {
      "cells": [
        "zyz123"
      ],
      "line": 25,
      "id": "test-input-forms-tab;02-test-show-message-button;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "02 Test Show Message Button",
  "description": "",
  "id": "test-input-forms-tab;02-test-show-message-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@GetMessage"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter some message hi into enter message textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on show button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify hi is getting displayed correctly",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 10772976000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 49269400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_sub_tab_Simple_form_demo()"
});
formatter.result({
  "duration": 904564400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hi",
      "offset": 21
    }
  ],
  "location": "Steps.I_enter_some_message_message_into_enter_message_textbox(String)"
});
formatter.result({
  "duration": 124359700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_show_button()"
});
formatter.result({
  "duration": 104749400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hi",
      "offset": 9
    }
  ],
  "location": "Steps.I_verify_output_message_is_getting_displayed_as_the_message(String)"
});
formatter.result({
  "duration": 65916800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 327093100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "02 Test Show Message Button",
  "description": "",
  "id": "test-input-forms-tab;02-test-show-message-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@GetMessage"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter some message zyz123 into enter message textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on show button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify zyz123 is getting displayed correctly",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 10727910700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 51936500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_sub_tab_Simple_form_demo()"
});
formatter.result({
  "duration": 969128900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zyz123",
      "offset": 21
    }
  ],
  "location": "Steps.I_enter_some_message_message_into_enter_message_textbox(String)"
});
formatter.result({
  "duration": 618708800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_show_button()"
});
formatter.result({
  "duration": 113527600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zyz123",
      "offset": 9
    }
  ],
  "location": "Steps.I_verify_output_message_is_getting_displayed_as_the_message(String)"
});
formatter.result({
  "duration": 84616800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 370663700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "03 Test the Get Total Button",
  "description": "",
  "id": "test-input-forms-tab;03-test-the-get-total-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@GetTotal"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter some number \u003cno1\u003e into the enter a textbox",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter some number \u003cno2\u003e into the enter b textbox",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Sum button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify sum of \u003cno1\u003e and \u003cno2\u003e is the sum being displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "test-input-forms-tab;03-test-the-get-total-button;",
  "rows": [
    {
      "cells": [
        "no1",
        "no2"
      ],
      "line": 41,
      "id": "test-input-forms-tab;03-test-the-get-total-button;;1"
    },
    {
      "cells": [
        "1",
        "9"
      ],
      "line": 42,
      "id": "test-input-forms-tab;03-test-the-get-total-button;;2"
    },
    {
      "cells": [
        "11",
        "99"
      ],
      "line": 43,
      "id": "test-input-forms-tab;03-test-the-get-total-button;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "03 Test the Get Total Button",
  "description": "",
  "id": "test-input-forms-tab;03-test-the-get-total-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@GetTotal"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter some number 1 into the enter a textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter some number 9 into the enter b textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Sum button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify sum of 1 and 9 is the sum being displayed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 9624811300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 60585900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_sub_tab_Simple_form_demo()"
});
formatter.result({
  "duration": 861847200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "Steps.I_enter_some_number_no_into_the_enter_a_textbox(String)"
});
formatter.result({
  "duration": 636887900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 20
    }
  ],
  "location": "Steps.I_enter_some_number_no_into_the_enter_b_textbox(String)"
});
formatter.result({
  "duration": 134195200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Sum_button()"
});
formatter.result({
  "duration": 99063200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "9",
      "offset": 22
    }
  ],
  "location": "Steps.I_verify_output_sum_is_getting_displayed_as_their_sum(int,int)"
});
formatter.result({
  "duration": 98618800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 4166544100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "03 Test the Get Total Button",
  "description": "",
  "id": "test-input-forms-tab;03-test-the-get-total-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@GetTotal"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sub tab Simple form demo",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter some number 11 into the enter a textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter some number 99 into the enter b textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Sum button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify sum of 11 and 99 is the sum being displayed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 12446731700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 51562600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_sub_tab_Simple_form_demo()"
});
formatter.result({
  "duration": 974105000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 20
    }
  ],
  "location": "Steps.I_enter_some_number_no_into_the_enter_a_textbox(String)"
});
formatter.result({
  "duration": 612258700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 20
    }
  ],
  "location": "Steps.I_enter_some_number_no_into_the_enter_b_textbox(String)"
});
formatter.result({
  "duration": 96657000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Sum_button()"
});
formatter.result({
  "duration": 100756000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 16
    },
    {
      "val": "99",
      "offset": 23
    }
  ],
  "location": "Steps.I_verify_output_sum_is_getting_displayed_as_their_sum(int,int)"
});
formatter.result({
  "duration": 97018700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 4146484100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "04 Test the Single CheckBox",
  "description": "",
  "id": "test-input-forms-tab;04-test-the-single-checkbox",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@SingleCheckbox"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on sub tab CheckBox Demo",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I check the given CheckBox and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 9729150900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 68752400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_sub_tab_CheckBox_Demo()"
});
formatter.result({
  "duration": 30605125100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_check_the_given_CheckBox()"
});
formatter.result({
  "duration": 911318300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 269549799,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "05 Test the Multiple CheckBox",
  "description": "",
  "id": "test-input-forms-tab;05-test-the-multiple-checkbox",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@MultipleCheckbox"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click on sub tab CheckBox Demo",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on Check All button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click the Uncheck All button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I verify the button is check all",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 12125048899,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 65944100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_sub_tab_CheckBox_Demo()"
});
formatter.result({
  "duration": 1398367400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Check_All_button()"
});
formatter.result({
  "duration": 160685200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_the_Uncheck_All_button()"
});
formatter.result({
  "duration": 79850000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_verify_the_button_is_check_all()"
});
formatter.result({
  "duration": 60609801,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 284486600,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "06 Test the RadioButton",
  "description": "",
  "id": "test-input-forms-tab;06-test-the-radiobutton",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 66,
      "name": "@SingleRadio"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click on sub tab RadioButton Demo",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I check one of the radiobuttons and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 10892974100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 55797000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_sub_tab_RadioButton_Demo()"
});
formatter.result({
  "duration": 495514700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_check_one_of_the_radiobuttons_and_verify()"
});
formatter.result({
  "duration": 448098701,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 282403399,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "07 Test the multiple RadioButton",
  "description": "",
  "id": "test-input-forms-tab;07-test-the-multiple-radiobutton",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@MultipleRadio"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I click on sub tab RadioButton Demo",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I check one of the mradiobuttons and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 9614259799,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 47716100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_sub_tab_RadioButton_Demo()"
});
formatter.result({
  "duration": 593467700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_check_one_of_the_mradiobuttons_and_verify()"
});
formatter.result({
  "duration": 1255717800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 268254000,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "08 Test the Seletct list",
  "description": "",
  "id": "test-input-forms-tab;08-test-the-seletct-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@SelectList"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I click on Select Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on options of dropdown and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 10710770800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 49523299,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Select_Dropdown_list()"
});
formatter.result({
  "duration": 646006500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_options_of_dropdown_and_verify()"
});
formatter.result({
  "duration": 2233598800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 320764900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 94,
  "name": "09 Test the Input Form Submit",
  "description": "",
  "id": "test-input-forms-tab;09-test-the-input-form-submit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 93,
      "name": "@Form"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on sub input form submit",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I enter first name \u003cfname\u003e and \u003clname\u003e into textbox1",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I enter email \u003cemail\u003e and \u003cphno\u003e into textbox2",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I enter address \u003caddress\u003e and \u003ccity\u003e into textbox3",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I select state from the state drop-down list",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I enter zip code \u003czip\u003e and  \u003cweb\u003e into textboxes",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I select one of the radiobuttons indicating hosting",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I enter project description \u003cproj\u003e into project textbox and send",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.examples({
  "line": 108,
  "name": "",
  "description": "",
  "id": "test-input-forms-tab;09-test-the-input-form-submit;",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "phno",
        "address",
        "city",
        "zip",
        "web",
        "proj"
      ],
      "line": 109,
      "id": "test-input-forms-tab;09-test-the-input-form-submit;;1"
    },
    {
      "cells": [
        "shreya",
        "rao",
        "shreya@gmail.com",
        "9892573634",
        "lakshmi park",
        "thane",
        "400606",
        "google.com",
        "google146tdwdgvfjnnvkv"
      ],
      "line": 110,
      "id": "test-input-forms-tab;09-test-the-input-form-submit;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 110,
  "name": "09 Test the Input Form Submit",
  "description": "",
  "id": "test-input-forms-tab;09-test-the-input-form-submit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 93,
      "name": "@Form"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "I click on Input Forms Tab",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on sub input form submit",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I enter first name shreya and rao into textbox1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I enter email shreya@gmail.com and 9892573634 into textbox2",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I enter address lakshmi park and thane into textbox3",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I select state from the state drop-down list",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I enter zip code 400606 and  google.com into textboxes",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I select one of the radiobuttons indicating hosting",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I enter project description google146tdwdgvfjnnvkv into project textbox and send",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_open_the_application()"
});
formatter.result({
  "duration": 11115109100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Input_Forms_Tab()"
});
formatter.result({
  "duration": 57396400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_sub_input_form_submit()"
});
formatter.result({
  "duration": 732728799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shreya",
      "offset": 19
    },
    {
      "val": "rao",
      "offset": 30
    }
  ],
  "location": "Steps.I_enter_first_name_and_into_textbox1(String,String)"
});
formatter.result({
  "duration": 233676701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shreya@gmail.com",
      "offset": 14
    },
    {
      "val": "9892573634",
      "offset": 35
    }
  ],
  "location": "Steps.I_enter_email_and_into_textbox2(String,String)"
});
formatter.result({
  "duration": 215970899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lakshmi park",
      "offset": 16
    },
    {
      "val": "thane",
      "offset": 33
    }
  ],
  "location": "Steps.I_enter_address_and_into_textbox3(String,String)"
});
formatter.result({
  "duration": 180999900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_select_state_from_the_state_dropdown_list()"
});
formatter.result({
  "duration": 3582526100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400606",
      "offset": 17
    },
    {
      "val": " google.com",
      "offset": 28
    }
  ],
  "location": "Steps.I_enter_zip_code_and_into_textboxes(String,String)"
});
formatter.result({
  "duration": 198895801,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_select_one_of_the_radiobuttons_indicating_hosting()"
});
formatter.result({
  "duration": 235894300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "google146tdwdgvfjnnvkv",
      "offset": 28
    }
  ],
  "location": "Steps.I_enter_project_description_into_project_textbox_and_send(String)"
});
formatter.result({
  "duration": 1126689299,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close()"
});
formatter.result({
  "duration": 291802899,
  "status": "passed"
});
formatter.uri("alert.feature");
formatter.feature({
  "line": 2,
  "name": "Alert tab",
  "description": "",
  "id": "alert-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "01 Test file download",
  "description": "",
  "id": "alert-tab;01-test-file-download",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@fileDownload"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose file download",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Send \u003ctext\u003e in file",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on generate file",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify download",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I close them",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "alert-tab;01-test-file-download;",
  "rows": [
    {
      "cells": [
        "text"
      ],
      "line": 15,
      "id": "alert-tab;01-test-file-download;;1"
    },
    {
      "cells": [
        "shruti"
      ],
      "line": 16,
      "id": "alert-tab;01-test-file-download;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "01 Test file download",
  "description": "",
  "id": "alert-tab;01-test-file-download;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@fileDownload"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose file download",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Send shruti in file",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on generate file",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify download",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I close them",
  "keyword": "Then "
});
formatter.match({
  "location": "AlertTab.I_open_the_application()"
});
formatter.result({
  "duration": 14467960999,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.alert_tab()"
});
formatter.result({
  "duration": 90528901,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.file_download()"
});
formatter.result({
  "duration": 732600000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shruti",
      "offset": 5
    }
  ],
  "location": "AlertTab.type_files(String)"
});
formatter.result({
  "duration": 174691301,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.generate_file()"
});
formatter.result({
  "duration": 123114300,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.verify_download()"
});
formatter.result({
  "duration": 1155081800,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.closeit()"
});
formatter.result({
  "duration": 303201800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "02 Test javascript alert",
  "description": "",
  "id": "alert-tab;02-test-javascript-alert",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@javacriptAlert"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I open",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I choose javascript alert",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on prompt box",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I send \u003cex\u003e in alert",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on ok button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I close them",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "alert-tab;02-test-javascript-alert;",
  "rows": [
    {
      "cells": [
        "ex"
      ],
      "line": 30,
      "id": "alert-tab;02-test-javascript-alert;;1"
    },
    {
      "cells": [
        "shruti"
      ],
      "line": 31,
      "id": "alert-tab;02-test-javascript-alert;;2"
    },
    {
      "cells": [
        "shreya"
      ],
      "line": 32,
      "id": "alert-tab;02-test-javascript-alert;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "02 Test javascript alert",
  "description": "",
  "id": "alert-tab;02-test-javascript-alert;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@javacriptAlert"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I open",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I choose javascript alert",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on prompt box",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I send shruti in alert",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on ok button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I close them",
  "keyword": "Then "
});
formatter.match({
  "location": "AlertTab.I_open_the_application()"
});
formatter.result({
  "duration": 14131273400,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.alert_tab()"
});
formatter.result({
  "duration": 92483799,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.javascript_alert()"
});
formatter.result({
  "duration": 2409974400,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.prompt_box()"
});
formatter.result({
  "duration": 253172801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shruti",
      "offset": 7
    }
  ],
  "location": "AlertTab.send_alert(String)"
});
formatter.result({
  "duration": 16980400,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.ok_button()"
});
formatter.result({
  "duration": 18399699,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.closeit()"
});
formatter.result({
  "duration": 4145774000,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "02 Test javascript alert",
  "description": "",
  "id": "alert-tab;02-test-javascript-alert;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@javacriptAlert"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I open",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I choose javascript alert",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on prompt box",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I send shreya in alert",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on ok button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I close them",
  "keyword": "Then "
});
formatter.match({
  "location": "AlertTab.I_open_the_application()"
});
formatter.result({
  "duration": 15074605700,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.alert_tab()"
});
formatter.result({
  "duration": 166958700,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.javascript_alert()"
});
formatter.result({
  "duration": 774656799,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.prompt_box()"
});
formatter.result({
  "duration": 150704301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shreya",
      "offset": 7
    }
  ],
  "location": "AlertTab.send_alert(String)"
});
formatter.result({
  "duration": 13709001,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.ok_button()"
});
formatter.result({
  "duration": 15311299,
  "status": "passed"
});
formatter.match({
  "location": "AlertTab.closeit()"
});
formatter.result({
  "duration": 4155214401,
  "status": "passed"
});
formatter.uri("datepicker.feature");
formatter.feature({
  "line": 2,
  "name": "Test Date pickers tab",
  "description": "",
  "id": "test-date-pickers-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "01 Test if date selected is displayed",
  "description": "",
  "id": "test-date-pickers-tab;01-test-if-date-selected-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Calendar"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to the app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Calendar button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select some date from the list",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if date is displayed in the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I close the app",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_login_to_the_app()"
});
formatter.result({
  "duration": 11018816000,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 51483000,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_bootstrap_date_picker_tab()"
});
formatter.result({
  "duration": 2877412500,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_calendar_button()"
});
formatter.result({
  "duration": 10129911800,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_select_some_date_from_the_list()"
});
formatter.result({
  "duration": 118203400,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_verify_if_date_is_displayed_in_the_text_box()"
});
formatter.result({
  "duration": 63509900,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.close()"
});
formatter.result({
  "duration": 298919500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "02 Test clear button",
  "description": "",
  "id": "test-date-pickers-tab;02-test-clear-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@ClearButton"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I login to the app",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Calendar button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select some date from the list",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Calendar button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select clear tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify if date textbox is empty",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I close the app",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_login_to_the_app()"
});
formatter.result({
  "duration": 10349905200,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 51219500,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_bootstrap_date_picker_tab()"
});
formatter.result({
  "duration": 1049227100,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_calendar_button()"
});
formatter.result({
  "duration": 10131939900,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_select_some_date_from_the_list()"
});
formatter.result({
  "duration": 111263700,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_calendar_button()"
});
formatter.result({
  "duration": 10118528600,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_select_clear_tab()"
});
formatter.result({
  "duration": 138364500,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_verify_if_date_textbox_is_empty()"
});
formatter.result({
  "duration": 81353100,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.close()"
});
formatter.result({
  "duration": 297659400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "03 Test Today button",
  "description": "",
  "id": "test-date-pickers-tab;03-test-today-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@TodayButton"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I login to the app",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Bootstrap Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Calendar button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on today button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify if date is today",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I close the app",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_login_to_the_app()"
});
formatter.result({
  "duration": 10625758600,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 62689500,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_bootstrap_date_picker_tab()"
});
formatter.result({
  "duration": 4130018900,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_calendar_button()"
});
formatter.result({
  "duration": 10152759300,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.I_click_on_today_button()"
});
formatter.result({
  "duration": 103338600,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.I_verify_if_date_is_today()"
});
formatter.result({
  "duration": 62622200,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.close()"
});
formatter.result({
  "duration": 319646100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 36,
      "value": "#@Visiblity"
    },
    {
      "line": 37,
      "value": "#  Scenario: 04 Test calendar is visible for from and to option"
    },
    {
      "line": 38,
      "value": "#  Given I login to the app"
    },
    {
      "line": 39,
      "value": "#  And I click on Date pickers Tab"
    },
    {
      "line": 40,
      "value": "#  When I click on JQuery Date Picker tab"
    },
    {
      "line": 41,
      "value": "#  When I click on From text field"
    },
    {
      "line": 42,
      "value": "#  Then I verify that the calendar is displayed"
    },
    {
      "line": 43,
      "value": "#  And I click on To text field"
    },
    {
      "line": 44,
      "value": "#  Then I verify that calendar is present"
    },
    {
      "line": 45,
      "value": "#  Then I close the app"
    }
  ],
  "line": 48,
  "name": "05 Check range of date",
  "description": "",
  "id": "test-date-pickers-tab;05-check-range-of-date",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@RangeDate"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I login to the app",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I click on Date pickers Tab",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on JQuery Date Picker tab",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on From and To text field and select date and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I close the app",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePicker.i_login_to_the_app()"
});
formatter.result({
  "duration": 9812389200,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_date_pickers_tab()"
});
formatter.result({
  "duration": 57369200,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.i_click_on_j_query_date_picker_tab()"
});
formatter.result({
  "duration": 414041100,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.I_click_on_From_text_field_and_select_date()"
});
formatter.result({
  "duration": 5591081600,
  "status": "passed"
});
formatter.match({
  "location": "DatePicker.close()"
});
formatter.result({
  "duration": 333107700,
  "status": "passed"
});
formatter.uri("list.feature");
formatter.feature({
  "line": 2,
  "name": "Test List Box",
  "description": "",
  "id": "test-list-box",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "01 bootstrap list box tab",
  "description": "",
  "id": "test-list-box;01-bootstrap-list-box-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ListBox"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on bootstrap list box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select some results \u003cmessage\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I press the shift elements button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the results \u003cmessage\u003e are shifted",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I close it",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-list-box;01-bootstrap-list-box-tab;",
  "rows": [
    {
      "cells": [
        "message"
      ],
      "line": 14,
      "id": "test-list-box;01-bootstrap-list-box-tab;;1"
    },
    {
      "cells": [
        "bootstrap-duallist"
      ],
      "line": 15,
      "id": "test-list-box;01-bootstrap-list-box-tab;;2"
    },
    {
      "cells": [
        "Dapibus ac facilisis in"
      ],
      "line": 16,
      "id": "test-list-box;01-bootstrap-list-box-tab;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "01 bootstrap list box tab",
  "description": "",
  "id": "test-list-box;01-bootstrap-list-box-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ListBox"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on bootstrap list box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select some results bootstrap-duallist",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I press the shift elements button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the results bootstrap-duallist are shifted",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I close it",
  "keyword": "Then "
});
formatter.match({
  "location": "list.i_login_to_the_application()"
});
formatter.result({
  "duration": 9944524600,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_list_box_tab()"
});
formatter.result({
  "duration": 51347700,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_bootstrap_list_box()"
});
formatter.result({
  "duration": 3917131200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bootstrap-duallist",
      "offset": 22
    }
  ],
  "location": "list.i_select_some_results_bootstrap_duallist(String)"
});
formatter.result({
  "duration": 110336800,
  "status": "passed"
});
formatter.match({
  "location": "list.i_press_the_shift_elements_button()"
});
formatter.result({
  "duration": 58506100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bootstrap-duallist",
      "offset": 21
    }
  ],
  "location": "list.i_verify_the_resultsbootstrap_duallist_are_shifted(String)"
});
formatter.result({
  "duration": 5044652200,
  "status": "passed"
});
formatter.match({
  "location": "list.I_close_it()"
});
formatter.result({
  "duration": 345101500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "01 bootstrap list box tab",
  "description": "",
  "id": "test-list-box;01-bootstrap-list-box-tab;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ListBox"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on bootstrap list box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select some results Dapibus ac facilisis in",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I press the shift elements button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the results Dapibus ac facilisis in are shifted",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I close it",
  "keyword": "Then "
});
formatter.match({
  "location": "list.i_login_to_the_application()"
});
formatter.result({
  "duration": 9915841300,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_list_box_tab()"
});
formatter.result({
  "duration": 57859200,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_bootstrap_list_box()"
});
formatter.result({
  "duration": 4826622000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dapibus ac facilisis in",
      "offset": 22
    }
  ],
  "location": "list.i_select_some_results_bootstrap_duallist(String)"
});
formatter.result({
  "duration": 152743800,
  "status": "passed"
});
formatter.match({
  "location": "list.i_press_the_shift_elements_button()"
});
formatter.result({
  "duration": 66503600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dapibus ac facilisis in",
      "offset": 21
    }
  ],
  "location": "list.i_verify_the_resultsbootstrap_duallist_are_shifted(String)"
});
formatter.result({
  "duration": 5049291800,
  "status": "passed"
});
formatter.match({
  "location": "list.I_close_it()"
});
formatter.result({
  "duration": 330375900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "02 Data List Filter tab",
  "description": "",
  "id": "test-list-box;02-data-list-filter-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@DataListFilter"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on data list filter tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter a value \u003crandom\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify the results\u003crandom\u003e are shown",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I close it",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "test-list-box;02-data-list-filter-tab;",
  "rows": [
    {
      "cells": [
        "random"
      ],
      "line": 27,
      "id": "test-list-box;02-data-list-filter-tab;;1"
    },
    {
      "cells": [
        "Tyreese Burn"
      ],
      "line": 28,
      "id": "test-list-box;02-data-list-filter-tab;;2"
    },
    {
      "cells": [
        "manager"
      ],
      "line": 29,
      "id": "test-list-box;02-data-list-filter-tab;;3"
    },
    {
      "cells": [
        "980-543-3333"
      ],
      "line": 30,
      "id": "test-list-box;02-data-list-filter-tab;;4"
    },
    {
      "cells": [
        "test5@company.com"
      ],
      "line": 31,
      "id": "test-list-box;02-data-list-filter-tab;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "02 Data List Filter tab",
  "description": "",
  "id": "test-list-box;02-data-list-filter-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@DataListFilter"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on data list filter tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter a value Tyreese Burn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify the resultsTyreese Burn are shown",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I close it",
  "keyword": "Then "
});
formatter.match({
  "location": "list.i_login_to_the_application()"
});
formatter.result({
  "duration": 23169986000,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_list_box_tab()"
});
formatter.result({
  "duration": 76089100,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_data_list_filter_tab()"
});
formatter.result({
  "duration": 585535500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tyreese Burn",
      "offset": 16
    }
  ],
  "location": "list.i_enter_a_value_Tyreese_Burn(String)"
});
formatter.result({
  "duration": 104132900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tyreese Burn",
      "offset": 20
    }
  ],
  "location": "list.i_verify_the_resultsTyreese_Burn_are_shown(String)"
});
formatter.result({
  "duration": 23638200,
  "status": "passed"
});
formatter.match({
  "location": "list.I_close_it()"
});
formatter.result({
  "duration": 338457300,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "02 Data List Filter tab",
  "description": "",
  "id": "test-list-box;02-data-list-filter-tab;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@DataListFilter"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on data list filter tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter a value manager",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify the resultsmanager are shown",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I close it",
  "keyword": "Then "
});
formatter.match({
  "location": "list.i_login_to_the_application()"
});
formatter.result({
  "duration": 12975624500,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_list_box_tab()"
});
formatter.result({
  "duration": 54703100,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_data_list_filter_tab()"
});
formatter.result({
  "duration": 1836542200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manager",
      "offset": 16
    }
  ],
  "location": "list.i_enter_a_value_Tyreese_Burn(String)"
});
formatter.result({
  "duration": 151303300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manager",
      "offset": 20
    }
  ],
  "location": "list.i_verify_the_resultsTyreese_Burn_are_shown(String)"
});
formatter.result({
  "duration": 13749400,
  "status": "passed"
});
formatter.match({
  "location": "list.I_close_it()"
});
formatter.result({
  "duration": 330420200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "02 Data List Filter tab",
  "description": "",
  "id": "test-list-box;02-data-list-filter-tab;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@DataListFilter"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on data list filter tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter a value 980-543-3333",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify the results980-543-3333 are shown",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I close it",
  "keyword": "Then "
});
formatter.match({
  "location": "list.i_login_to_the_application()"
});
formatter.result({
  "duration": 16220976400,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_list_box_tab()"
});
formatter.result({
  "duration": 71239400,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_data_list_filter_tab()"
});
formatter.result({
  "duration": 765766800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "980-543-3333",
      "offset": 16
    }
  ],
  "location": "list.i_enter_a_value_Tyreese_Burn(String)"
});
formatter.result({
  "duration": 154796800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "980-543-3333",
      "offset": 20
    }
  ],
  "location": "list.i_verify_the_resultsTyreese_Burn_are_shown(String)"
});
formatter.result({
  "duration": 25128700,
  "status": "passed"
});
formatter.match({
  "location": "list.I_close_it()"
});
formatter.result({
  "duration": 340658100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "02 Data List Filter tab",
  "description": "",
  "id": "test-list-box;02-data-list-filter-tab;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@DataListFilter"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on data list filter tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter a value test5@company.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify the resultstest5@company.com are shown",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I close it",
  "keyword": "Then "
});
formatter.match({
  "location": "list.i_login_to_the_application()"
});
formatter.result({
  "duration": 10160339800,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_list_box_tab()"
});
formatter.result({
  "duration": 50877600,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_data_list_filter_tab()"
});
formatter.result({
  "duration": 983055200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test5@company.com",
      "offset": 16
    }
  ],
  "location": "list.i_enter_a_value_Tyreese_Burn(String)"
});
formatter.result({
  "duration": 126877000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test5@company.com",
      "offset": 20
    }
  ],
  "location": "list.i_verify_the_resultsTyreese_Burn_are_shown(String)"
});
formatter.result({
  "duration": 20882200,
  "status": "passed"
});
formatter.match({
  "location": "list.I_close_it()"
});
formatter.result({
  "duration": 405889800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "03 JQuery list box",
  "description": "",
  "id": "test-list-box;03-jquery-list-box",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@JqueryList"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on JQuery",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select a \u003coption\u003e result",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify result \u003coption\u003e is added",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I select a \u003coption\u003e result",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on remove",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify the element \u003coption\u003e is removed",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I close it",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "test-list-box;03-jquery-list-box;",
  "rows": [
    {
      "cells": [
        "option"
      ],
      "line": 46,
      "id": "test-list-box;03-jquery-list-box;;1"
    },
    {
      "cells": [
        "Alice"
      ],
      "line": 47,
      "id": "test-list-box;03-jquery-list-box;;2"
    },
    {
      "cells": [
        "Isabella"
      ],
      "line": 48,
      "id": "test-list-box;03-jquery-list-box;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "03 JQuery list box",
  "description": "",
  "id": "test-list-box;03-jquery-list-box;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@JqueryList"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on JQuery",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select a Alice result",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify result Alice is added",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I select a Alice result",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on remove",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify the element Alice is removed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I close it",
  "keyword": "Then "
});
formatter.match({
  "location": "list.i_login_to_the_application()"
});
formatter.result({
  "duration": 10159987500,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_list_box_tab()"
});
formatter.result({
  "duration": 48299800,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_JQuery()"
});
formatter.result({
  "duration": 1035221500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice",
      "offset": 11
    }
  ],
  "location": "list.i_select_a_result_Alice(String)"
});
formatter.result({
  "duration": 1199772600,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_Add_button()"
});
formatter.result({
  "duration": 94828000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice",
      "offset": 16
    }
  ],
  "location": "list.i_verify_result_Alice_is_added(String)"
});
formatter.result({
  "duration": 66577200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice",
      "offset": 11
    }
  ],
  "location": "list.i_select_a_result_Alice(String)"
});
formatter.result({
  "duration": 82568900,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_remove()"
});
formatter.result({
  "duration": 217015700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice",
      "offset": 21
    }
  ],
  "location": "list.i_verify_the_element_Aliceis_removed(String)"
});
formatter.result({
  "duration": 45235700,
  "status": "passed"
});
formatter.match({
  "location": "list.I_close_it()"
});
formatter.result({
  "duration": 361558400,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "03 JQuery list box",
  "description": "",
  "id": "test-list-box;03-jquery-list-box;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@JqueryList"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on JQuery",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select a Isabella result",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify result Isabella is added",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I select a Isabella result",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on remove",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify the element Isabella is removed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I close it",
  "keyword": "Then "
});
formatter.match({
  "location": "list.i_login_to_the_application()"
});
formatter.result({
  "duration": 9957448300,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_list_box_tab()"
});
formatter.result({
  "duration": 50996100,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_JQuery()"
});
formatter.result({
  "duration": 855362600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Isabella",
      "offset": 11
    }
  ],
  "location": "list.i_select_a_result_Alice(String)"
});
formatter.result({
  "duration": 637480100,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_Add_button()"
});
formatter.result({
  "duration": 84245200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Isabella",
      "offset": 16
    }
  ],
  "location": "list.i_verify_result_Alice_is_added(String)"
});
formatter.result({
  "duration": 70559900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Isabella",
      "offset": 11
    }
  ],
  "location": "list.i_select_a_result_Alice(String)"
});
formatter.result({
  "duration": 84299000,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_remove()"
});
formatter.result({
  "duration": 102615400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Isabella",
      "offset": 21
    }
  ],
  "location": "list.i_verify_the_element_Aliceis_removed(String)"
});
formatter.result({
  "duration": 46690200,
  "status": "passed"
});
formatter.match({
  "location": "list.I_close_it()"
});
formatter.result({
  "duration": 388607100,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "04 JQuery addall and removeall",
  "description": "",
  "id": "test-list-box;04-jquery-addall-and-removeall",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@JqueryAddRemove"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "I login to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I click on list box tab",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on JQuery",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on addall button",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I verify that all the results are added",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "when I click on removeall button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I verify  all the results are removed",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I close it",
  "keyword": "Then "
});
formatter.match({
  "location": "list.i_login_to_the_application()"
});
formatter.result({
  "duration": 10277160900,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_list_box_tab()"
});
formatter.result({
  "duration": 49582200,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_JQuery()"
});
formatter.result({
  "duration": 2337576200,
  "status": "passed"
});
formatter.match({
  "location": "list.i_click_on_addall_button()"
});
formatter.result({
  "duration": 1801875600,
  "status": "passed"
});
formatter.match({
  "location": "list.i_verify_that_all_the_results_are_added()"
});
formatter.result({
  "duration": 42896500,
  "status": "passed"
});
formatter.match({
  "location": "list.when_I_click_on_removeall_button()"
});
formatter.result({
  "duration": 88035400,
  "status": "passed"
});
formatter.match({
  "location": "list.i_verify_all_the_results_are_removed()"
});
formatter.result({
  "duration": 18506400,
  "status": "passed"
});
formatter.match({
  "location": "list.I_close_it()"
});
formatter.result({
  "duration": 385118300,
  "status": "passed"
});
formatter.uri("otherstab.feature");
formatter.feature({
  "line": 2,
  "name": "Test Others tab",
  "description": "",
  "id": "test-others-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "01 Test three drop-down options after clicking others tab",
  "description": "",
  "id": "test-others-tab;01-test-three-drop-down-options-after-clicking-others-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ThreeDropDown"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am able to launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Others Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify \u003coption\u003e is getting displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-others-tab;01-test-three-drop-down-options-after-clicking-others-tab;",
  "rows": [
    {
      "cells": [
        "option"
      ],
      "line": 11,
      "id": "test-others-tab;01-test-three-drop-down-options-after-clicking-others-tab;;1"
    },
    {
      "cells": [
        "Drag and Drop"
      ],
      "line": 12,
      "id": "test-others-tab;01-test-three-drop-down-options-after-clicking-others-tab;;2"
    },
    {
      "cells": [
        "Dynamic Data Loading"
      ],
      "line": 13,
      "id": "test-others-tab;01-test-three-drop-down-options-after-clicking-others-tab;;3"
    },
    {
      "cells": [
        "Charts Demo"
      ],
      "line": 14,
      "id": "test-others-tab;01-test-three-drop-down-options-after-clicking-others-tab;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "01 Test three drop-down options after clicking others tab",
  "description": "",
  "id": "test-others-tab;01-test-three-drop-down-options-after-clicking-others-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ThreeDropDown"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am able to launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Others Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify Drag and Drop is getting displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close",
  "keyword": "And "
});
formatter.match({
  "location": "OthersTab.i_am_able_to_launch_the_site()"
});
formatter.result({
  "duration": 17649134600,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_click_on_others_tab()"
});
formatter.result({
  "duration": 106776900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Drag and Drop",
      "offset": 9
    }
  ],
  "location": "OthersTab.i_verify_values_are_getting_displayed(String)"
});
formatter.result({
  "duration": 103093900,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.close()"
});
formatter.result({
  "duration": 4149364700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "01 Test three drop-down options after clicking others tab",
  "description": "",
  "id": "test-others-tab;01-test-three-drop-down-options-after-clicking-others-tab;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ThreeDropDown"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am able to launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Others Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify Dynamic Data Loading is getting displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close",
  "keyword": "And "
});
formatter.match({
  "location": "OthersTab.i_am_able_to_launch_the_site()"
});
formatter.result({
  "duration": 14617198900,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_click_on_others_tab()"
});
formatter.result({
  "duration": 85210900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dynamic Data Loading",
      "offset": 9
    }
  ],
  "location": "OthersTab.i_verify_values_are_getting_displayed(String)"
});
formatter.result({
  "duration": 100121900,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.close()"
});
formatter.result({
  "duration": 406485600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "01 Test three drop-down options after clicking others tab",
  "description": "",
  "id": "test-others-tab;01-test-three-drop-down-options-after-clicking-others-tab;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ThreeDropDown"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am able to launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Others Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify Charts Demo is getting displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close",
  "keyword": "And "
});
formatter.match({
  "location": "OthersTab.i_am_able_to_launch_the_site()"
});
formatter.result({
  "duration": 13729068400,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_click_on_others_tab()"
});
formatter.result({
  "duration": 104475000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Charts Demo",
      "offset": 9
    }
  ],
  "location": "OthersTab.i_verify_values_are_getting_displayed(String)"
});
formatter.result({
  "duration": 115003100,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.close()"
});
formatter.result({
  "duration": 411510400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "02 The options in drop down menu are clickable",
  "description": "",
  "id": "test-others-tab;02-the-options-in-drop-down-menu-are-clickable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Clickable"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am able to launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I verify others tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Others Tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on \u003citem\u003e in the drop down menu",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify that it takes me to \u003cname\u003e page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "test-others-tab;02-the-options-in-drop-down-menu-are-clickable;",
  "rows": [
    {
      "cells": [
        "item",
        "name"
      ],
      "line": 26,
      "id": "test-others-tab;02-the-options-in-drop-down-menu-are-clickable;;1"
    },
    {
      "cells": [
        "Drag and Drop",
        "drag-and-drop-demo"
      ],
      "line": 27,
      "id": "test-others-tab;02-the-options-in-drop-down-menu-are-clickable;;2"
    },
    {
      "cells": [
        "Dynamic Data Loading",
        "dynamic-data-loading-demo"
      ],
      "line": 28,
      "id": "test-others-tab;02-the-options-in-drop-down-menu-are-clickable;;3"
    },
    {
      "cells": [
        "Charts Demo",
        "charts-mouse-hover-demo"
      ],
      "line": 29,
      "id": "test-others-tab;02-the-options-in-drop-down-menu-are-clickable;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "02 The options in drop down menu are clickable",
  "description": "",
  "id": "test-others-tab;02-the-options-in-drop-down-menu-are-clickable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Clickable"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am able to launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I verify others tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Others Tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Drag and Drop in the drop down menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify that it takes me to drag-and-drop-demo page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close",
  "keyword": "And "
});
formatter.match({
  "location": "OthersTab.i_am_able_to_launch_the_site()"
});
formatter.result({
  "duration": 15347793700,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_verify_others_tab_is_present()"
});
formatter.result({
  "duration": 57625600,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_click_on_others_tab()"
});
formatter.result({
  "duration": 99682900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Drag and Drop",
      "offset": 11
    }
  ],
  "location": "OthersTab.i_click_on_an_item_in_the_drop_down_menu(String)"
});
formatter.result({
  "duration": 781218100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drag-and-drop-demo",
      "offset": 29
    }
  ],
  "location": "OthersTab.i_verify_that_it_takes_me_to_another_page(String)"
});
formatter.result({
  "duration": 3428200,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.close()"
});
formatter.result({
  "duration": 367257100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "02 The options in drop down menu are clickable",
  "description": "",
  "id": "test-others-tab;02-the-options-in-drop-down-menu-are-clickable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Clickable"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am able to launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I verify others tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Others Tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Dynamic Data Loading in the drop down menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify that it takes me to dynamic-data-loading-demo page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close",
  "keyword": "And "
});
formatter.match({
  "location": "OthersTab.i_am_able_to_launch_the_site()"
});
formatter.result({
  "duration": 16829518800,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_verify_others_tab_is_present()"
});
formatter.result({
  "duration": 70679300,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_click_on_others_tab()"
});
formatter.result({
  "duration": 99390800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dynamic Data Loading",
      "offset": 11
    }
  ],
  "location": "OthersTab.i_click_on_an_item_in_the_drop_down_menu(String)"
});
formatter.result({
  "duration": 881869500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dynamic-data-loading-demo",
      "offset": 29
    }
  ],
  "location": "OthersTab.i_verify_that_it_takes_me_to_another_page(String)"
});
formatter.result({
  "duration": 6236600,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.close()"
});
formatter.result({
  "duration": 369188400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "02 The options in drop down menu are clickable",
  "description": "",
  "id": "test-others-tab;02-the-options-in-drop-down-menu-are-clickable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Clickable"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am able to launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I verify others tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Others Tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Charts Demo in the drop down menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify that it takes me to charts-mouse-hover-demo page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close",
  "keyword": "And "
});
formatter.match({
  "location": "OthersTab.i_am_able_to_launch_the_site()"
});
formatter.result({
  "duration": 13882594400,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_verify_others_tab_is_present()"
});
formatter.result({
  "duration": 60448000,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_click_on_others_tab()"
});
formatter.result({
  "duration": 91609600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Charts Demo",
      "offset": 11
    }
  ],
  "location": "OthersTab.i_click_on_an_item_in_the_drop_down_menu(String)"
});
formatter.result({
  "duration": 1210999600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "charts-mouse-hover-demo",
      "offset": 29
    }
  ],
  "location": "OthersTab.i_verify_that_it_takes_me_to_another_page(String)"
});
formatter.result({
  "duration": 27983900,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.close()"
});
formatter.result({
  "duration": 4164638400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "03 Test the dynamic data loading",
  "description": "",
  "id": "test-others-tab;03-test-the-dynamic-data-loading",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@DynamicDataLoading"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am able to launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I verify others tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Others Tab",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on dynamic loading tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I check the user and again click new user and check",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I close",
  "keyword": "Then "
});
formatter.match({
  "location": "OthersTab.i_am_able_to_launch_the_site()"
});
formatter.result({
  "duration": 17983423400,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_verify_others_tab_is_present()"
});
formatter.result({
  "duration": 56431300,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.i_click_on_others_tab()"
});
formatter.result({
  "duration": 88651300,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.I_click_on_dynamic_loading_tab()"
});
formatter.result({
  "duration": 782483000,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.I_check_the_user_and_again_click_new_user_and_check()"
});
formatter.result({
  "duration": 286249100,
  "status": "passed"
});
formatter.match({
  "location": "OthersTab.close()"
});
formatter.result({
  "duration": 462553400,
  "status": "passed"
});
formatter.uri("progress.feature");
formatter.feature({
  "line": 2,
  "name": "Test Progress Bar",
  "description": "",
  "id": "test-progress-bar",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "01 Test Start Download button",
  "description": "",
  "id": "test-progress-bar;01-test-start-download-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@StartDownload"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on sub tab JQuery Download Progress bars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Start Download button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I verify download status is complete before clicking close button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Close button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I close app",
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.I_open_the_application()"
});
formatter.result({
  "duration": 15488771500,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 49585100,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_JQuery_Download_Progress_bars()"
});
formatter.result({
  "duration": 3100162700,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Start_Download_button()"
});
formatter.result({
  "duration": 138980100,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_verify_download_status_is_complete_before_clicking_close_button()"
});
formatter.result({
  "duration": 60688600,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Close_button()"
});
formatter.result({
  "duration": 93273000,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.close()"
});
formatter.result({
  "duration": 426032000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "02 Test Bootstrap Progress Bar button",
  "description": "",
  "id": "test-progress-bar;02-test-bootstrap-progress-bar-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@ProgressBar"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on sub tab Bootstrap Progress Bar",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify initial value of progress bar is \"\u003cpercent\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close app",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "test-progress-bar;02-test-bootstrap-progress-bar-button;",
  "rows": [
    {
      "cells": [
        "percent"
      ],
      "line": 26,
      "id": "test-progress-bar;02-test-bootstrap-progress-bar-button;;1"
    },
    {
      "cells": [
        "0%"
      ],
      "line": 27,
      "id": "test-progress-bar;02-test-bootstrap-progress-bar-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "02 Test Bootstrap Progress Bar button",
  "description": "",
  "id": "test-progress-bar;02-test-bootstrap-progress-bar-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@ProgressBar"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on sub tab Bootstrap Progress Bar",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify initial value of progress bar is \"0%\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close app",
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.I_open_the_application()"
});
formatter.result({
  "duration": 11631541300,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 57260700,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Bootstrap_Progress_Bar()"
});
formatter.result({
  "duration": 2918893400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0%",
      "offset": 43
    }
  ],
  "location": "ProgressBar.i_verify_initial_value_of_progress_bar_is(String)"
});
formatter.result({
  "duration": 32706000,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.close()"
});
formatter.result({
  "duration": 354961700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "03 Test the download",
  "description": "",
  "id": "test-progress-bar;03-test-the-download",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Downloadsize"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I launch selenium easy website",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on Progress Bar Tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on sub tab Bootstrap Progress Bar",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Downloadsize:20480kb button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify the progress bar stops at 100%",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I close app",
  "keyword": "Then "
});
formatter.match({
  "location": "ProgressBar.I_open_the_application()"
});
formatter.result({
  "duration": 13361186700,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_Progress_Bar_Tab()"
});
formatter.result({
  "duration": 70115000,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.i_click_on_sub_tab_Bootstrap_Progress_Bar()"
});
formatter.result({
  "duration": 2136506300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20480",
      "offset": 24
    }
  ],
  "location": "ProgressBar.i_click_on_Downloadsize_kb_button(int)"
});
formatter.result({
  "duration": 57340400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 35
    }
  ],
  "location": "ProgressBar.i_verify_the_progress_bar_stops_at(int)"
});
formatter.result({
  "duration": 59029200,
  "status": "passed"
});
formatter.match({
  "location": "ProgressBar.close()"
});
formatter.result({
  "duration": 471483300,
  "status": "passed"
});
formatter.uri("table.feature");
formatter.feature({
  "line": 2,
  "name": "Test the table tab",
  "description": "",
  "id": "test-the-table-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "01 Test table pagination",
  "description": "",
  "id": "test-the-table-tab;01-test-table-pagination",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TablePagination"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Table tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose Table pagination",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on button2",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I check two arrows",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on button3",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I check one arrow",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close the pg",
  "keyword": "Then "
});
formatter.match({
  "location": "Table.I_open_the_app()"
});
formatter.result({
  "duration": 12718875300,
  "status": "passed"
});
formatter.match({
  "location": "Table.open_table()"
});
formatter.result({
  "duration": 97502700,
  "status": "passed"
});
formatter.match({
  "location": "Table.table_pagination()"
});
formatter.result({
  "duration": 956314300,
  "status": "passed"
});
formatter.match({
  "location": "Table.button2()"
});
formatter.result({
  "duration": 96440000,
  "status": "passed"
});
formatter.match({
  "location": "Table.check_2arrow()"
});
formatter.result({
  "duration": 96093600,
  "status": "passed"
});
formatter.match({
  "location": "Table.button3()"
});
formatter.result({
  "duration": 86523600,
  "status": "passed"
});
formatter.match({
  "location": "Table.one_arrow()"
});
formatter.result({
  "duration": 69829600,
  "status": "passed"
});
formatter.match({
  "location": "Table.close1()"
});
formatter.result({
  "duration": 439932500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "02 test table data search",
  "description": "",
  "id": "test-the-table-tab;02-test-table-data-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tableDataSearch"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Table tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I choose Table data search",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I search \u003ctext\u003e in searchbar",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify it is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I close the pg",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "test-the-table-tab;02-test-table-data-search;",
  "rows": [
    {
      "cells": [
        "text"
      ],
      "line": 25,
      "id": "test-the-table-tab;02-test-table-data-search;;1"
    },
    {
      "cells": [
        "Bootstrap 3"
      ],
      "line": 26,
      "id": "test-the-table-tab;02-test-table-data-search;;2"
    },
    {
      "cells": [
        "Jane Doe"
      ],
      "line": 27,
      "id": "test-the-table-tab;02-test-table-data-search;;3"
    },
    {
      "cells": [
        "completed"
      ],
      "line": 28,
      "id": "test-the-table-tab;02-test-table-data-search;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "02 test table data search",
  "description": "",
  "id": "test-the-table-tab;02-test-table-data-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tableDataSearch"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Table tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I choose Table data search",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I search Bootstrap 3 in searchbar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify it is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I close the pg",
  "keyword": "Then "
});
formatter.match({
  "location": "Table.I_open_the_app()"
});
formatter.result({
  "duration": 13007115300,
  "status": "passed"
});
formatter.match({
  "location": "Table.open_table()"
});
formatter.result({
  "duration": 117568800,
  "status": "passed"
});
formatter.match({
  "location": "Table.dataSearch()"
});
formatter.result({
  "duration": 1016010500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bootstrap 3",
      "offset": 9
    }
  ],
  "location": "Table.search(String)"
});
formatter.result({
  "duration": 156930400,
  "status": "passed"
});
formatter.match({
  "location": "Table.verify()"
});
formatter.result({
  "duration": 164345900,
  "status": "passed"
});
formatter.match({
  "location": "Table.close1()"
});
formatter.result({
  "duration": 4201785900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "02 test table data search",
  "description": "",
  "id": "test-the-table-tab;02-test-table-data-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tableDataSearch"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Table tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I choose Table data search",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I search Jane Doe in searchbar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify it is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I close the pg",
  "keyword": "Then "
});
formatter.match({
  "location": "Table.I_open_the_app()"
});
formatter.result({
  "duration": 12821047800,
  "status": "passed"
});
formatter.match({
  "location": "Table.open_table()"
});
formatter.result({
  "duration": 79582700,
  "status": "passed"
});
formatter.match({
  "location": "Table.dataSearch()"
});
formatter.result({
  "duration": 563898800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jane Doe",
      "offset": 9
    }
  ],
  "location": "Table.search(String)"
});
formatter.result({
  "duration": 144645300,
  "status": "passed"
});
formatter.match({
  "location": "Table.verify()"
});
formatter.result({
  "duration": 81110400,
  "status": "passed"
});
formatter.match({
  "location": "Table.close1()"
});
formatter.result({
  "duration": 443346000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "02 test table data search",
  "description": "",
  "id": "test-the-table-tab;02-test-table-data-search;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tableDataSearch"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Table tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I choose Table data search",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I search completed in searchbar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify it is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I close the pg",
  "keyword": "Then "
});
formatter.match({
  "location": "Table.I_open_the_app()"
});
formatter.result({
  "duration": 11279361200,
  "status": "passed"
});
formatter.match({
  "location": "Table.open_table()"
});
formatter.result({
  "duration": 120900200,
  "status": "passed"
});
formatter.match({
  "location": "Table.dataSearch()"
});
formatter.result({
  "duration": 781094400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "completed",
      "offset": 9
    }
  ],
  "location": "Table.search(String)"
});
formatter.result({
  "duration": 189791400,
  "status": "passed"
});
formatter.match({
  "location": "Table.verify()"
});
formatter.result({
  "duration": 184851600,
  "status": "passed"
});
formatter.match({
  "location": "Table.close1()"
});
formatter.result({
  "duration": 424964100,
  "status": "passed"
});
});