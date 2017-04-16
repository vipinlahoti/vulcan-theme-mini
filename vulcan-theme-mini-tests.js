// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by vulcan-theme-mini.js.
import { name as packageName } from "meteor/vipinlahoti:vulcan-theme-mini";

// Write your tests here!
// Here is an example.
Tinytest.add('vulcan-theme-mini - example', function (test) {
  test.equal(packageName, "vulcan-theme-mini");
});
