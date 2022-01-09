const router = require("express").Router()
const Trade = require("../models/Trade")
const {verifyTokenAgentAndAdmin} = require('./verifyToken')

//create trade
router.post("/trade", verifyTokenAgentAndAdmin, async (req, res) => {
    const tradeRequest = new Trade(req.body)
    try {
        const savedTrade = await tradeRequest.save()
        res.status(201).json(savedTrade)
    } catch (error) {
        res.status(500).json(error)
    }
})
//update trade request
router.put("/:id", verifyTokenAgentAndAdmin, async (req, res) => {
    try {
        const updateTrade = await Trade.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true})
        res.status(200).json(updateTrade)
    } catch (error) {
        res.status(500).json(error)
    }
})
//delete
//GET ALL TRADES
router.get("/trades", verifyTokenAgentAndAdmin, async (req, res) => {
    const query = req.query.new
    try {
        const trade = query ? await Trade.find().sort({_id: -1}).limit(10) : await Trade.find()
        res.status(200).json(trade)
    } catch (err) {
        res.status(403).json(err)
    }
})

module.exports = router;