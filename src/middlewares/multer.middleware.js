import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) //better not to use this, qki ek hi name se kitne hi saare files hoge to over write ho jayege isly thoda sa changes, file naming me zaruri hai, uske liye alag method available hai
    }
  })
  export const upload = multer(
      { 
          storage: storage 
        }
    )