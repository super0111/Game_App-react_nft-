const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nfts: [
        Number
    ]
});

module.exports = mongoose.model('group', GroupSchema);