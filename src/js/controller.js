import * as model from "./model.js";
import MenuView from "./MenuView.js";
import CartView from "./CartView.js";
////////////////////////////////////
const cartBtn = document.querySelector(".cart__container");
const backBtn = document.querySelector("#backBtn");

let addToCartButtons;
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

const controlAddToCart = function (e) {
  try {
    // getting parent
    const parent = e.target.closest(".menu__item");

    // getting other details
    const item_id = parent.getAttribute("data-id");
    const item_name = parent
      .querySelector(".menu__left")
      .querySelector(".menu__title").innerHTML;
    const item_price = parent.querySelector(".menu__right").innerHTML;
    // creating cart obj
    const cartObj = {
      id: item_id,
      name: item_name,
      price: item_price,
      quantity: 1,
    };

    // pushing to state model
    model.state.cart.push(cartObj);
    // console.log(model.state.cart);

    // adding new cart logo
    cartBtn.querySelector(".cart__btn").src =
      "./src/images and icons/icons8-basket-64.png";
    cartBtn.querySelector(".cart__btn").style.width = "30px";

    // change add to cart btn
    e.target.innerHTML = "Added";
  } catch (err) {
    console.error(err);
  }
};

const cancelItem = function (e) {
  // console.log(e.target);
  // get id of item to be cancelled
  const parent = e.target.closest(".cart_item");
  const clickedId = parent.getAttribute("data-id");

  // search for that id in state cart
  const itemId = model.state.cart.findIndex((item) => {
    return item.id === clickedId;
  });

  // now removing that item with id from cart
  model.state.cart.splice(itemId, 1);
  console.log("done");

  // rendering other cart items
  CartView._init(model.state.cart);
  CartView._renderCartItems(model.state.cart);
  CartView._renderBuyBtn();

  if (model.state.cart.length > 0) {
    init();
  }
};

////////////////////////////////
// for loading of data
window.addEventListener("load", controlRender);

// for cart
cartBtn.addEventListener("click", function () {
  // render cart
  CartView._render(model.state.cart);
  init();
});

// decreaseButtons.forEach((btn) =>
//   btn.addEventListener("click", this.decreaseItem)
// );
// increaseButtons.forEach((btn) =>
//   btn.addEventListener("click", this.increaseItem)
// );

backBtn.addEventListener("click", function () {
  // close cart
  CartView._unRenderCart();
});

//for add to cart buttons
setTimeout(function () {
  // converting html collection to array
  addToCartButtons = Array.from(document.querySelectorAll(".addToCartBtn"));

  // adding event to all buttons
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", controlAddToCart);
  });
}, 2000);

const init = function () {
  CartView.addHandlerCancelItem(cancelItem);
};
