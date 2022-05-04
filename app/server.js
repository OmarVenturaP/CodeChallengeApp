const StudentController = require("./controllers/StudentController");

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/", (req, res) => {
    res.json("API of Visual Thinking welcome");
});

app.get("/v1/students", (req, res) => {
    res.json(StudentController.getAllStudents());
});

app.get("/v1/students/certified", (req, res) => {
    res.json(StudentController.getEmailOfStudentWithCertification());
});

app.get("/v1/students/credits/:credits", (req, res) => {
    const credits = req.params.credits;
    res.json(StudentController.getRecibeNumberOfCredits(credits));
});

app.listen(port, () => {
    console.log(`Visual Thinking API listen on port ${port}!`);
});