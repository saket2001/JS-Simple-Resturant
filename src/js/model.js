// for storing data
export const state = {
  result: [],
};

/////////////////////////
export const loadData = async function () {
  try {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.documenu.com/v2/restaurant/4072702673999819?key=a748d3cae6d1fa9976cc8a1e701e72d9`
    );

    if (!res) return;

    state.result = await res.json();
  } catch (err) {
    console.error(err);
  }
};
