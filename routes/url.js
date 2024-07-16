const express = require("express");
const urlControllerApi =  require("../controller/url")

const router = express.Router();


router.post("/shorten-url",urlControllerApi.getLongUrl)

router.get("/url/:shortUrl",urlControllerApi.getShortUrl)

module.exports = router;
