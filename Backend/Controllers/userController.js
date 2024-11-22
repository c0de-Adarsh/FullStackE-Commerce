const User = require('../Models/userModel');

  const signupUser = async (req,res) =>{
    try {
        const {name,email,password} = req.body;
        //create a new user 
        const user = new User({name,email,password});
        await user.save();
        return res.status(200).json({message:'User Signed Up',user:user})
    } catch (error) {
        console.error('Error');
        res.status(500).json({message:'Internal server error'});
    }
  }

  module.exports = {signupUser}
// const express = require('express');
