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
      fixedPrice: item_price,
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
    // making that un clickable
    e.target.setAttribute("disabled", "true");
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

  // rendering other cart items
  CartView._init(model.state.cart);
  CartView._renderCartItems(model.state.cart);
  CartView._renderBuyBtn();
  CartView.addHandlerSubTotal(calcTotal);
  CartView._renderMsg();

  if (model.state.cart.length > 0) {
    init();
  }
};

const updateQuantity = function (e) {
  // console.log(e.target);
  // get quantity of item to be changed
  const btnClicked = e.target.closest("button");
  const parent = e.target.closest(".cart_item");
  const itemId = parent.getAttribute("data-id");
  const curQuantity = parent
    .querySelector(".item_quantity_box")
    .querySelector("input")
    .getAttribute("placeholder");

  if (btnClicked.classList.contains("decreaseBtn")) {
    model.state.cart.forEach((item) => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          item.quantity = +curQuantity - 1;
          item.price = `₹ ${+item.price.slice(1) - +item.fixedPrice.slice(1)}`;
        }
      }
    });
  }
  if (btnClicked.classList.contains("increaseBtn")) {
    model.state.cart.forEach((item) => {
      if (item.id === itemId) {
        item.quantity = +curQuantity + 1;
        item.price = `₹ ${+item.price.slice(1) + +item.fixedPrice.slice(1)}`;
      }
    });
  }

  // rendering other cart items
  CartView._init(model.state.cart);
  CartView._renderCartItems(model.state.cart);

  if (model.state.cart.length > 0) {
    init();
  }
};

const calcTotal = function () {
  if (model.state.cart.length > 0) {
    // getting all cart item prices
    const totalArray = model.state.cart.map((item) => +item.price.slice(1));
    // calc total
    const total = totalArray.reduce((total, cur) => +total + +cur);
    // rendering total
    const totalFigDiv = document.querySelector(".cart_total p");
    totalFigDiv.innerHTML = `Sub Total- ${total} ₹`;
    // after 3 sec clear all
  }
};

const renderFinalMsg = function () {
  setTimeout(function () {
    // clear cart item
    model.state.cart = [];
    CartView._childElement.innerHTML = "";
    // clear buy btn
    document.querySelector("#buyBtn").classList.add("hidden");
    // clear total
    const totalFigDiv = document.querySelector(".cart_total p");
    totalFigDiv.style.color = "red";
    totalFigDiv.innerHTML = "Purchased Completed ✔";
    setTimeout(function () {
      // remove msg
      totalFigDiv.innerHTML = "";
      // call cart view init
      CartView._init(model.state.cart);
      CartView._renderMsg();
    }, 5000);
  }, 2000);
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
  CartView.addHandlerDecreaseItem(updateQuantity);
  CartView.addHandlerIncreaseItem(updateQuantity);
  calcTotal();
  CartView.addHandlerSubTotal(renderFinalMsg);
};
