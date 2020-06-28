class TopFilterPage{
    get topFilter()  {return $('#topFilter')};
    get brandFilter()  {return $('//span[@data-name="brand.id[0]"]')};
    get modelFilter()  {return $('//span[@data-name="model.id[0]"]')};
    get regionFilter()  {return $('//span[@data-name="region.id[0]"]')};


}
module.exports = new TopFilterPage();