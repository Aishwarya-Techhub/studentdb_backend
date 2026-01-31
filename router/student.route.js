/*const express = require('express');
const router = express.Router();

const studentController = require('../controller/student.controller');
const { logger, validationStudent } = require('../middleware/student.middleware');

router.get('/', logger, studentController.getStudents);

router.post('/add', logger, validationStudent, studentController.addStudent);

router.put('/update/:id', logger, controller.updateStudent);

router.delete('/delete/:id', logger, controller.deleteStudent);

module.exports = router;
*/
const express = require('express');
const router = express.Router();

const studentController = require('../controller/student.controller');
const { logger, validationStudent } = require('../middleware/student.middleware');

router.get('/', logger, studentController.getStudents);

router.post('/add', logger, validationStudent, studentController.addStudent);

router.put('/update/:id', logger, studentController.updateStudent);

router.delete('/delete/:id', logger, studentController.deleteStudent);

module.exports = router;
