const mongoose = require("mongoose");

const sketchSchema = new mongoose.Schema({
    sketch_name: {
        type: String,
        default:"art",
    },
    sketch_url: {
        type: String,
      
    },
    sketch_status: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    posted_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model("Sketch", sketchSchema);
