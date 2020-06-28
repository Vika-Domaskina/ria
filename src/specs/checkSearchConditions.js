const SearchForm = require('../pages/searchForm.page.js');
const TopFilter = require('../pages/topFilter.page.js');
const Cars = require('../pages/cars.page.js');

let testData = {
    brand: 'Volkswagen',
    model: 'Jetta',
    region: 'Киев'
}

describe('Choose on the page conditions for cars and check results', () => {
    before(() => {
        browser.url(browser.options.baseUrl);
    });

    it('Setup brand for searching', () => {
        SearchForm.brand.moveTo()
        SearchForm.brand.setValue(testData.brand);
        SearchForm.autoComplete.click();
        expect(SearchForm.brand.getValue()).to.equal(testData.brand);
    });

    it('Setup model for searching', () => {
        SearchForm.model.moveTo()
        SearchForm.model.setValue(testData.model);
        SearchForm.autoComplete.click();
        expect(SearchForm.model.getValue()).to.equal(testData.model);
    });

    it('Setup region for searching', () => {
        SearchForm.region.moveTo()
        SearchForm.region.setValue(testData.region);
        SearchForm.autoComplete.click();
        expect(SearchForm.region.getValue()).to.equal(testData.region);
    });

    it('Submit search parameters', () => {
        SearchForm.submit.waitForExist();
        SearchForm.submit.click();
        expect(TopFilter.topFilter.waitForExist()).to.equal(true);
    });

    it('Check key points for top filters', () => {
        expect(TopFilter.brandFilter.getText()).to.contain(testData.brand);
        expect(TopFilter.modelFilter.getText()).to.contain(testData.model);
        expect(TopFilter.regionFilter.getText()).to.contain(testData.region);
    });

    it('Check results for cars naming', () => {
            let result = Cars.resultsCars;
            for(let i = 0; i < result.length - 1; i++){
                let naming = result[i].getText();
                expect(naming).to.contain(testData.brand);
                expect(naming).to.contain(testData.model);
            }
    })
})