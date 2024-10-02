import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const userSchema = new Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
            index : true //searchable banana hai to index true kiye to easy search kr paoge optimisied tarika hai
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true
        },
        fullName : {
            type : String,
            required : true,
            trim : true,
            index : true
        },
        email : {
            type : String, //cloudanary url
            required : true,
        },
        coverImage : {
            type: String //clodanary url

        },
        watchHistory : [
            {
                type : Schema.Types.ObjectId,
                ref : "Video"
            },

        ],
        password : {
            type : String, //hamesha encrpypt krke rakhe aur string type rakho for password
            required : [true, 'Password is required.']
        },
        refreshToken : {
            type : String
        }
},
{
    timestamps:true
}
)
//check on mongoose middleware
//events => validate, save, etc
userSchema.pre('save',async function(next) { //takes time so async used
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10) //(Whichfield, howmanyrounds)
    next()
})

//
//custom methods created BELOW
// userSchema.methods.customMethodName
userSchema.methods.isPasswordCorrect = async function(password) {
   await bcrypt.compare(password, this.password) //compare returns true or false
}

/**
 * Generates an access token for the user
 * @param {void} - This method doesn't take any parameters
 * @returns {string} A JWT access token containing user information
 */
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username : this.username,
        fullName : this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    ```
    /**
     * Generates a refresh token for the user
     * @param {void} - This method doesn't take any parameters
     * @returns {string} A JWT refresh token containing the user's ID
     */
    ```
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }  
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }  
    )
}

export const User = mongoose.model('User', userSchema);