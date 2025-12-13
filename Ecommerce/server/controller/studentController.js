const Student = require('../model/student');

module.exports = getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        if (students.length === 0) {
            return res.status(404).json({ error: 'No students found' });
        }
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch students', details: error.message });
    }
};

module.exports = createStudent = async (req, res) => {
    try {
        const { id, name, age, class: studentClass, roll_no } = req.body;
        const student = new Student({ id, name, age, class: studentClass, roll_no });
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create student', details: error.message });
    }
};

module.exports = getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findOne({ id: Number(id) });
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch student', details: error.message });
    }
};

module.exports = deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findOneAndDelete({ id: Number(id) });
        if (!deletedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully', student: deletedStudent });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete student', details: error.message });
    }
};