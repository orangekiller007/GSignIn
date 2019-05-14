const mongoose = require('mongoose');

var incidentSchema = new mongoose.Schema({
    ticketid: {
        type: String,
        required: 'Ticket Id can\'t be empty',
        minlength: [4, 'Ticket must be atleast 4 character long']

    },
    issue: {
        type: String,
        required: 'Issue can\'t be empty',
        unique: true,
        minlength: [6, 'Issue must be atleast 6 character long']

    },
    summary: {
        type: String,
        required: 'Summary can\'t be empty',
        minlength: [10, 'Summary must be atleast 10 character long']
    },
    severity: {
        type: String,
        required: 'Severity can\'t be empty'
    },
    internal: {
        type: String,
        required: 'Internal can\'t be empty',
    },
    submittedby: {
        type: String,
        required: 'Submitted by name can\'t be empty',
    },
    updated: {
        type: String,
        required: 'Last Update can\'t be empty'
    },
    category: {
        type: String,
        required: 'Cateogry can\'t be empty',
    },
    subcategory: {
        type: String,
        required: 'Sub Category can\'t be empty',
    },
    assignedto:{
        type: String,
    },
    comments: {
        type: String,
        required: 'Comments can\'t be empty',
    },
    state: {
        type: String,
        required: 'State can\'t be empty',
    },

});


mongoose.model('Incident', incidentSchema);