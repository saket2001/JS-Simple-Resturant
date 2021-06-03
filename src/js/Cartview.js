class CartView {
  _parentElement = document.querySelector(".cart__div");
  _childElement = this._parentElement.querySelector("#cart_list");
  _data;

  _render(data) {
    this._data = data;
    // render cart div and hide menu and header
    this._renderCart();
    // add buy btn
    this._renderBuyBtn();
    //render cart data
    this._renderCartItems();
    //
    const cancelBtn = document.querySelectorAll("#cancelBtn");
    console.log(cancelBtn);
  }

  _renderCart() {
    // for cart button
    // render cart div and hide menu and header
    document.querySelector("header").classList.toggle("hidden");
    document.querySelector("main").classList.toggle("hidden");
    this._parentElement.classList.toggle("hidden");
  }
  _unRenderCart() {
    // for back button
    this._renderCart();
  }

  _clearDiv(div) {
    div.innerHTML = "";
  }

  _renderError() {
    // render menu
    // this._clearParent;
    alert(this._errorMsg);
  }
  _renderBuyBtn() {
    // rending btn if cart contains item
    if (this._data.length > 0) {
      const btn = document.querySelector("#buyBtn");
      btn.innerHTML = `Buy [${this._data.length} item]`;
      btn.classList.remove("hidden");
    }
  }

  _renderCartItems() {
    this._clearDiv(this._childElement);
    this._data.forEach((item) => {
      //cart item div
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart_item");

      // inside elements
      // 1.title
      const item_title = document.createElement("div");
      item_title.classList.add("item_title");
      item_title.innerHTML = `${item.name}`;
      itemDiv.appendChild(item_title);

      // 2.price
      const item_price = document.createElement("div");
      item_price.classList.add("item_price");
      item_price.innerHTML = `${item.price}`;
      itemDiv.appendChild(item_price);

      // buttons
      const item_quantity_box = document.createElement("div");
      item_quantity_box.classList.add("item_quantity_box");

      // 1.decrease button
      const decreaseBtn = document.createElement("button");
      decreaseBtn.classList.add("btn", "decreaseBtn");
      decreaseBtn.setAttribute("id", "decreaseBtn");
      const img1 = document.createElement("img");
      img1.src = `./src/images and icons/icons8-minus-24.png`;
      img1.style.width = "20px";
      decreaseBtn.appendChild(img1);
      item_quantity_box.appendChild(decreaseBtn);

      // 2.input div
      const inputDiv = document.createElement("input");
      inputDiv.setAttribute("type", "text");
      inputDiv.setAttribute("placeholder", `${item.quantity}`);
      item_quantity_box.appendChild(inputDiv);

      // 3.increase button
      const increaseBtn = document.createElement("button");
      increaseBtn.classList.add("btn", "increaseBtn");
      increaseBtn.setAttribute("id", "increaseBtn");
      const img2 = document.createElement("img");
      img2.src = `./src/images and icons/icons8-plus-math-26.png`;
      img2.style.width = "20px";
      increaseBtn.appendChild(img2);
      item_quantity_box.appendChild(increaseBtn);

      itemDiv.appendChild(item_quantity_box);

      // 4 cancel button
      const cancelBtn = document.createElement("button");
      cancelBtn.classList.add("btn");
      cancelBtn.setAttribute("id", "cancelBtn");
      cancelBtn.innerHTML = `Cancel Item`;
      itemDiv.appendChild(cancelBtn);

      this._childElement.appendChild(itemDiv);
    });
  }
  _loadCart() {}
}

export default new CartView();
