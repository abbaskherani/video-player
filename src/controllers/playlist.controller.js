import mongoose, {isValidObjectId} from "mongoose"
import {Playlist} from "../models/playlist.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


/**
 * Creates a new playlist
 * @param {Object} req - The request object
 * @param {Object} req.body - The request body
 * @param {string} req.body.name - The name of the playlist
 * @param {string} req.body.description - The description of the playlist
 * @param {Object} res - The response object
 * @returns {Promise<void>} Resolves when the playlist is created
 */
const createPlaylist = asyncHandler(async (req, res) => {
    const {name, description} = req.body

    //TODO: create playlist
})

```
/**
 * Asynchronously retrieves playlists for a specific user.
 * @param {Object} req - The request object containing the user ID in the params.
 * @param {Object} res - The response object to send the result back to the client.
 * @returns {Promise<void>} A promise that resolves when the playlists are retrieved and sent.
 */
```
const getUserPlaylists = asyncHandler(async (req, res) => {
    const {userId} = req.params
    //TODO: get user playlists
})

/**
 * Retrieves a playlist by its ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.params.playlistId - The ID of the playlist to retrieve
 * @returns {Promise<void>} Doesn't return a value, but sends the playlist data in the response
 */
const getPlaylistById = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    /**
     * Removes a video from a specified playlist asynchronously.
     * @param {Object} req - The request object containing playlist and video IDs.
     * @param {Object} res - The response object to send the result.
     * @param {string} req.params.playlistId - The ID of the playlist to remove the video from.
     * @param {string} req.params.videoId - The ID of the video to be removed from the playlist.
     * @returns {Promise<void>} A promise that resolves when the video is removed from the playlist.
     */
    //TODO: get playlist by id
})

/**
 * Asynchronously adds a video to a playlist
 * @param {Object} req - The request object containing playlist and video IDs
 * @param {Object} res - The response object
 * @param {string} req.params.playlistId - The ID of the playlist to add the video to
 * @param {string} req.params.videoId - The ID of the video to be added to the playlist
 * @returns {Promise<void>} A promise that resolves when the video is added to the playlist
 */
const addVideoToPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
})

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
    // TODO: remove video from playlist

})

```
/**
 * Deletes a playlist asynchronously
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 ```
 /**
  * Updates a playlist with new information.
  * @param {Object} req - The request object from Express.
  * @param {Object} req.params - The route parameters.
  * @param {string} req.params.playlistId - The ID of the playlist to update.
  * @param {Object} req.body - The request body containing update data.
  * @param {string} req.body.name - The new name for the playlist.
  * @param {string} req.body.description - The new description for the playlist.
  * @param {Object} res - The response object from Express.
  * @returns {Promise<void>} A promise that resolves when the playlist is updated.
  */
 ```
 * @param {string} req.params.playlistId - The ID of the playlist to be deleted
 * @returns {Promise<void>} A promise that resolves when the playlist is deleted
 */
```
const deletePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    // TODO: delete playlist
})

const updatePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    const {name, description} = req.body
    //TODO: update playlist
})

export {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}