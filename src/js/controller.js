import * as model from "./model.js";
import MenuView from "./MenuView.js";
////////////////////////////////////

const getData = async function () {
  try {
    // await model.loadData();
    MenuView._render(model.state.result?.menus[0].menu_sections);
    MenuView._renderOtherData(model.state.result);
  } catch (err) {
    console.error(err);
  }
};

////////////////////////////////
window.addEventListener("load", getData);
