const Reader = require("../utils/reader");
const StudentService = require("../services/studentService");

class StudentController {
    static getAllStudents() {
        return Reader.readJSONfile("data.json");
    }
    
    static getEmailOfStudentWithCertification() {
        const students = StudentController.getAllStudents();
        const studentsWithCertification = StudentService.getEmailOfStudentWithCertification(students);
        return studentsWithCertification;
    }

    static getRecibeNumberOfCredits(credits){
        const students = StudentController.getAllStudents();
        return StudentService.validationOfCredits(students, credits);
    }
    
}

module.exports = StudentController;