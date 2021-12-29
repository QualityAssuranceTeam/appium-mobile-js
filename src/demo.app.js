class DemoApp {
    // App > Alert Dialogs > List Dialog > (click on any option)
    get messageBox() {
        return $('//*[@resource-id="android:id/message"]');
    }

    // App > Alert Dialogs > List Dialog > Text Entry
    get textInput() {
        return {
            username: $('//*[@resource-id="io.appium.android.apis:id/username_edit"]'),
            password: $('//*[@resource-id="io.appium.android.apis:id/password_edit"]')
        }
    }

    /**
     * Get button by text attribute (case insensitive search)
     * @param {String} displayedText
     * @returns {Element} Page Element
     */
    button(displayedText) {
        return $(`//*["android.widget.TextView" or "android.widget.Button"]
            [
                contains(
                    translate(@text, "${displayedText.toUpperCase()}", "${displayedText.toLowerCase()}"),
                    "${displayedText.toLowerCase()}"
                )
            ]`
        );
    }
}

module.exports = new DemoApp();
