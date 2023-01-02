const mongoose = require('mongoose')


const formTemplate = new mongoose.Schema({

    Name: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    }, City: {
        type: String,
        required: true,
    }, State: {
        type: String,
        required: true,
    }, Email: {
        type: String,
        required: true,
    }, PhoneNumber: {
        type: String,
        required: true,
    }, CompanyName: {
        type: String,
        required: true,
    
    }, Background: {
        type: String,
        required: true,
    }, Product: {
        type: String,
        required: true,
    }, Problem: {
        type: String,
        required: true,
    }, Solution: {
        type: String,
        required: true,
    }, Proposition: {
        type: String,
        required: true,
    },
    Advantage: {
        type: String,
        required: true,
    }, Revenue: {
        type: String,
        required: true,
    }, MarketSize: {
        type: String,
        required: true,
    }, Services: {
        type: String,
        required: true,
    }, Proposal: {
        type: String,
        required: true,
    },
    CompanyLogo:{
        type: String,
        required: true,
    },
    Status:{
        type: String,
        default:"new",
    },
    date: {
        type: Date,
        default: Date.now,
    }
})
module.exports = mongoose.model('IncubeForm', formTemplate)