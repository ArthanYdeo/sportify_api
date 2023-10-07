const {
    createUser,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser,
    login,
    getUserByUserEmail
  } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/create", createUser);
router.get("/", getUsers);
router.get("/:id", getUserByUserId);
router.patch("/", updateUsers);
router.delete("/", deleteUser);
router.post("/login", login);
router.post("/email-check", getUserByUserEmail);
module.exports = router;