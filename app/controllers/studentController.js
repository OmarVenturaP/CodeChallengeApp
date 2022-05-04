const Reader = require('../utils/reader');
const StudentService = require('../services/studentService');

class StudentController {
    static getAllStudents() {
        return Reader.readJSONfile('data.json');
    }
    
    static getEmailOfStudentWithCertification(certification) {
        const students = StudentController.getAllStudents()
        const studentsWithCertification = StudentService.getEmailOfStudentWithCertification(students, certification);
        return studentsWithCertification;
    }
}

module.exports = StudentController;