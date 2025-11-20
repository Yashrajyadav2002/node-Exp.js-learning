const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'da1d1exbl',
    api_key: '621233168126682',
    api_secret: 'c1BXmyjzavDFA1rrdWoulDJsJqs'
});

module.exports = cloudinary;
