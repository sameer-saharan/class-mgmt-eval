const Class = require('../models/Class');
const Student = require('../models/Student');

exports.enrollStudent = async (req, res) => {
    try {
        const { classId } = req.params;
        const { studentId } = req.body;

        const classDoc = await Class.findById(classId);
        if (!classDoc) return res.status(404).json({ error: 'Class not found' });

        const studentDoc = await Student.findById(studentId);
        if (!studentDoc) return res.status(404).json({ error: 'Student not found' });

        classDoc.students.push(studentId);
        await classDoc.save();

        res.status(200).json({ message: 'Student enrolled successfully', classDoc });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};