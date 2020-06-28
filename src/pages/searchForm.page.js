class SearchFormPage{
    get allCars()  {return $('//input[@aria-labelledby="allRadioType"]')};
    get buCars()  {return $('//input[@aria-labelledby="buRadioType"]')};
    get brand()  {return $('//input[@id="brandTooltipBrandAutocompleteInput-brand"]')};
    get model()  {return $('//input[@id="brandTooltipBrandAutocompleteInput-model"]')};
    get region()  {return $('//input[@id="brandTooltipBrandAutocompleteInput-region"]')};
    get autoComplete() {return $('//ul[@class="unstyle scrollbar autocomplete-select"]')};
    get submit()  {return $('//button[@type="submit"]')};

}
module.exports = new SearchFormPage();