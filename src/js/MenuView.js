class MenuView {
  _parentElement = document.querySelector("#menu__container");
  _errorMsg = `Oops! Unable to get menu right now. Try again later`;
  _data;

  _render(data) {
    this._data = data;
    this._clearParent;
    this._renderMenu();
  }
  _clearParent() {
    this._parentElement.innerHTML = "";
  }

  _renderError() {
    this._clearParent;
    alert(this._errorMsg);
  }

  _renderMenu() {
    this._data.forEach((row) => {
      const markup = `
                <summary>
                   ${row.section_name}
                </summary>
                <div id="menu__list">
                ${row.menu_items
                  .map((item) => {
                    return `
                    <div class="menu__item">
                        <div class="menu__left">
                            <div class="menu__title">
                                ${item.name}
                            </div>
                            <div class="menu__description">
                                  ${
                                    item.description
                                      ? item.description
                                      : "No Description available"
                                  }
                            </div>
                            <button class="btn">
                                Add to cart
                            </button>
                        </div>
                        <div class="menu__right">
                            $ ${item.price}
                        </div>
                    </div>
                  `;
                  })
                  .join("")}
                </div>  
        `;

      this._parentElement.insertAdjacentHTML("beforeend", markup);
    });
  }
}

export default new MenuView();