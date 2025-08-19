const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads",
    resource_type: "auto",
  },
});

const upload = multer({ storage });

upload._handleFile = ((handleFile) => (req, file, cb) => {
  console.log("file handled for:", file.originalname);
  return handleFile.call(upload, req, file, cb);
})(upload._handleFile);

module.exports = upload;
