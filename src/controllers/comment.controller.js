import mongoose from "mongoose"
import {Comment} from "../models/comment.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.params
    const {page = 1, limit = 10} = req.query

})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video
})

```
/**
 * Updates a comment asynchronously.
 * @param {Object} req - The request object containing the comment update data.
 * @param {Object} res - The response object to send the result.
 * @returns {Promise<void>} A promise that resolves when the comment is updated.
 */
```
const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
})

```
/**
 * Asynchronously deletes a comment.
 * @param {Object} req - The request object containing comment deletion details.
 * @param {Object} res - The response object used to send the result back to the client.
 * @returns {Promise<void>} A promise that resolves when the comment is successfully deleted.
 */
```
const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
})

export {
    getVideoComments, 
    addComment, 
    updateComment,
     deleteComment
    }