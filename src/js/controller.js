import * as model from "./model.js";
import MenuView from "./MenuView.js";
////////////////////////////////////

const getData = async function () {
  try {
    await model.loadData();
    // console.log(model.state.result);
    MenuView._render(model.state.result?.result.menus[0].menu_sections);
  } catch (err) {
    console.error(err);
  }
};

// render menu data

////////////////////////////////
// window.addEventListener("load", getData);
