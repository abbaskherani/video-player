import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

/**
 * Creates a new tweet asynchronously.
 * @param {Object} req - The request object containing tweet data.
 * @param {Object} res - The response object to send the result.
 * @returns {Promise<void>} A promise that resolves when the tweet is created.
 */
const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
})

/**
 * Asynchronously retrieves tweets for a user.
 /**
  * Asynchronously deletes a tweet.
  * @param {Object} req - The request object containing tweet deletion details.
  * @param {Object} res - The response object used to send the result back to the client.
  * @returns {Promise<void>} A promise that resolves when the tweet is successfully deleted.
  */
 * @param {Object} req - The request object containing user information.
 * @param {Object} res - The response object used to send the retrieved tweets.
 * @returns {Promise<void>} A promise that resolves when the tweets are retrieved and sent.
 */
const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets
})

/**
 * Updates a tweet asynchronously
 * @param {Object} req - The request object containing the tweet update information
 * @param {Object} res - The response object to send the result back to the client
 * @returns {Promise<void>} A promise that resolves when the tweet is updated
 */
const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}