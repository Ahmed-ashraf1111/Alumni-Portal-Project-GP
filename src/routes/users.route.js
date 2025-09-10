const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const usersController = require("../controllers/users.controller");

// GET all users (graduates + staff)
router.get("/", usersController.getAllUsers);

// GET all posts

module.exports = router;
