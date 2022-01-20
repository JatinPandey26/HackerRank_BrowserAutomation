const puppeteer = require('puppeteer');
const fs = require('fs');
const googleLink = "https://www.google.com/";
const hackerrankSite = "https://www.hackerrank.com/auth/login";
const id = "steamhere7";
const password = "coder26";
let code = fs.readFileSync('./code.txt').toString();

async function waitAndClick(selector,page){
    await page.waitForSelector(selector);
    let selectorClicked = page.click(selector);
    return selectorClicked;
}

async function waitAndType(selector,page){
    await page.waitForSelector(selector);
    let codeTyped = page.type(selector,code);
    return codeTyped;
}

// async function waitAndPress(key){

// }

// async function questionSolver(newPage){
//     let codedone = 

//     return codedone;
// }

async function pasteCode(newPage){
    await waitAndClick(".monaco-editor.no-user-select.vs",newPage);
await newPage.keyboard.down('Control');
await newPage.keyboard.down('KeyA');
await newPage.keyboard.down('KeyV');
let codepasted =  await newPage.keyboard.up('Control');
return codepasted;
}


(async  function (){
try {let browser = await puppeteer.launch({
    headless : false,
    slowMo: 20,
    defaultViewport: null,
    args: [
        '--start-maximized',
        '--disable-dev-shm-usage'
    ],
})
let newPage = await browser.newPage();
const navigationPromise = newPage.waitForNavigation({waitUntil:'domcontentloaded'});
await newPage.goto(hackerrankSite);
await newPage.type("input[id='input-1']", id);
await newPage.type("input[type='password']",password);
await newPage.click("button[type='submit']");
await newPage.waitForSelector("[data-automation='data-structures']");
await newPage.click("[data-automation='data-structures']");
await newPage.waitForSelector("[data-attr1='arrays-ds']");
await newPage.click("[data-attr1='arrays-ds']");
await navigationPromise;
await newPage.waitForSelector(".checkbox-input");
// // await waitAndClick(".checkbox-input",newPage);
await newPage.waitForTimeout(200);
await newPage.click(".checkbox-input");
// await newPage.focus(".checkbox-input" )
// await newPage.keyboard.press('Enter');

await newPage.waitFor(".text-area.custominput");
await newPage.type(".text-area.custominput",code,{delay:5});
// await waitAndType('.text-area.custominput',newPage);
await navigationPromise;
await newPage.keyboard.down('Control');
await newPage.keyboard.press('KeyA');
await newPage.keyboard.press('KeyX');
await newPage.keyboard.up('Control');
await navigationPromise;
await pasteCode(newPage);
await navigationPromise;
await waitAndClick('.hr-monaco-submit',newPage);
}catch(err){
console.log(err);
}
})()