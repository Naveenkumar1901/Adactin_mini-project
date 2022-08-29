$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/Maven_Cucumber/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Checking the hotel booking functionality in the Adactin application",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-in-the-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cusername\u003e\" In The Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cpassword\u003e\" In The Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Key It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality;;1"
    },
    {
      "cells": [
        "abc",
        "123"
      ],
      "line": 12,
      "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality;;2"
    },
    {
      "cells": [
        "xyz",
        "456"
      ],
      "line": 13,
      "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality;;3"
    },
    {
      "cells": [
        "nopassword",
        "34567"
      ],
      "line": 14,
      "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality;;4"
    },
    {
      "cells": [
        "Naveenkumar19",
        "naveen19@adactin"
      ],
      "line": 15,
      "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2884200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"abc\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"123\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Key It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 4800092800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 354602100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 176984200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Key_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 661511200,
  "status": "passed"
});
formatter.after({
  "duration": 409400,
  "status": "passed"
});
formatter.before({
  "duration": 217200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"xyz\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"456\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Key It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 472748700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 167201500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 175403500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Key_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1043191300,
  "status": "passed"
});
formatter.after({
  "duration": 170400,
  "status": "passed"
});
formatter.before({
  "duration": 212400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"nopassword\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"34567\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Key It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 671453500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nopassword",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 198864300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34567",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 139548300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Key_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 917817100,
  "status": "passed"
});
formatter.after({
  "duration": 187800,
  "status": "passed"
});
formatter.before({
  "duration": 206400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;login-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"Naveenkumar19\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"naveen19@adactin\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Key It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 719620600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Naveenkumar19",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 239766000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveen19@adactin",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 158059000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Key_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2211005800,
  "status": "passed"
});
formatter.after({
  "duration": 109700,
  "status": "passed"
});
formatter.before({
  "duration": 213000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search hotel functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;search-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user Select The Location In The Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user Select The Hotels In The Hotels Field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select The Room In The Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select The Number Of Rooms In The Number Of Rooms Field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Enter The Check In Date In The Check In Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Enter The Check Out Date In The Check Out Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Select The Adults Per Room In The Adults Per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Select The Children Per Room In The Children Per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Click The Search Key It Navigate To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Location_In_The_Location_Field()"
});
formatter.result({
  "duration": 245344100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotels_In_The_Hotels_Field()"
});
formatter.result({
  "duration": 252151600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Room_In_The_Room_Field()"
});
formatter.result({
  "duration": 377199900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Number_Of_Rooms_In_The_Number_Of_Rooms_Field()"
});
formatter.result({
  "duration": 403805100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Check_In_Date_In_The_Check_In_Date_Field()"
});
formatter.result({
  "duration": 325388400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Check_Out_Date_In_The_Check_Out_Date_Field()"
});
formatter.result({
  "duration": 308483600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Adults_Per_Room_In_The_Adults_Per_Room_Field()"
});
formatter.result({
  "duration": 197669800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Children_Per_Room_In_The_Children_Per_Room_Field()"
});
formatter.result({
  "duration": 297128700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Search_Key_It_Navigate_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 2472995100,
  "status": "passed"
});
formatter.after({
  "duration": 179700,
  "status": "passed"
});
formatter.before({
  "duration": 208000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Select hotel functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;select-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user Select Hotel In The Select Hotel Field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user Click The Continue Key It Navigate To The Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_Hotel_In_The_Select_Hotel_Field()"
});
formatter.result({
  "duration": 174512900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Continue_Key_It_Navigate_To_The_Book_Hotel_Page()"
});
formatter.result({
  "duration": 1764707600,
  "status": "passed"
});
formatter.after({
  "duration": 181000,
  "status": "passed"
});
formatter.before({
  "duration": 136800,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Book hotel functionality",
  "description": "",
  "id": "checking-the-hotel-booking-functionality-in-the-adactin-application;book-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "user Enter The First Name In The First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user Enter The Last Name In The Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Enter The Billing Address In The Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Enter The Credit Card Number In The Credit Card Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Select The Credit Card Type In The Credit Card Type Field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Select Expiry Month And Year In The Expiry Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Enter The Cvv Number In The Cvv Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Click The Book Now Key And Hotel Is Booked",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Click The Logout Key And It Navigate To First Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_First_Name_In_The_First_Name_Field()"
});
formatter.result({
  "duration": 217438200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Last_Name_In_The_Last_Name_Field()"
});
formatter.result({
  "duration": 158231000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Billing_Address_In_The_Billing_Address_Field()"
});
formatter.result({
  "duration": 175702800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Credit_Card_Number_In_The_Credit_Card_Number_Field()"
});
formatter.result({
  "duration": 192398900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Credit_Card_Type_In_The_Credit_Card_Type_Field()"
});
formatter.result({
  "duration": 190863600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_Expiry_Month_And_Year_In_The_Expiry_Date_Field()"
});
formatter.result({
  "duration": 385438700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Cvv_Number_In_The_Cvv_Number_Field()"
});
formatter.result({
  "duration": 160128100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Book_Now_Key_And_Hotel_Is_Booked()"
});
formatter.result({
  "duration": 132868400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Logout_Key_And_It_Navigate_To_First_Page()"
});
formatter.result({
  "duration": 11173925700,
  "status": "passed"
});
formatter.after({
  "duration": 189800,
  "status": "passed"
});
});