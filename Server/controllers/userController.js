const jwt = require('jsonwebtoken')
const signUpTemplateCopy = require('../models/signUpModels')
const userModel = require('../models/form')
const bcrypt = require('bcrypt')
const { response } = require('express')

module.exports = {

    //userSignup
    doSignup: async (req, res) => {

        const saltPassword = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password, saltPassword)
        const signedUpUser = new signUpTemplateCopy({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: securePassword

        })  
        signedUpUser.save()
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },

    //userLogin
    doLogin: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await signUpTemplateCopy.findOne({ email: email })
            if (!user)
                return res
                    .status(200)
                    .json({ msg: "No account found" });
            const isMatch = await bcrypt.compare(password, user.password);


            if (!isMatch) return res.status(200).json({ msg: "Invalid password" });
            const token = jwt.sign({ email: user.username, id: user._id }, process.env.JWT_SECRET,
                { expiresIn: "3d" })
            console.log("token: " + token);

            res.json({
                token,
                user: {
                    id: user._id,
                    username: user.username,
                },
            });
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },
    //check if token is valid
    doTokenIsValid: async (req, res) => {
        try {
            console.log("req.user", req.user);
            const token = req.header("x-auth-token")
            console.log(token,"usrcon 63");
            if (!token) return res.json(false)
            const verified = jwt.verify(token, process.env.JWT_SECRET)
            console.log(verified);
            if (!verified) return res.json(false)
            const user = await signUpTemplateCopy.findById(verified.id)
            if (!user) return res.json(false)
            return res.json(true)
        } catch (err) {
            response.json({ error: err.message }) 
        }
  
    }, 
    //doGet
    doGet: async (req, res) => {
        const user = await signUpTemplateCopy.findById(req.user)
        console.log(user,"user");
        res.json({ username: user.username, id: user._id })
    },
    doForm: (req, res) => {
        req.body.CompanyLogo = req.file.filename 
 
        const userForm = new userModel({
            Name: req.body.Name,
            Address: req.body.Address,
            City: req.body.City,
            State: req.body.State,
            Email: req.body.Email,
            PhoneNumber: req.body.PhoneNumber,
            CompanyName: req.body.CompanyName,
            Background: req.body.Background,
            Product: req.body.Product,
            Problem: req.body.Problem,
            Solution: req.body.Solution,
            Proposition: req.body.Proposition,
            Advantage: req.body.Advantage,
            Revenue: req.body.Revenue,
            MarketSize: req.body.MarketSize,
            Services: req.body.Services,
            Proposal: req.body.Proposal,
            CompanyLogo: req.body.CompanyLogo

        })
        userForm.save()
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });

    }
}    