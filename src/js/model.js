// data
export const state = {
  result: {
    restaurant_name: "Beach Side Coffee",
    restaurant_phone: "(212) 228-2333",
    hours: "Daily: 11am-12pm",
    price_range: "$$",
    restaurant_id: 4072702673999819,
    cuisines: ["Coffee", "Sandwhich", "Pastry", "indian food"],
    address:
      "1st Floor, Opposite K Star mall, chembur station road, chembur(e),,mumbai",
    menus: [
      {
        menu_name: "Main",
        menu_sections: [
          {
            section_name: "Best in Coffee",
            menu_items: [
              {
                id: 1,
                name: "Hazelnut Hot Chocolate",
                description:
                  "Dark hot chocolate with silky milk and hazelnut flavour",
                price: "₹169",
              },
              {
                id: 2,
                name: "Irish Cold Coffee",
                description: "",
                price: "₹125",
              },
              {
                id: 3,
                name: "Frappe",
                description:
                  "100% arabica coffee & blend with creamy vanilla ice cream",
                price: "₹119",
              },
              {
                id: 4,
                name: "Ghar ki Chai",
                description: "A typical ghar ki chai with ginger",
                price: "₹50",
              },
              {
                id: 5,
                name: "Hot Coffee",
                description: "",
                price: "₹100",
              },
              {
                id: 6,
                name: "Coffee Cafe Mocha",
                description: "",
                price: "₹230",
              },
              {
                id: 7,
                name: "Coffee Cafe Latte",
                description: "",
                price: "₹180",
              },
              {
                id: 8,
                name: "Coffee Cappuccino",
                description: "",
                price: "₹200",
              },
              {
                id: 9,
                name: "Iced Americano",
                description: "",
                price: "₹175",
              },
            ],
          },
          {
            section_name: "Rolls",
            menu_items: [
              {
                id: 10,
                name: "Achari Panner Roll",
                description: "2 pieces",
                price: "₹180",
              },
              {
                id: 11,
                name: "Achari Chicken Roll",
                description: "2 pieces",
                price: "₹250",
              },
              {
                id: 22,
                name: "Chatpata Parantha Wrap",
                description:
                  "Tangy paneer and vegetable filling wrapped in spinach paratha [2 pieces]",
                price: "₹250",
              },
              {
                id: 23,
                name: "Murgh Kathi Wrap",
                description:
                  "Spicy melange of chicken,onion,peppers and cheddar cheese packed in a tortilla wrap [2 pieces]",
                price: "₹295",
              },
            ],
          },
          {
            section_name: "Desserts",
            menu_items: [
              {
                id: 12,
                name: "Blueberry muffin",
                description: "1 piece",
                price: "₹150",
              },
              {
                id: 13,
                name: "Choco Chip muffin",
                description: "1 piece",
                price: "₹160",
              },
              {
                id: 14,
                name: "Brownie Fondente",
                description: "1 piece",
                price: "₹180",
              },
              {
                id: 15,
                name: "Double Chocolate chip cookie",
                description: "5 pieces",
                price: "₹265",
              },
            ],
          },
          {
            section_name: "Sandwhiches",
            menu_items: [
              {
                id: 16,
                name: "Basil Tomato and Mozzarella Cheese sandwhich",
                description: "2 pieces",
                price: "₹210",
              },
              {
                id: 17,
                name: "Tandoori Panner sandwhich",
                description: "2 pieces",
                price: "₹240",
              },
              {
                id: 18,
                name: "Hawaiian Veg club sandwhich",
                description: "4 small pieces",
                price: "₹160",
              },
              {
                id: 19,
                name: "Veg Toast sandwhich",
                description: "4 pieces",
                price: "₹130",
              },
              {
                id: 20,
                name: "Veg club sandwhich",
                description: "4 pieces",
                price: "₹150",
              },
              {
                id: 21,
                name: "Special Sandwhich",
                description:
                  "Contains chicken layer,chicken salad,and egg white",
                price: "₹195",
              },
            ],
          },
          {
            section_name: "Pastries",
            menu_items: [
              {
                id: 24,
                name: "Strawberry and almond cake",
                description: "1 pieces",
                price: "₹200",
              },
              {
                id: 25,
                name: "Red velvet and Orange cake",
                description: "2 pieces",
                price: "₹220",
              },
              {
                id: 26,
                name: "New york Cheesecake",
                description: "2 pieces",
                price: "₹265",
              },
            ],
          },
          {
            section_name: "Combos",
            menu_items: [
              {
                id: 27,
                name: "Non Veg Biryani",
                description:
                  "Served with spicy chicken biryani,salad,2 pieces of chicken lollipop and 500ml coke or fanta or pepsi",
                price: "₹350",
              },
              {
                id: 28,
                name: "Veg biryani",
                description:
                  "Served with veg spicy biryani,salad,3 pieces of paneer tikka,500ml coke or fanta or pepsi",
                price: "₹310",
              },
              {
                id: 29,
                name: "Indian veg thali",
                description:
                  "Served with 5 different veg bhaji's, rice with dal and one sweet item",
                price: "₹315",
              },
            ],
          },
        ],
      },
    ],
    last_updated: "02/06/2021 12:00:01 pm",
  },
  cart: [],
};

/////////////////////////
// export const loadData = async function () {
//   try {
//     const res = await fetch(
//       "https://cors-anywhere.herokuapp.com/https://api.documenu.com/v2/restaurant/4072702673999819?key=a748d3cae6d1fa9976cc8a1e701e72d9"
//     );

//     // console.log(res);
//     if (!res) return;

//     state.result = await res.json();
//   } catch (err) {
//     console.error(err);
//   }
// };

// `https://cors-anywhere.herokuapp.com/https://api.documenu.com/v2/restaurant/4072702673999819?key=a748d3cae6d1fa9976cc8a1e701e72d9`;
