const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  signUp,
  login
} = require("../../controllers/UserController");

router.post("/sign_up", signUp);
router.post("/login", login);

module.exports = router;
