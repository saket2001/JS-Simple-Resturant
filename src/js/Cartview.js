class CartView {
  _parentElement = document.querySelector(".cart__div");
  _errorMsg = `Oops! Unable to get menu right now. Try again later`;
  _data;

  _render() {
    // render cart div and hide menu and header
    this._renderCart();
    //render cart data
    // this._renderCartItems();
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
}

export default new CartView();
