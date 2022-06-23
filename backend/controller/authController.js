const User = require('../models/User');


const handleErrors = (err) => {    //we are making this seperate function to handle errors and pass it on to the functions of login and signup below
    console.log(err.message, err.code);
    let errors = { email: " ", password: " " };

    //if email is already there in database
    if(err.code==11000){  //E11000 is the error code we get after entering an email that is already present in the database
        errors.email = 'That email is already registered';
        return errors;

    }

    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;     //properties is an object that have everything, and we are accessing path and message
        })
    }

    return errors;

}

module.exports.signup_post = async (req, res) => {
    const { name, email, phonenumber, college, stream, year, password, cpassword } = req.body;
    
    try{
        const user = await User.create({ name, email, phonenumber, college, stream, year, password, cpassword });
        res.status(201).json(user);
    }catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = async (req, res) => {
    res.send("New login");
}