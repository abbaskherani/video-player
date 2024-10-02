import mongoose, {isValidObjectId} from "mongoose"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

/**
 * Toggles the like status of a video for the authenticated user.
 * @param {Object} req - The request object containing the video ID in params.
 * @param {Object} res - The response object to send the result.
 * @returns {Promise<void>} A promise that resolves when the like status is toggled.
 */
const toggleVideoLike = asyncHandler(async (req, res) => {
    const {videoId} = req.params
    //TODO: toggle like on video
})

/**
 * Toggles the like status of a comment asynchronously
 * @param {Object} req - The request object containing the comment ID in params
 * @param {Object} res - The response object to send the result
 * @returns {Promise<void>} A promise that resolves when the like status is toggled
 */
const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    //TODO: toggle like on comment

})

/**
 * Toggles the like status of a tweet for the authenticated user.
 * @param {Object} req - The request object containing the tweet ID in params.
 * @param {Object} res - The response object to send the result.
 * @returns {Promise<void>} A promise that resolves when the like status is toggled.
 */
const toggleTweetLike = asyncHandler(async (req, res) => {
    const {tweetId} = req.params
    //TODO: toggle like on tweet
}
)

/**
 * Retrieves all liked videos for the authenticated user.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} A promise that resolves when the liked videos are retrieved and sent as a response.
 */
const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}