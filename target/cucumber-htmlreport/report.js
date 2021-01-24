$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/basic/GoogleTest/FirstGoogleTestFF.feature");
formatter.feature({
  "name": "Validate  google",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "18.validate Google up and running",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "you have google website link",
  "keyword": "Given "
});
formatter.match({
  "location": "com.basic.GoogleTest.FirstGoogleTestSD.you_have_google_website_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you hit application url",
  "keyword": "When "
});
formatter.match({
  "location": "com.basic.GoogleTest.FirstGoogleTestSD.you_hit_application_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you check if its up and running",
  "keyword": "Then "
});
formatter.match({
  "location": "com.basic.GoogleTest.FirstGoogleTestSD.youcheckifitsupandrunning()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "28.validate Google up and running",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "you have google website link",
  "keyword": "Given "
});
formatter.match({
  "location": "com.basic.GoogleTest.FirstGoogleTestSD.you_have_google_website_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you hit application url",
  "keyword": "When "
});
formatter.match({
  "location": "com.basic.GoogleTest.FirstGoogleTestSD.you_hit_application_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you check if its up and running",
  "keyword": "Then "
});
formatter.match({
  "location": "com.basic.GoogleTest.FirstGoogleTestSD.youcheckifitsupandrunning()"
});
formatter.result({
  "status": "passed"
});
});