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
    test('3.- Se reciben solo los datos de los estudiantes con creditos iguales o mayores a 500', () => {
        const studentCredits = StudentController.getRecibeNumberOfCredits(500);
        expect(studentCredits[1]).toMatchObject({
            "credits": 677, 
            "email": "Sexton@visualpartnership.xyz", 
            "enrollments": [
                "Visual Thinking Avanzado"
            ], 
            "haveCertification": true, 
            "id": "6264d5d85cf81c496446b67f", 
            "name": "Lucinda", 
            "previousCourses": 6
        })
    })
    test('4.- Se reciben mensaje de error cuando los creditos solicitados son menores a 500', () => {
        const studentCredits = StudentController.getRecibeNumberOfCredits(300);
        expect(studentCredits).toEqual(["Lo sentimos, no podemos mostrar los datos de estudiantes con creditos menores a 500 y usted ingresó 300"])
    })
})