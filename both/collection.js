import { Mongo } from 'meteor/mongo';
const Student = new Mongo.Collection('students');
export default Student