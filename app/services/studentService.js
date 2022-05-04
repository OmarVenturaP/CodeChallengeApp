class StudentService {
    static getAllStudents(students) {
        return students;
    }
    static getEmailOfStudentWithCertification(students, certification) {
        const studentsWithCertification = students.filter((student) => student.haveCertification == certification);
        const emailsOfStudentsWithCertification = studentsWithCertification.map((student) => student.email);    
        return emailsOfStudentsWithCertification;
    }

}
module.exports = StudentService;