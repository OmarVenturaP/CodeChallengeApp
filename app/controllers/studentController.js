const Reader = require('../utils/reader');

class StudentController {
    static getAllStudents() {
        const students = Reader.readJSONfile('data.json');
        const allStudents = StudentService.getAllStudents(students);
        return allStudents;
    }
}

module.exports = StudentController;