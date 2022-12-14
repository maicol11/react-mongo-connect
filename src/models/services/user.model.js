const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        min:3
    },
    lastname: {
        type: String,
        require: true,
        min:3
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true, 
    },
    active: {
        type: Boolean,
        require: true, 
    },
    contact: {
        type: Object,
        require: true,
        cellphone: {
            type: Number,
            require: true
        },
        address: {
            type: Object,
            require: true,
            city:{
                type: String,
                require: true
            },
            code_zip: {
                type: Number,
                require: true,
            },
            geolocalization: {
                type: Array,
                require: true
            }
        }
    },
    proffession: {
        type: Object,
        require: true,
        name: {
            type: String,
            require: true
        },
        organization: {
            type: String,
            require: true
        },
        possition_job: {
            type: String,
            require: true
        }
    }    
})

module.exports = mongoose.model('UserCollection', userSchema)
