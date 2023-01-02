const mongoose = require('mongoose')


const slotCraeting = new mongoose.Schema({
    slot: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        default: null
    },
    status: {
        type: String,
        default: null
    },
    date: {
        type: Date,
        default: Date.now,
    }
})
module.exports = mongoose.model('Slot', slotCraeting)