const express = require('express');
const Student = require('../model/student');
const getStudents = require('../controller/studentController');
const createStudent = require('../controller/studentController');
const getStudentById = require('../controller/studentController');
const deleteStudent = require('../controller/studentController');

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.get('/:id', getStudentById);
router.delete('/:id', deleteStudent);

module.exports = router;



