const app = require('../src/demo.app');

describe('Element Interactions', () => {
    context('Click and type', () => {
        it('Click a few buttons and verify a text message', async () => {
            await app.button('App').click();
            await app.button('Alert Dialogs').click();
            await app.button('List dialog').click();
            await app.button('Command one').click();
            expect(await app.messageBox.getText()).to.equal('You selected: 0 , Command one');
        });
        it('Enter text, submit and verify', async () => {
            await app.button('App').click();
            await app.button('Alert Dialogs').click();
            await app.button('Text entry').click();

            await app.textInput.username.setValue('test_user');
            await app.textInput.password.setValue('test_pass');
            await app.button('OK').click();

            await app.button('Text entry').click();
            expect(await app.textInput.username.getText()).to.equal('test_user');
            expect(await app.textInput.password.getText()).to.equal('•••••••••');
        });
    });
    context('Scroll', () => {
        it('scroll by coordinates x and y', async () => {
            await app.button('Views').click();

            // verify a button from the bottom is not visible yet
            expect(await app.button('Radio Group').isDisplayed()).to.be.false;

            await driver.touchAction([
                { action: 'press', x: 0, y: 2020 },
                { action: 'moveTo', x: 0, y: 350 },
                'release'
            ]);

            // verify the button from the bottom is visible now
            expect(await app.button('Radio Group').isDisplayed()).to.be.true;
        });
        it('scroll from one element to another', async () => {
            await app.button('Views').click();

            // verify a button from the bottom is not visible yet
            expect(await app.button('Radio Group').isDisplayed()).to.be.false;

            // scroll from one element to another (both must be visivble)
            await driver.touchAction([
                { action: 'press', element: await app.button('Grid') },
                { action: 'moveTo', element: await app.button('Animation') },
                'release'
            ]);

            // verify the button from the bottom is visible now
            expect(await app.button('Radio Group').isDisplayed()).to.be.true;
        });
    });
    afterEach('reset app', async () => {
        await driver.reset();
    });
});
