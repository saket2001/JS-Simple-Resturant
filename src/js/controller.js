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
    CartView._loadCart();
    // do cart calculations
  } catch (err) {
    console.error(err);
  }
};

const controlAddToCart = function () {
  try {
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

//
let addToCartBtn;
setTimeout(function () {
  // converting html collection to array
  addToCartBtn = Array.from(document.querySelectorAll(".addToCartBtn"));

  // adding event to all buttons
  addToCartBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // getting parent
      const parent = e.target.closest(".menu__item");

      // creating cart obj
      const cartObj = {
        name: parent.querySelector(".menu__left").querySelector(".menu__title")
          .innerHTML,
        description: parent
          .querySelector(".menu__left")
          .querySelector(".menu__description").innerHTML,
        price: parent.querySelector(".menu__right").innerHTML,
        quantity: 1,
      };

      // pushing to state model
      model.state.cart.push(cartObj);
      console.log(model.state.cart);

      // adding new cart logo
      document.querySelector(".cart__btn").src =
        "./src/images and icons/icons8-basket-64.png";
      document.querySelector(".cart__btn").style.width = "30px";
      // change add to cart btn
      e.target.innerHTML = "Added";
      // sending to render
      CartView._render(model.state.cart);
    });
  });
}, 2000);
