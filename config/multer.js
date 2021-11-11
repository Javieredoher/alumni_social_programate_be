const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/upload/')
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.${file.mimetype.split('/')[1]}`)
  }
})

const upload = multer({ 
  storage,
  limits: {fileSize: 200000},
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const minetype = filetypes.test(file.mimetype.split('/')[1])
    if(minetype){
      return cb(null, true);
    }
    cb("Error: Archivo debe ser una imagen valida");
  }
})

module.exports = upload