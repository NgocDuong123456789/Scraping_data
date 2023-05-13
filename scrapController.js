const scrapper = require("./scrapper");

const scrapeController = async (browerIntance) => {
  const url = "https://phongtro123.com/";
  try {
    let brower = await browerIntance;
    //gọi hàm cạo ở file scrape
    scrapper(brower, url);
  } catch (error) {
    console.log("lỗi ở scrape controller" + error);
  }
};

module.exports = scrapeController;
