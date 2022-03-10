const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
        ],
    },
    password: {
        type: String,
        required: true,
        max: 255,
        min: 6,
        // match: [
        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        //     "Password must contain minimum eight characters includig uppercase & lowercase letter and number."
        // ],
    },
    profile_pic_url: {
        type: String ,
    },
    biography: {
        type: String ,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    sketch_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sketch'
    }],
    post_ids:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
});

module.exports = mongoose.model("User", userSchema);
