const express = require("express")
const { registerUser, userList, updateUser } = require("../controller/user");


const router = express.Router();


router.get("/", userList)
router.post("/create", registerUser)
router.post("/update/:id", updateUser)

module.exports = router