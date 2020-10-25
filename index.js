const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

async function start(){
    let amount = 690;
    let amountLeft = amount;
    for (i = 590; i < amount; i++) {
        await new Promise((resolve,reject)=>{
            setTimeout(() => {
                scrape({
                    // Provide the URL(s) of the website(s) that you want to clone
                    // In this example, you can clone the Our Code World website
                    urls: [`http://web-old.archive.org/web/20191123163644/http://fortydayministry.com/node/${i}`],
                    // Specify the path where the content should be saved
                    // In this case, in the current directory inside the ourcodeworld dir
                    directory: path.resolve(__dirname, `resultado/node${i}`),
                    // Load the Puppeteer plugin
                    plugins: [
                        new PuppeteerPlugin({
                            launchOptions: {
                                // If you set  this to true, the headless browser will show up on screen
                                headless: true
                            }, /* optional */
                            scrollToBottom: {
                                timeout: 10000,
                                viewportN: 10
                            } /* optional */
                        })
                    ]
                })
                amountLeft--;
                console.log(amountLeft);
                resolve(amountLeft);
            }, 20000);
        });
    }
}
start();
