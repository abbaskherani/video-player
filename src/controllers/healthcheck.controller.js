import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


/**
 * Handles the healthcheck request asynchronously
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Promise<void>} A promise that resolves when the healthcheck response is sent
 */
const healthcheck = asyncHandler(async (req, res) => {
    //TODO: build a healthcheck response that simply returns the OK status as json with a message
})

export {
    healthcheck
    }
    