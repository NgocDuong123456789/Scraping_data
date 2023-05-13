// tạo ra brower instance
const puppeteer= require('puppeteer')

const startBrower=async()=>{
    let brower;
    try{
        // tạo brower như mở 1 cái trình duyệt
        brower= await puppeteer.launch({
            // có hiện ui của brower hay không , false là có
            headless: true ,
            // chrome sử dụng miltiqie layers của sandbox để tránh những nội dung web không đáng tin cậy
            args:["--disable-setuid-sandbox"],
            //bỏ qua các lỗi bảo mật của https

            'ignoreHTTPSErrors': true
        })
        
    }catch(error){j
        console.error('không tạo được brower')
    }
    return brower;
}

module.exports = startBrower