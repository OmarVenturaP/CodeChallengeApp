class StudentService {
    static getAllStudents() {
        const students = Reader.readJSONfile('data.json');
        return students;
    }
}