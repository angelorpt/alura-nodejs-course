const router = require("express").Router();

router.use("/", (req, res) => {
  res.send({ ok: true });
});

module.exports = router;
