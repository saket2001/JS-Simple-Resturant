// // fetch(
// //   `https://cors-anywhere.herokuapp.com/https://api.documenu.com/v2/restaurant/4072702673999819?key=a748d3cae6d1fa9976cc8a1e701e72d9`
// // )
// //   .then((res) => res.json())
// //   .then((data) => {
// //     const show = data.result.restaurant_name;
// //     document.querySelector(".show").textContent = show;
// //     console.log(data);
// //   })
// //   .catch((err) => console.log(err));

// document
//   .querySelector("#cart__container")
//   .addEventListener("click", function (e) {
//     const btn = e.target.closest(".cart__btn");
//     alert(btn);

//     const markup = `
//         <div id="cart__div">
//             Your cart is
//         </div>
//       `;

//     document.querySelector("header").classList.toggle("overlay");

//     document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
//   });
