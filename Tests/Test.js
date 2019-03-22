let getTime = (time, username, displayName) => {
    time
        .api.pause(200)
    time
        .clearValue('@searchInput')
        .setValue('@searchInput', username + time.api.Keys.ENTER)
        .api.pause(500)
    time
        // .click('@searchButton')
        .waitForElementPresent('@clearsRank', 5000, 'Verifying Search')
        .verify.containsText('@displayName', displayName, 'Search Verified')
        .waitForElementPresent('@fastestLeviathan', 5000, 'Times Present')
        .getText('@fastestEOW', function (result) {
            console.log(result.value)
        })
        .getText('@fastestLeviathan', function (result) {
            console.log(result.value)
        })
}

module.exports = {
    beforeEach: browser => {
        browser.url('https://raid.report/')
            .waitForElementPresent('body', 8000, 'Page Loaded')
    
    },

    after: browser => {
        browser.end()
    },

'Fastest Time Test' : browser => {
    getTime(browser.page.RaidReport(), 'DijonKetchup#11281', 'DijonKetchup')
    getTime(browser.page.RaidReport(), 'skorca#1282', 'skorca')
    getTime(browser.page.RaidReport(), 'trexno2#1928', 'trexno2')
}


}