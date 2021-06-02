import * as model from "./model.js";
import MenuView from "./MenuView.js";
import CartView from "./CartView.js";
////////////////////////////////////

const controlRender = async function () {
  try {
    // render data
    MenuView._render(model.state.result?.menus[0].menu_sections);
    MenuView._renderOtherData(model.state.result);
  } catch (err) {
    console.error(err);
  }
};

const controlCart = function () {
  try {
    // render cart div
    CartView._render();
    // render cart items
    // do cart calculations
  } catch (err) {
    console.error(err);
  }
};

////////////////////////////////
// for loading of data
window.addEventListener("load", controlRender);
// for cart
document
  .querySelector(".cart__container")
  .addEventListener("click", controlCart);

document.querySelector("#backBtn").addEventListener("click", function () {
  CartView._unRenderCart();
});
