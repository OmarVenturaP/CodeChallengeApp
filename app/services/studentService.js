class StudentService {
    static getAllStudents(students) {
        return students;
    }

    static getEmailOfStudentWithCertification(students, certification) {
        const studentsWithCertification = students.filter((student) => student.haveCertification == certification);
        const emailsOfStudentsWithCertification = studentsWithCertification.map((student) => student.email);    
        return emailsOfStudentsWithCertification;
    }

    static validationOfCredits(students, credits) {
        if (credits >= 500) {
            return students.filter((student) => student.credits >= credits);
        }else {
            return [`Lo sentimos, no podemos mostrar los datos de estudiantes con creditos menores a 500 y usted ingresó ${credits}`];
        }
    }

}
module.exports = StudentService;