const express = require("express")
const shortid = require('shortid')
const URL = require("../models/url")

const shortenUrl = async(req,res)=>{
    try {
        const{redirectURL} = req.body
        
        if(!redirectURL) {
            return res.status(400).json({message:"url is requried"})
        }

       

        const shortID = shortid()

        const data = await URL.create({
            shortId:shortID,
            redirectURL:req.body.redirectURL,
            userId:req.user.id,
            visitHistory :[]
        })

        
         res.json(data)

    } catch (error) {
        console.log({error:"error in short url controller"});
    }
}

const redirectcontroller = async(req,res)=>{
    try {
        const {shortId} = req.params

        const urlLong = await URL.findOne({shortId})

        if(!urlLong) {
            return res.status(400).json({message:"Url not found"})
        }

        urlLong.visitHistory.push({ timestamp: Date.now() });
        await urlLong.save();


        const response = urlLong.redirectURL
        console.log(response);
        
        res.redirect(urlLong.redirectURL)

    } catch (error) {
        console.error(error);
    }
}



module.exports = {
    shortenUrl,
    redirectcontroller,
}