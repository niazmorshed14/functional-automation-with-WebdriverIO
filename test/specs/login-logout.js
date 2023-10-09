describe("login & logout from heroku app", function(){
    
    it("login with valid credentials", async function(){
        
        //entering into the site
        await browser.url('https://the-internet.herokuapp.com/login');
        await browser.maximizeWindow();
        await browser.pause(2000);
        
        //validation 1
        await expect(browser).toHaveTitle('The Internet'); //on the landing page

        //getter
        const username = $('#username');
        const password = $('#password');
        const loginBtn = $('button[type="submit"]');
        const validationLogin = $('#flash');

        //setter
        await username.setValue('tomsmith');
        await password.setValue('SuperSecretPassword!');
        await loginBtn.click();
        
        await browser.pause(3000);

        //validation 2
        await expect(validationLogin).toHaveTextContaining('You logged into a secure area!'); //after login
    });

    it("logout from the app", async function(){
        //getter
        const logoutBtn = $("//i[contains(text(),'Logout')]");
        const validationLogout = $('#flash');
        
        //setter
        await logoutBtn.click();
        
        //validation 3
        await expect(validationLogout).toHaveTextContaining("You logged out of the secure area!");

        await browser.pause(2000);
        await browser.closeWindow();

    });
});