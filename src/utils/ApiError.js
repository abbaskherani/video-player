/**
 * @class ApiError
 * @extends Error
 * 
 * A custom error class for handling API errors.
 * This class extends the built-in Error class to provide additional
 * properties that are useful for error handling in an API context.
 * 
 * @param {number} statusCode - The HTTP status code associated with the error.
 * @param {string} [message="something went wrong"] - A descriptive message about the error.
 * @param {Array} [errors=[]] - An optional array to hold specific error details.
 * @param {string} [stack=""] - An optional stack trace for the error.
 */
class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        statck = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError };