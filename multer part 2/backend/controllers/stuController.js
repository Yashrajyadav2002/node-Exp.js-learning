const StuModel = require("../models/stuModel");
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require("../cloudinary");
// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'product_images', // folder name Cloudinary account
        format: async (req, file) => 'jpg', // supports promises as well
        public_id: (req, file) => Date.now() + '-' + file.originalname,
    },
});

const upload = multer({ storage: storage }).array('images', 10); //image size





const stuSave = async (req, res) => {

    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send("Error uploading files: " + err.message);
        }

        const { name, email, subject } = req.body;
        const imageUrls = req.files.map(file => file.path);


        const student = await StuModel.create({
            name: name,
            email: email,
            subject: subject,
            images: imageUrls,
            defaultImage: imageUrls[0]
        })
    });

    res.send("Data save!");
}


const stuDisplay=async(req, res)=>{
    const student = await StuModel.find();
    res.send(student);
}

module.exports = {
    stuSave,
    stuDisplay
}