const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const validationStudent = (req, res, next) => {
    const { name, course } = req.body;

    if (!name && !course) {
        return res.status(400).json({ message: "Name and course are required" });
    }

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    if (!course) {
        return res.status(400).json({ message: "Course is required" });
    }

    next();
};

module.exports = { logger, validationStudent };
