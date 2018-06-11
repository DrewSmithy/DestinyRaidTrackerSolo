module.exports = {

    url: 'https://raid.report/',
    elements: {

        searchInput: ('input[id="search"]'),
        searchButton: ('i[class="material-icons search-button"]'),
        fastestLeviathan: {
            selector: ('(//tr)[19]'),
            locateStrategy: 'xpath'
        },
        fastestEOW: {
            selector: ('(//tr)[11]'),
            locateStrategy: 'xpath'
        },
        clearsRank: {
            selector: ('(//div[@class="rank-title"])[1]'),
            locateStrategy: 'xpath'
        },
        displayName: ('span[class="player-info-display-name truncate"]')
    }
}