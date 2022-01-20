const puppeteer = require('puppeteer');
const fs = require('fs');
let page;
let codeBuff = fs.readFileSync('./code.txt');
let code = codeBuff.toString();
let browserOpenpromise = puppeteer.launch({
    headless: false,
    slowMo: 20,
    defaultViewport: null,
    args: [
        '--start-maximized',
        '--disable-dev-shm-usage'
    ],
})

browserOpenpromise.then(function (browser) {
    let pagesArrpromise = browser.pages();
    return pagesArrpromise;
}).then(function (browserPages) {
    page = browserPages[0];
    let gotopromise = page.goto("https://www.google.com/");  // open google
    return gotopromise;
}).then(function () {
    let keysWillBePressedPromise = page.type("Input[type='text']", "https://www.hackerrank.com/auth/login"); // open hackerrank site
    return keysWillBePressedPromise;
}).then(function () {
    let enterWillBePressedPromise = page.keyboard.press('Enter');
    return enterWillBePressedPromise;
}).then(function () {
    let waitForSelectorPromise = page.waitForSelector('.iUh30.tjvcx', { visible: true });
    return waitForSelectorPromise;
})
    .then(function () {
        let clickOnTargetSitePromise = page.click(".iUh30.tjvcx");
        return clickOnTargetSitePromise;
    }).then(function () {
        let waitForSelectorPromise = page.waitForSelector("input[id='input-1']");   // username 
        return waitForSelectorPromise;
    }).then(function () {
        let keysWillBePressedPromiseInputusername = page.type("input[id='input-1']", "steamhere7"); 
        return keysWillBePressedPromiseInputusername;
    }).then(function () {
        let waitForSelectorPromise = page.waitForSelector("input[type='password']");// password
        return waitForSelectorPromise;
    }).then(function () {
        let keysWillBePressedPromiseInputpassword = page.type("input[type='password']", "coder26");
        return keysWillBePressedPromiseInputpassword;
    }).then(function () {
        let waitForSelectorPromise = page.waitForSelector("button[type='submit']");
        return waitForSelectorPromise;
    })
    .then(function () {
        let submitButtonPressedPromise = page.click("button[type='submit']");
        return submitButtonPressedPromise;
    }).then(function () {
        let waitForSelectorPromise = page.waitForSelector("[data-automation='data-structures']"); // getting to ques
        return waitForSelectorPromise;
    }).then(function () {
        let clickOnOptionPromise = page.click("[data-automation='data-structures']");
        return clickOnOptionPromise;
    }).then(function () {
        let waitForSelectorPromise = page.waitForSelector("[data-attr1='arrays-ds']");
        return waitForSelectorPromise;
    }).then(function () {
        let clickOnOptionPromise = page.click("[data-attr1='arrays-ds']");
        return clickOnOptionPromise;
    }).then(function () {
        let waitForSelectorPromise = page.waitForSelector(".monaco-scrollable-element.editor-scrollable.vs");
        return waitForSelectorPromise;
    }).then(function(){
        let clickOnOptionPromise = page.click(".monaco-scrollable-element.editor-scrollable.vs");
        return clickOnOptionPromise;
    }).then(function(){
        page.keyboard.down('Control');
        let AllSelectPromise = page.keyboard.press('KeyA');
        
        return AllSelectPromise;
    }).then(function(){
        let deleteTextPromise = page.keyboard.press("Backspace");
        page.keyboard.up('Control');
        return deleteTextPromise;
    }).then(function () {
        let waitForSelectorPromise = page.waitForSelector(".checkbox-input"); // typihg code
        return waitForSelectorPromise;
    })
    .then(function(){
        let clickCheckBoxInputPromise = page.click(".checkbox-input");
        return clickCheckBoxInputPromise
    }).then(function () {
        let waitForSelectorPromise = page.waitForSelector('.text-area.custominput');
        return waitForSelectorPromise;
    }).then(function(){
        let codeTypedPromise = page.type('.text-area.custominput',code,{delay:5});
        return codeTypedPromise;
    })
    .then(function(){
        let ctrlIsPressed = page.keyboard.down('Control');
        return ctrlIsPressed;
    }).then(function(){
        let AisPressed = page.keyboard.press('A',{delay:10});
        return AisPressed;
    }).then(function(){
        let Xispressed = page.keyboard.press('X');
        return Xispressed;
    })
    .then(function(){
        let upControlPromise = page.keyboard.up('Control');
        return upControlPromise;
    })
    .then(function () {
        let waitForSelectorPromise = page.waitForSelector(".monaco-editor.no-user-select.vs");
        return waitForSelectorPromise;
    }).then(function(){
        let clickOnOptionPromise = page.click(".monaco-editor.no-user-select.vs");
        return clickOnOptionPromise;
    }).then(function(){
        page.keyboard.down('Control');
        let allPastePromise = page.keyboard.press('V');      /// pasting code in editor
        page.keyboard.up('Control');
        return allPastePromise;
    }).then(function(){
        let waitForSelectorPromise = page.waitForSelector(".hr-monaco-submit");
        return waitForSelectorPromise;
    }).then(function(){
        let clickSubmitPromise = page.click('.hr-monaco-submit'); // submit
        return clickSubmitPromise;
    }).catch(function(err){
        console.log(err);
    })




