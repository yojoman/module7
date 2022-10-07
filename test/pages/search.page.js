const BasePage = require("./base.page");

class SearchPage extends BasePage {
  get searchInputField() {
    return $(".//input[@class='fast-search__input']");
  }

  getItemFromSearchField(number) {
    return $(`.//ul/li[@class='search__result'][${number}]`);
  }

  async typeInSearhField(searchText) {
    await this.searchInputField.waitForDisplayed();
    await this.searchInputField.setValue(searchText);
  }

  async openItemFromSearchField(number) {
    const getIframe = await browser.$(".//iframe[@class='modal-iframe']");
    browser.switchToFrame(getIframe);
    await this.getItemFromSearchField(number).waitForDisplayed();
    await this.getItemFromSearchField(number).click();
    browser.switchToParentFrame();
  }
}

module.exports = new SearchPage();