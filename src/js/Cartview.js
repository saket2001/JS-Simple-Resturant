class CartView {
  _parentElement = document.querySelector(".cart__div");
  _childElement = this._parentElement.querySelector("#cart_list");
  _data;

  _render() {
    // render cart div and hide menu and header
    this._renderCart();
    //render cart data
    this._loadCart();
  }

  _unRenderCart() {
    // this._parentElement.classList.toggle("hidden");
    this._renderCart();
  }

  _renderCart() {
    // render cart div and hide menu and header
    document.querySelector("header").classList.toggle("hidden");
    document.querySelector("main").classList.toggle("hidden");
    this._parentElement.classList.toggle("hidden");
  }

  _renderError() {
    // render menu
    this._clearParent;
    alert(this._errorMsg);
  }
  _loadCart() {}

  _renderCartItems(data) {
    data.forEach(() => {
      this._childElement.innerHTML = "";
      data.forEach((item) => {
        const markup = `
            <div class="cart_item">
                <div class="item_title">${item.name}</div>
                <div class="item_price">${item.price}</div>
                <div class="item_quantity_box">
                    <button class="btn" id="decreaseBtn">
                        <img width="20px" src="./src/images and icons/icons8-minus-24.png" alt="">
                    </button>
                    <input type="text" class="quantityInput" data-quantity="1" placeholder="${item.quantity}">
                    <button class="btn" id="increaseBtn">
                        <img width="20px" src="./src/images and icons/icons8-plus-math-26.png" alt="">
                    </button>
                </div>
                <button class="btn" id="cancelBtn">
                    Cancel item
                </button>
            </div>  
        `;

        this._childElement.insertAdjacentHTML("beforeend", markup);
      });
    });
  }
}

export default new CartView();
