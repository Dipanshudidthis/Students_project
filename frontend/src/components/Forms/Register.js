import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {


    return (
        <>
            <div className="bbbbb">
                <div className="bodyyy">
                    <div class="container">
                        <div class="title">Registration</div>
                        <div class="content">
                            <form>
                                <div class="user-details">
                                    <div class="input-box">
                                        <span class="details">Full Name</span>
                                        <input type="text" name='name' placeholder='Enter Your Name' required />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Email</span>
                                        <input type="email" name='email' placeholder='Enter Your Email' required />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Phone Number</span>
                                        <input type="text" name='phonenumber' placeholder="Enter Your Phone Number" required />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">College name</span>
                                        <input type="text" name='college' placeholder="Enter Your College Name" required />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Stream</span>
                                        <input type="text" name='stream' placeholder="Enter Your Stream" required />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Your Year</span>
                                        <input type="text" name='year' placeholder="Example : 1st Year, 2nd year..." required />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Password</span>
                                        <input type="password" name='password' placeholder='Enter Your Password' required />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Confirm Password</span>
                                        <input type="password" name='cpassword' placeholder='Re-Enter Your Password' required />
                                    </div>
                                </div>
                                <div class="button">
                                    <input type="submit" value="Register" />
                                </div>
                            </form>
                            <div class="text sign-up-text">Already have an account? <Link to='/login' style={{ textDecoration: "none" }}> Sign In</Link></div>
                        </div>
                    </div>
                </div></div>
        </>
    )
}

export default Register