const fileModel = require('../model/fileModel');
const path = require("path");
const dontenv = require('dotenv');

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


const downloadController = async(req, res) =>{
    try{
        const file = await fileModel.findById(req.params.fileId);

        if(!file){
            return res.status(404).json({message: "File not found"});
        }
        res.download(file.path, file.name);
    } catch(err) {
        return res.status(500).json({message: error.message});
    }
};

module.exports ={
    UploadController,
    downloadController
}