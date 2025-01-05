const Class = require('../models/Class');

exports.createClass = async (req, res) => {
    try {
        const newClass = await Class.create(req.body);
        res.status(201).json(newClass);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getClasses = async (req, res) => {
    try {
        const classes = await Class.find().populate('students');
        res.status(200).json(classes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};