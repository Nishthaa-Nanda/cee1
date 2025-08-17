const fileModel = require("../model/fileModel.js");
const path = require("path");
const dotenv = require("dotenv");

const UploadController = async (req, res) => {
    try {
        dotenv.config();
        const backendUrl = process.env.BACKEND_URL;

        const fileObject = {
            path: req.file.path,
            name: req.file.originalname,
        };
        const file = await fileModel.create(fileObject);
        console.log(file);
        return res.status(200).json({ path: `${backendUrl}/files/${file._id}` });


    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = {
    UploadController
};