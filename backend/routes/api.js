const express = require("express");
const dotenv = require("dotenv");
const cloudinary = require("../config/cloudinary");
const { DownloadController } = require("../controller/uploadController");
const upload = require("../middleware/upload");
const fileModel = require("../model/fileModel");

dotenv.config();
const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
console.log("File object from middleware:", req.file);
    try {
        const fileObject = {
            path: req.file.path,              
            name: req.file.originalname,
        };

        const file = await fileModel.create(fileObject);

        res.render("index", { fileUrl: file.path });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get("/files/:fileId", DownloadController);

module.exports = router;