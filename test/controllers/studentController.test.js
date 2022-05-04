const StudentController = require('../../app/controllers/studentController');

describe('Prueba para validar si se reciben los datos de los estudiantes', () => {
    test('1.- Se reciben datos de todos los estudiantes', () => {
        const data = StudentController.getAllStudents();
        expect(data).toBeDefined();
    });
    test('2.- Se reciben datos de los estudiantes con certificacion', () => {
        const studentEmail = StudentController.getEmailOfStudentWithCertification(true);
        expect(studentEmail[0]).toBe("Todd@visualpartnership.xyz");
    })
})