fetch(
  `https://cors-anywhere.herokuapp.com/https://api.documenu.com/v2/restaurant/4072702673999819?key=a748d3cae6d1fa9976cc8a1e701e72d9`
)
  .then((res) => res.json())
  .then((data) => {
    const show = data.result.restaurant_name;
    document.querySelector(".show").textContent = show;
    console.log(data);
  })
  .catch((err) => console.log(err));
