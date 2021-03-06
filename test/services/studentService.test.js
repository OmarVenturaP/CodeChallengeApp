const StudentService = require("../../app/services/studentService");

describe("Prueba para validar si se reciben los datos de los estudiantes", () => {
    test("1.- Se reciben datos de todos los estudiantes", () => {
        const data = StudentService.getAllStudents();
        expect(data).toEqual();
    });
    test("2.- Se reciben datos de los estudiantes con certificacion", () => {
        const emailOfStudent = [{haveCertification: true, email: "Todd@visualpartnership.xyz"}];
        const studentEmail = StudentService.getEmailOfStudentWithCertification(emailOfStudent, true);
        expect(studentEmail[0]).toBe("Todd@visualpartnership.xyz");
    });
    test("3.- Se reciben datos de los estudiantes con creditos", () => {
        const credits = 300;
        const studentCredits = StudentService.validationOfCredits(credits);
        expect(studentCredits[0]).toEqual("Lo sentimos, no podemos mostrar los datos de estudiantes con creditos menores a 500 y usted ingresó undefined");
    });
});