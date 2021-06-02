class MenuView {
  _parentElement = document.querySelector("#menu__container");
  _hotelName = document.querySelector(".name");
  _hotelItems = document.querySelector(".dishes");
  _hotelAddress = document.querySelector(".address");
  _hotelTiming = document.querySelector(".timing");
  _errorMsg = `Oops! Unable to get menu right now. Try again later`;
  _data;

  _render(data) {
    this._data = data;
    // render menu
    this._clearParent;
    this._renderMenu();
  }
  _renderOtherData(data) {
    // render other details
    this._hotelName.innerHTML = data.restaurant_name;
    this._hotelItems.innerHTML = data.cuisines;
    this._hotelAddress.innerHTML = data.address;
    this._hotelTiming.innerHTML = data.hours;

    // render menu
    this._clearParent;
    this._renderMenu();
  }
  _clearParent() {
    this._parentElement.innerHTML = "";
  }

  _renderError() {
    // render menu
    this._clearParent;
    alert(this._errorMsg);
  }

  _renderMenu() {
    this._data.forEach((row) => {
      const markup = `
            <details open>
                <summary>
                   ${row.section_name}
                </summary>
                <div id="menu__list">
                ${row.menu_items
                  .map((item) => {
                    return `
                    <div class="menu__item" data-id="${item.id}">
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
                            ${item.price}
                        </div>
                    </div>
                  `;
                  })
                  .join("")}
                </div>
           </details>
           </br>
        `;

      this._parentElement.insertAdjacentHTML("beforeend", markup);
    });
  }
}

export default new MenuView();
