import { Meteor } from 'meteor/meteor';
import '../both/convertToResAPI'


Meteor.startup(() => {

  import '../both/method'
  import '../both/configureJsonRoute'

});
