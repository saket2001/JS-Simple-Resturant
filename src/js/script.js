const menuContainer = document.querySelector("#menu__container");

////////////////////////////////////

const getData = async function () {
  try {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.documenu.com/v2/restaurant/4072702673999819?key=a748d3cae6d1fa9976cc8a1e701e72d9`
    );

    if (!res) return;

    const data = await res.json();

    // console.log(data.result.menus[0].menu_sections);
    await renderMenu(data.result.menus[0].menu_sections);
  } catch (err) {
    console.error(err);
  }
};

// render menu data
const renderMenu = function (data) {
  data.forEach((row) => {
    // console.log(row.menu_items);
    const markup = `
            <details>
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
                            ${item.price}$
                        </div>
                    </div>
                  `;
                  })
                  .join("")}
                </div>  
            </details> 
    `;

    menuContainer.insertAdjacentHTML("beforeend", markup);
  });
};

////////////////////////////////
window.addEventListener("load", getData);
