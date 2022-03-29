const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        fishermanId:{type: String, required: true},
        firstname: {type: String, required:true},
        lastname: {type: String, required:true},
        email: {type: String, required:true, unique:true},
        password: {type: String, required:true},
        phone:{type: String, required:true, unique: true},
        isAdmin:{
            type: Boolean,
            default: false
        },
        isAgent:{
            type: Boolean,
            default: false
        },
    },{timestamps: true}
)

module.exports = mongoose.model("User", UserSchema)