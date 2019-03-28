import { Meteor } from 'meteor/meteor';
import '../both/convert_method_to_api'
Meteor.startup(() => {
  // code to run on server at startup
  import '../both/config'
  import '../both/method'
});
