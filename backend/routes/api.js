const express = require("express");
const { DownloadController } = require("../controller/uploadController");
const storage = require("../middleware/upload");
const dotenv = require("dotenv");
const fileModel = require("../model/fileModel");

dotenv.config();
const router = express.Router();

router.post("/upload", storage.single("file"), async (req, res) => {
    try {
        const backendUrl = process.env.BACKEND_URL;

        const fileObject = {
            path: req.file.path,
            name: req.file.originalname,
        };

        const file = await fileModel.create(fileObject);

        res.render("index", { fileUrl: `${backendUrl}/files/${file._id}` });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get("/files/:fileId", DownloadController);

module.exports = router;