const fileModel = require('../model/fileModel');
const path = require("path");
const dontenv = require('dotenv');

// upload banadena bhaiyo iska code kardiyo, baad main leader ji check karlena 

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

module.ecportd ={
    downloadController
}