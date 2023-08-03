const user = require("./../controllers/user.controller");
const router = require("express").Router();
router.get("/", user.getAll);
router.get("/:id", user.get);
router.post("/", user.createUser);
module.exports = router;