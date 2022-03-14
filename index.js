
// npm init -y 
// npm install puppeteer



// ###########################
// ###########################
// ###########################
// FOR DATA RETRIEVING ->

const puppeteer = require('puppeteer');
( async () => { 

    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.goto('https://fadejevs.com/')
    await page.waitForTimeout(2000)
    await page.screenshot({ path: "photo.png"})

    const grabText = await page.evaluate(() => { 
        const text = document.querySelector('.right-side');
        const texts = [text];
        let array = [];
        texts.forEach((item) => { 
            array.push(item.innerText)
        });

        return array;
    })


    console.log(grabText);
    await browser.close();

})();



// ###########################
// ###########################
// ###########################
// FOR WEBSITE INTERACTION AND AUTOMATION ->