const express = require ("express")
const router = express.Router()

const {loging}=require ("../controllers/authController")

router.post("/loging", loging)

module.exports = router