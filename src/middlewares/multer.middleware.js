import multer from "multer";

const storage = multer.diskStorage({
    /**
     * Determines the destination directory for uploaded files
     * @param {Object} req - The Express request object
     * @param {Object} file - The uploaded file object
     * @param {Function} cb - Callback function to be called with (error, destination path)
     * @returns {void} No return value, uses callback to pass destination path
     */
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    ```
    /**
     * Generates a filename for the uploaded file
     * @param {Object} req - The request object
     * @param {Object} file - The file object containing information about the uploaded file
     * @param {Function} cb - Callback function to be called with the generated filename
     * @returns {void} Does not return a value, but calls the callback with the filename
     */
    ```    filename: function (req, file, cb) {
      cb(null, file.originalname) //better not to use this, qki ek hi name se kitne hi saare files hoge to over write ho jayege isly thoda sa changes, file naming me zaruri hai, uske liye alag method available hai
    }
  })
  export const upload = multer(
      { 
          storage: storage 
        }
    )