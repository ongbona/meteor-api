
import Student from '/both/collection'
export class StudentM {
    static findStudent() {
      return Student.find().fetch()
    }
    insertStudent(doc) {
        return Student.insert(doc)
    }
    findStudent() {
        return Student.find().fetch()
    }
  }