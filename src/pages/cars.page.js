class CarsPage {
    get resultsCars() { return $$('//span[@class="blue bold"]')}
}
module.exports = new CarsPage();