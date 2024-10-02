//ye bhi ek way
const asyncHandler = (requestHandler) => {
    /**
     * Middleware function that wraps an asynchronous request handler in a Promise
     * @param {Object} req - The request object
     * @param {Object} res - The response object
     * @param {Function} next - The next middleware function in the request-response cycle
     * @returns {Promise} A promise that resolves with the result of the request handler or rejects with an error
     */
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))
        /**
         * Catches and forwards any errors to the next middleware
         * @param {Error} err - The error object caught from the previous operation
         * @returns {void} Passes the error to the next middleware
         */
        .catch((err)=> next(err));
    }
}


export {asyncHandler}

//Higher Order Function
// const func = (fn) => () => {}
//ye ek way hai
// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message: err.message
//         });
//     }
// } 