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
    this._renderMenu1();
  }
  _renderOtherData(data) {
    // render other details
    this._hotelName.innerHTML = data.restaurant_name;
    this._hotelItems.innerHTML = data.cuisines;
    this._hotelAddress.innerHTML = data.address;
    this._hotelTiming.innerHTML = data.hours;

    // render menu
    this._clearParent;
    // this._renderMenu();
  }
  _clearParent() {
    this._parentElement.innerHTML = "";
  }

  _renderError() {
    // render menu
    this._clearParent;
    alert(this._errorMsg);
  }
  _renderMenu1() {
    this._data.forEach((row) => {
      // details
      const details = document.createElement("details");
      details.setAttribute("open", "open");
      details.classList.add("details");

      // summary
      const summary = document.createElement("summary");
      summary.classList.add("summary");
      summary.innerHTML = `${row.section_name}`;
      details.appendChild(summary);

      //menu div
      const menuDivContainer = document.createElement("div");
      menuDivContainer.classList.add("menu__list");

      row.menu_items.map((item) => {
        // menu item
        const menuDiv = document.createElement("div");
        menuDiv.setAttribute("data-id", `${item.id}`);
        // console.log(menuDiv.getAttribute("data-id"));
        menuDiv.classList.add("menu__item");

        // menu left div
        const menuLeftDiv = document.createElement("div");
        menuLeftDiv.classList.add("menu__left");

        // inside menu left div
        // 1. title
        const menuTitle = document.createElement("div");
        menuTitle.classList.add("menu__title");
        menuTitle.innerHTML = `${item.name}`;
        menuLeftDiv.appendChild(menuTitle);

        // 2. description
        const menuDescription = document.createElement("div");
        menuDescription.classList.add("menu__description");
        menuDescription.innerHTML = `${
          item.description ? item.description : "No description"
        }`;
        menuLeftDiv.appendChild(menuDescription);

        // 3. add to cart btn
        const menuBtn = document.createElement("button");
        menuBtn.classList.add("btn", "addToCartBtn");
        menuBtn.innerHTML = `Add To Cart`;
        menuLeftDiv.appendChild(menuBtn);

        // menu right div
        const menuRightDiv = document.createElement("div");
        menuRightDiv.classList.add("menu__right");
        menuRightDiv.innerHTML = `${item.price}`;

        //
        menuDiv.appendChild(menuLeftDiv);
        menuDiv.appendChild(menuRightDiv);
        menuDivContainer.appendChild(menuDiv);
        // details.append(menuDiv);
      });
      details.appendChild(menuDivContainer);

      this._parentElement.appendChild(details);
    });
  }

  _renderMenu() {
    this._data.forEach((row) => {
      // console.log(row);
      const markup = `
            <details open>
                <summary>
                   ${row.section_name}
                </summary>
                <div class="menu__list">
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
                            <button class="btn addToCartBtn">
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
