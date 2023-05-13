const startBrower = require("./brower");
const scrapeController = require("./scrapController");

let brower = startBrower();
scrapeController(brower);
