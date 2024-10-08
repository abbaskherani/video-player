import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';
import fs from 'fs'

/**
 * Uploads a file to Cloudinary
 * @param {string} localFilePath - The local path of the file to be uploaded
 * @returns {Object|null} The response from Cloudinary containing upload details, or null if upload fails
 */
(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    })


    /**
     * Uploads a file to Cloudinary
     * @param {string} localFilePath - The path to the local file to be uploaded
     * @returns {Object|null} The Cloudinary upload response object if successful, or null if upload fails
     */
    const  uploadOnCloudinary = async (localFilePath) =>{
        try {
            if(!localFilePath) return null
            //upload the file on cloudinary
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type : 'auto'
            })
            //file has been uploaded successfully
            console.log('file uploaded succesfully on cloudinary', response.url)
            return response;

        } catch (error) {
            fs.unlinkSync(localFilePath) //remove the locally saved temporary files as the upload operation got failed
            return null;
        }
    }
})