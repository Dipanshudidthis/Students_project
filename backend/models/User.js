const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true
    },
    phonenumber:{
        type: String,
        required: true
    },
    college : {
        type: String,
        required: true
    },
    stream : {
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Password should be of 8 or more characters']
    },
    cpassword : {
        type: String,
        required: true,
        minlength: [8, 'Password should be of 8 or more characters']
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
},{timestamps:true});

userSchema.post('save', function(doc, next) {   // (.post) is not like post request, it means that "AFTER the document is saved fire that function"

    next();                        //next() is always used in any mongoose hook or middleware, if it is not used then the request will never be completed
})

const User = mongoose.model('user', userSchema);

module.exports = User;