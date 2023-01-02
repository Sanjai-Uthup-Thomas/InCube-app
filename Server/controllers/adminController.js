const jwt = require('jsonwebtoken')
const adminSignUp = require('../models/adminCreate')
const applications = require('../models/form')
const slot = require('../models/slot')

const bcrypt = require('bcrypt')
module.exports = {
    adminCraete: async (req, res) => {
        const saltPassword = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password, saltPassword)
        const signedUpAdmin = new adminSignUp({

            email: req.body.email,
            password: securePassword

        })
        signedUpAdmin.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
    adminLogin: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await adminSignUp.findOne({ email: email })
            if (!user)
                return res
                    
                    .json( {msg: "No account found"} );
            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) return res.json({ msg: "Invalid password" });
            const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET,
                { expiresIn: "3d" })

            res.json({
                token,
                user: {
                    id: user._id,
                    email: user.email,
                },
            });
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },
    doTokenIsValid: async (req, res) => {
        try {
            const token = req.header("x-admin-token")
            console.log(token);
            if (!token) return res.json(false)
            const verified = jwt.verify(token, process.env.JWT_SECRET)
            if (!verified) return res.json(false)
            const user = await adminSignUp.findById(verified.id)
            if (!user) return res.json(false)
            return res.json(true)
        } catch (err) {
            res.status(500).json({ error: err.message })
        }

    },
    doGet: async (req, res) => {
        const user = await adminSignUp.findById(req.user)
        res.json({ username: user.username, id: user._id })
    },
    doApplications: async (req, res) => {
        try {

            const application = await applications.find({ Status: "new" })
            if (application) {
                res.json(application)
            } else {
                res.json({ msg: "No application found" })
            }
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    },
    doApproved: async (req, res) => {
        try {

            const application = await applications.find({ Status: "accepted" })
            if (application) {
                res.json(application)
            } else {
                res.json({ msg: "No application found" })
            }
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    },
    doDeclined: async (req, res) => {
        try {

            const application = await applications.find({ Status: "declined" })
            if (application) {
                res.json(application)
            } else {
                res.json({ msg: "No application found" })
            }
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    },
    doAccept: async (req, res) => {
        try {
            await applications.findByIdAndUpdate(req.params.id, { Status: "accepted" })
            res.json(true)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    },
    doDecline: async (req, res) => {
        try {
            await applications.findByIdAndUpdate(req.params.id, { Status: "declined" })
            res.json(true)

        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    },
    doView: async (req, res) => {
        try {
            let id = req.params.id
            const application = await applications.findById({ _id: id })
            if (application) {
                res.json(application);
            } else {
                res.status(404).json({ error: 'Not Found' });
            }

        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    },
    doSlotCraeting: (req, res) => {
        const slotCraeting = new slot({
            slot:req.body.slot,
        })
        slotCraeting.save()
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
    doSlots:async(req,res)=>{
        const slots = await slot.find()
        res.json(slots)
    },
    doBooking:async(req,res)=>{
        const slotid=req.body.divid
        const companyid=req.body.slotBooking
        await slot.findByIdAndUpdate({_id:slotid},{$set:{"status":"booked"}})
        await applications.findByIdAndUpdate({_id:companyid},{$set:{"Status":"booked"}})
        res.json()
    },
    doStatus:async(req, res) => {
        const status=await applications.find()
        console.log(status,"status");
        res.json(status)
    },

}
  