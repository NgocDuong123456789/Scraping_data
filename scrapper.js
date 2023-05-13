const scrapeCategory = async (brower, url) => {
  try {
    // sử dụng để tạo 1 trang mới trong trình duyệt đạng chạy bằng puppeteer
    let page = await brower.newPage();
    console.log("mở tab mới...");
    // cho phép truy cập vào trang web đã được tải xống trên trình duyệt của mình
    await page.goto(url);

    console.log("đang truy cập vào " + url);
    // trang web sẽ load hết dữ liệu mình mới bđ cạo
    await page.waitForSelector("#webpage");
    console.log("website đã load xong");
    // bắt đầu lấy dữ liệu
    const dataCategory = await page.$$eval("#navbar-menu> ul > li", (els) => {
      dataCategory = els.map((el) => {
        return {
          category: el.querySelector("a").innerText,
          link: el.querySelector("a").href,
        };
      });
      return dataCategory;
    });
    console.log(dataCategory);

    // đóng lại khi page đó đã cào xong
    await brower.close();
    console.log("tab đã đóng");
  } catch (error) {
    console.log("lỗi ở scrapper" + error);
  }
};

module.exports = scrapeCategory;
