$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "LoginPage",
  "description": "",
  "id": "application-login;loginpage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page \u003cusername\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "application-login;loginpage;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "application-login;loginpage;;1"
    },
    {
      "cells": [
        "108639101",
        "1234"
      ],
      "line": 12,
      "id": "application-login;loginpage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4653850158,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "LoginPage",
  "description": "",
  "id": "application-login;loginpage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "108639101 and 1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 108639101",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11896735058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 0
    },
    {
      "val": "1234",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3756575365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "108639101",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13861142922,
  "status": "passed"
});
formatter.after({
  "duration": 2331052229,
  "status": "passed"
});
formatter.uri("Smoke.feature");
formatter.feature({
  "line": 1,
  "name": "User Login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page \u003cusername\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "user-login;loginpage;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "user-login;loginpage;;1"
    },
    {
      "cells": [
        "314237491",
        "youc@nw1n"
      ],
      "line": 12,
      "id": "user-login;loginpage;;2"
    },
    {
      "cells": [
        "314852591",
        "asiaaktar"
      ],
      "line": 13,
      "id": "user-login;loginpage;;3"
    },
    {
      "cells": [
        "312579891",
        "FXmpqm"
      ],
      "line": 14,
      "id": "user-login;loginpage;;4"
    },
    {
      "cells": [
        "205146001",
        "baba69"
      ],
      "line": 15,
      "id": "user-login;loginpage;;5"
    },
    {
      "cells": [
        "312709091",
        "JjQtYS"
      ],
      "line": 16,
      "id": "user-login;loginpage;;6"
    },
    {
      "cells": [
        "313979091",
        "acSjac"
      ],
      "line": 17,
      "id": "user-login;loginpage;;7"
    },
    {
      "cells": [
        "314573291",
        "1985"
      ],
      "line": 18,
      "id": "user-login;loginpage;;8"
    },
    {
      "cells": [
        "314304891",
        "PQU5RF"
      ],
      "line": 19,
      "id": "user-login;loginpage;;9"
    },
    {
      "cells": [
        "312837491",
        "wGn7C9"
      ],
      "line": 20,
      "id": "user-login;loginpage;;10"
    },
    {
      "cells": [
        "310141491",
        "ttR8Jy"
      ],
      "line": 21,
      "id": "user-login;loginpage;;11"
    },
    {
      "cells": [
        "314195991",
        "9vnaTy"
      ],
      "line": 22,
      "id": "user-login;loginpage;;12"
    },
    {
      "cells": [
        "301941991",
        "sonu3264"
      ],
      "line": 23,
      "id": "user-login;loginpage;;13"
    },
    {
      "cells": [
        "314573491",
        "7982701596"
      ],
      "line": 24,
      "id": "user-login;loginpage;;14"
    },
    {
      "cells": [
        "309938991",
        "pratik143"
      ],
      "line": 25,
      "id": "user-login;loginpage;;15"
    },
    {
      "cells": [
        "314195391",
        "37yud5"
      ],
      "line": 26,
      "id": "user-login;loginpage;;16"
    },
    {
      "cells": [
        "313691891",
        "44f85294480c"
      ],
      "line": 27,
      "id": "user-login;loginpage;;17"
    },
    {
      "cells": [
        "313307391",
        "VuNqZj"
      ],
      "line": 28,
      "id": "user-login;loginpage;;18"
    },
    {
      "cells": [
        "305652791",
        "mTVWRq"
      ],
      "line": 29,
      "id": "user-login;loginpage;;19"
    },
    {
      "cells": [
        "314893991",
        "W67UN9"
      ],
      "line": 30,
      "id": "user-login;loginpage;;20"
    },
    {
      "cells": [
        "314224491",
        "UXtRBx"
      ],
      "line": 31,
      "id": "user-login;loginpage;;21"
    },
    {
      "cells": [
        "310586191",
        "v3BRT5"
      ],
      "line": 32,
      "id": "user-login;loginpage;;22"
    },
    {
      "cells": [
        "304000191",
        "7YbrPa"
      ],
      "line": 33,
      "id": "user-login;loginpage;;23"
    },
    {
      "cells": [
        "200357401",
        "unicity1234"
      ],
      "line": 34,
      "id": "user-login;loginpage;;24"
    },
    {
      "cells": [
        "311846191",
        "7666"
      ],
      "line": 35,
      "id": "user-login;loginpage;;25"
    },
    {
      "cells": [
        "314504491",
        "xHAQQY"
      ],
      "line": 36,
      "id": "user-login;loginpage;;26"
    },
    {
      "cells": [
        "313909791",
        "Qn8KyY"
      ],
      "line": 37,
      "id": "user-login;loginpage;;27"
    },
    {
      "cells": [
        "314573191",
        "UrT8nK"
      ],
      "line": 38,
      "id": "user-login;loginpage;;28"
    },
    {
      "cells": [
        "312289691",
        "GC7Jcy"
      ],
      "line": 39,
      "id": "user-login;loginpage;;29"
    },
    {
      "cells": [
        "312930091",
        "C7P59f"
      ],
      "line": 40,
      "id": "user-login;loginpage;;30"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3817406991,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314237491 and youc@nw1n",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314237491",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12032513308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314237491",
      "offset": 0
    },
    {
      "val": "youc@nw1n",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3674479509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314237491",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13918847077,
  "status": "passed"
});
formatter.after({
  "duration": 2345276882,
  "status": "passed"
});
formatter.before({
  "duration": 4392111268,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314852591 and asiaaktar",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314852591",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11741376206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314852591",
      "offset": 0
    },
    {
      "val": "asiaaktar",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3723649044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314852591",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13963576715,
  "status": "passed"
});
formatter.after({
  "duration": 2344928722,
  "status": "passed"
});
formatter.before({
  "duration": 3980584943,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "312579891 and FXmpqm",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 312579891",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12246173650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312579891",
      "offset": 0
    },
    {
      "val": "FXmpqm",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3707221937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312579891",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13902058156,
  "status": "passed"
});
formatter.after({
  "duration": 2343681147,
  "status": "passed"
});
formatter.before({
  "duration": 3845283281,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "205146001 and baba69",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 205146001",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12215182264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "205146001",
      "offset": 0
    },
    {
      "val": "baba69",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3743888421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "205146001",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13856390278,
  "status": "passed"
});
formatter.after({
  "duration": 2378777923,
  "status": "passed"
});
formatter.before({
  "duration": 3733340786,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "312709091 and JjQtYS",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 312709091",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12263723318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312709091",
      "offset": 0
    },
    {
      "val": "JjQtYS",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3709480285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312709091",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13974225898,
  "status": "passed"
});
formatter.after({
  "duration": 2329791002,
  "status": "passed"
});
formatter.before({
  "duration": 4412822539,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "313979091 and acSjac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 313979091",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11693731579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "313979091",
      "offset": 0
    },
    {
      "val": "acSjac",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3705561349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "313979091",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13796000680,
  "status": "passed"
});
formatter.after({
  "duration": 2373773119,
  "status": "passed"
});
formatter.before({
  "duration": 4127589229,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314573291 and 1985",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314573291",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12538698273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314573291",
      "offset": 0
    },
    {
      "val": "1985",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3759894835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314573291",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13772891966,
  "status": "passed"
});
formatter.after({
  "duration": 2340792611,
  "status": "passed"
});
formatter.before({
  "duration": 3968692027,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314304891 and PQU5RF",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314304891",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12075536277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314304891",
      "offset": 0
    },
    {
      "val": "PQU5RF",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3683253063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314304891",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13785122803,
  "status": "passed"
});
formatter.after({
  "duration": 2342620453,
  "status": "passed"
});
formatter.before({
  "duration": 4107675825,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "312837491 and wGn7C9",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 312837491",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12154233732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312837491",
      "offset": 0
    },
    {
      "val": "wGn7C9",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3732984945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312837491",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13775836396,
  "status": "passed"
});
formatter.after({
  "duration": 2343970000,
  "status": "passed"
});
formatter.before({
  "duration": 3961645620,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "310141491 and ttR8Jy",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 310141491",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11819114939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "310141491",
      "offset": 0
    },
    {
      "val": "ttR8Jy",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3778415171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "310141491",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13765568653,
  "status": "passed"
});
formatter.after({
  "duration": 2333016178,
  "status": "passed"
});
formatter.before({
  "duration": 3859507934,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314195991 and 9vnaTy",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314195991",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12106077958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314195991",
      "offset": 0
    },
    {
      "val": "9vnaTy",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3745890770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314195991",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13738436897,
  "status": "passed"
});
formatter.after({
  "duration": 36532512,
  "status": "passed"
});
formatter.before({
  "duration": 3993813755,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "301941991 and sonu3264",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 301941991",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11965317091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "301941991",
      "offset": 0
    },
    {
      "val": "sonu3264",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3691690404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "301941991",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13752850136,
  "status": "passed"
});
formatter.after({
  "duration": 2383410247,
  "status": "passed"
});
formatter.before({
  "duration": 3748110719,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314573491 and 7982701596",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314573491",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11622600211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314573491",
      "offset": 0
    },
    {
      "val": "7982701596",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3866334179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314573491",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13734791027,
  "status": "passed"
});
formatter.after({
  "duration": 2351412780,
  "status": "passed"
});
formatter.before({
  "duration": 3468008506,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "309938991 and pratik143",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 309938991",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12264015586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "309938991",
      "offset": 0
    },
    {
      "val": "pratik143",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3707520177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "309938991",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13800858283,
  "status": "passed"
});
formatter.after({
  "duration": 2364594657,
  "status": "passed"
});
formatter.before({
  "duration": 3497046184,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314195391 and 37yud5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314195391",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12123930559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314195391",
      "offset": 0
    },
    {
      "val": "37yud5",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3651011116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314195391",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13784793843,
  "status": "passed"
});
formatter.after({
  "duration": 2375464427,
  "status": "passed"
});
formatter.before({
  "duration": 3631820913,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "313691891 and 44f85294480c",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 313691891",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11756349232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "313691891",
      "offset": 0
    },
    {
      "val": "44f85294480c",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3755150724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "313691891",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13859294173,
  "status": "passed"
});
formatter.after({
  "duration": 2385596489,
  "status": "passed"
});
formatter.before({
  "duration": 3811643572,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "313307391 and VuNqZj",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 313307391",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12293203450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "313307391",
      "offset": 0
    },
    {
      "val": "VuNqZj",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3800595456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "313307391",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13865300792,
  "status": "passed"
});
formatter.after({
  "duration": 2333592604,
  "status": "passed"
});
formatter.before({
  "duration": 3814487735,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "305652791 and mTVWRq",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 305652791",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11852490114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "305652791",
      "offset": 0
    },
    {
      "val": "mTVWRq",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3630778139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "305652791",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13776453782,
  "status": "passed"
});
formatter.after({
  "duration": 2358390066,
  "status": "passed"
});
formatter.before({
  "duration": 3828854467,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314893991 and W67UN9",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314893991",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11885792329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314893991",
      "offset": 0
    },
    {
      "val": "W67UN9",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3712963169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314893991",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13760877449,
  "status": "passed"
});
formatter.after({
  "duration": 2355462703,
  "status": "passed"
});
formatter.before({
  "duration": 3778571331,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314224491 and UXtRBx",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314224491",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12029018051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314224491",
      "offset": 0
    },
    {
      "val": "UXtRBx",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3793141157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314224491",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13724257898,
  "status": "passed"
});
formatter.after({
  "duration": 42723450,
  "status": "passed"
});
formatter.before({
  "duration": 3657984988,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "310586191 and v3BRT5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 310586191",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11980993690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "310586191",
      "offset": 0
    },
    {
      "val": "v3BRT5",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3677070231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "310586191",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13789227766,
  "status": "passed"
});
formatter.after({
  "duration": 2392742735,
  "status": "passed"
});
formatter.before({
  "duration": 3734612680,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "304000191 and 7YbrPa",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 304000191",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11730779930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "304000191",
      "offset": 0
    },
    {
      "val": "7YbrPa",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3857685639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "304000191",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13931793862,
  "status": "passed"
});
formatter.after({
  "duration": 2371358183,
  "status": "passed"
});
formatter.before({
  "duration": 4005613232,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "200357401 and unicity1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 200357401",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12184220317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200357401",
      "offset": 0
    },
    {
      "val": "unicity1234",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3836096714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200357401",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13919565158,
  "status": "passed"
});
formatter.after({
  "duration": 2383414087,
  "status": "passed"
});
formatter.before({
  "duration": 3827352173,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "311846191 and 7666",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 311846191",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12136951584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "311846191",
      "offset": 0
    },
    {
      "val": "7666",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3823617129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "311846191",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13839490849,
  "status": "passed"
});
formatter.after({
  "duration": 2353469741,
  "status": "passed"
});
formatter.before({
  "duration": 3830055535,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314504491 and xHAQQY",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314504491",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11916681316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314504491",
      "offset": 0
    },
    {
      "val": "xHAQQY",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3676021483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314504491",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13767068388,
  "status": "passed"
});
formatter.after({
  "duration": 2382956699,
  "status": "passed"
});
formatter.before({
  "duration": 3505856432,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "313909791 and Qn8KyY",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 313909791",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 12132497180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "313909791",
      "offset": 0
    },
    {
      "val": "Qn8KyY",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3684478877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "313909791",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13827405933,
  "status": "passed"
});
formatter.after({
  "duration": 2361681802,
  "status": "passed"
});
formatter.before({
  "duration": 3748274985,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "314573191 and UrT8nK",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 314573191",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11998957226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314573191",
      "offset": 0
    },
    {
      "val": "UrT8nK",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3772457620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "314573191",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13953335000,
  "status": "passed"
});
formatter.after({
  "duration": 2382588913,
  "status": "passed"
});
formatter.before({
  "duration": 3752545922,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "312289691 and GC7Jcy",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 312289691",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11883620168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312289691",
      "offset": 0
    },
    {
      "val": "GC7Jcy",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3757492273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312289691",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13892588708,
  "status": "passed"
});
formatter.after({
  "duration": 2363964897,
  "status": "passed"
});
formatter.before({
  "duration": 3812845920,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "LoginPage",
  "description": "",
  "id": "user-login;loginpage;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to the \"http://shop.ng.unicityqa.com/master/#/home\" application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "312930091 and C7P59f",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Home Page 312930091",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://shop.ng.unicityqa.com/master/#/home",
      "offset": 17
    }
  ],
  "location": "BrowserInitiate.navigate_to_the_application(String)"
});
formatter.result({
  "duration": 11716464398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312930091",
      "offset": 0
    },
    {
      "val": "C7P59f",
      "offset": 14
    }
  ],
  "location": "Login.and(String,String)"
});
formatter.result({
  "duration": 3756688433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "312930091",
      "offset": 10
    }
  ],
  "location": "Home.homepage(String)"
});
formatter.result({
  "duration": 13884791795,
  "status": "passed"
});
formatter.after({
  "duration": 2340678264,
  "status": "passed"
});
});