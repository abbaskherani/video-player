import mongoose, {isValidObjectId} from "mongoose"
import {Video} from "../models/video.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


/**
 * Retrieves all videos based on specified query parameters.
 * @param {Object} req - Express request object containing query parameters.
 * @param {Object} res - Express response object.
 * @param {number} [req.query.page=1] - The page number for pagination.
 * @param {number} [req.query.limit=10] - The number of videos per page.
 * @param {string} [req.query.query] - Search query to filter videos.
 * @param {string} [req.query.sortBy] - Field to sort the videos by.
 * @param {string} [req.query.sortType] - Sort order ('asc' or 'desc').
 * @param {string} [req.query.userId] - User ID to filter videos by user.
 * @returns {Promise<void>} Sends the response with the retrieved videos.
 */
const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all videos based on query, sort, pagination
})

/**
 * Publishes a video asynchronously.
 * @param {Object} req - The request object containing the video details.
 * @param {string} req.body.title - The title of the video.
 * @param {string} req.body.description - The description of the video.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} A promise that resolves when the video is published.
 */
const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description} = req.body
    // TODO: get video, upload to cloudinary, create video
})

```
/**
 * Asynchronously retrieves a video by its ID.
 * @param {Object} req - The request object containing the video ID in the params.
 * @param {Object} res - The response object to send the result back to the client.
 * @returns {Promise<void>} A promise that resolves when the video is retrieved and sent.
 */
```
const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: get video by id
})

/**
 * Updates video details asynchronously
 * @param {Object} req - Express request object containing the video ID in params and updated details in body
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Resolves when the video is updated successfully
 */
/**
 * Asynchronously deletes a video based on the provided video ID.
 * @param {Object} req - The request object containing the video ID in the params.
 * @param {Object} res - The response object to send the result back to the client.
 * @returns {Promise<void>} A promise that resolves when the video is deleted.
 /**
  * Toggles the publish status of a video asynchronously
  * @param {Object} req - Express request object
  * @param {Object} res - Express response object
  * @param {string} req.params.videoId - The ID of the video to toggle publish status
  * @returns {Promise<void>} A promise that resolves when the publish status is toggled
  */
 */
const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: update video details like title, description, thumbnail

})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: delete video
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})

export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}