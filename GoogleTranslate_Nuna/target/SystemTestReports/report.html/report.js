$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Translate.feature");
formatter.feature({
  "name": "Google Translate French to English feature",
  "description": "  In order to understand other languages I do not speak\n  As any Google user\n  I want to translate my text",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Translate some basic French phrases",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the Google Translate page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \u003cFrench\u003e in Google Translate",
  "keyword": "When "
});
formatter.step({
  "name": "I check for \u003cEnglish\u003e in English",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "French",
        "English"
      ]
    },
    {
      "cells": [
        "\"Bonjour\"",
        "\"Hello\""
      ]
    },
    {
      "cells": [
        "\"Au revoir\"",
        "\"Goodbye\""
      ]
    },
    {
      "cells": [
        "\"Je ne comprends pas\"",
        "\"I do not understand\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Translate some basic French phrases",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the Google Translate page",
  "keyword": "Given "
});
formatter.match({
  "location": "googletranslate.steps.Steps.i_am_on_the_google_translate_page() in file:/C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Bonjour\" in Google Translate",
  "keyword": "When "
});
formatter.match({
  "location": "googletranslate.steps.Steps.i_enter_french_in_google_translate(String) in file:/C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/target/test-classes/"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#source\"}\n  (Session info: chrome\u003d106.0.5249.119)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ASCX\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 106.0.5249.61 (511755355844..., userDataDir: C:\\Users\\ascem\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60450}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4f91fc7470a58162390450d517b8ed22\n*** Element info: {Using\u003did, value\u003dsource}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat googletranslate.steps.Steps.i_enter_french_in_google_translate(Steps.java:38)\r\n\tat ✽.I enter \"Bonjour\" in Google Translate(///C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/src/main/resources/Translate.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I check for \"Hello\" in English",
  "keyword": "Then "
});
formatter.match({
  "location": "googletranslate.steps.Steps.i_check_for_the_translation_in_english(String) in file:/C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Translate some basic French phrases",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the Google Translate page",
  "keyword": "Given "
});
formatter.match({
  "location": "googletranslate.steps.Steps.i_am_on_the_google_translate_page() in file:/C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Au revoir\" in Google Translate",
  "keyword": "When "
});
formatter.match({
  "location": "googletranslate.steps.Steps.i_enter_french_in_google_translate(String) in file:/C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/target/test-classes/"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#source\"}\n  (Session info: chrome\u003d106.0.5249.119)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ASCX\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 106.0.5249.61 (511755355844..., userDataDir: C:\\Users\\ascem\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60481}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c4447ab6afc37d8e3c5f376469ab6e51\n*** Element info: {Using\u003did, value\u003dsource}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat googletranslate.steps.Steps.i_enter_french_in_google_translate(Steps.java:38)\r\n\tat ✽.I enter \"Au revoir\" in Google Translate(///C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/src/main/resources/Translate.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I check for \"Goodbye\" in English",
  "keyword": "Then "
});
formatter.match({
  "location": "googletranslate.steps.Steps.i_check_for_the_translation_in_english(String) in file:/C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Translate some basic French phrases",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the Google Translate page",
  "keyword": "Given "
});
formatter.match({
  "location": "googletranslate.steps.Steps.i_am_on_the_google_translate_page() in file:/C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Je ne comprends pas\" in Google Translate",
  "keyword": "When "
});
formatter.match({
  "location": "googletranslate.steps.Steps.i_enter_french_in_google_translate(String) in file:/C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/target/test-classes/"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#source\"}\n  (Session info: chrome\u003d106.0.5249.119)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ASCX\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 106.0.5249.61 (511755355844..., userDataDir: C:\\Users\\ascem\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60528}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f73c4784d72d6d266034e61d79b5d6a3\n*** Element info: {Using\u003did, value\u003dsource}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat googletranslate.steps.Steps.i_enter_french_in_google_translate(Steps.java:38)\r\n\tat ✽.I enter \"Je ne comprends pas\" in Google Translate(///C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/src/main/resources/Translate.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I check for \"I do not understand\" in English",
  "keyword": "Then "
});
formatter.match({
  "location": "googletranslate.steps.Steps.i_check_for_the_translation_in_english(String) in file:/C:/Users/ascem/eclipse-workspace/GoogleTranslate_Nuna/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});