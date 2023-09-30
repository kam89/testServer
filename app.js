const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log("Server Listening on PORT:", port);
});

app.get("/restaurant/v1/getRestaurantList", (request, response) => {
  let list = [];

  const restaurant = {
    name: "SDS",
    coordinate: { x: 2.964994, y: 101.7721517 },
    foodTags: ["Chinese", "FastFood", "Healthy"],
    platformTags: [
      "Free Delivery Available",
      "Pickup Available",
      "Order In Advance",
    ],
    imageUrl:
      "https://sdsgroups.com/wp-content/uploads/2021/11/cropped-Asset-3-e1637812026983.png",
  };

  for (let i = 0; i < 19; i++) {
    list.push(restaurant);
  }

  response.send(list);
});

app.get("/personal/v1/getFavouritePlaceList", (request, response) => {
  let list = [];

  const address = {
    name: "Home",
    line1: "2",
    line2: "Jalan 123456789",
    line3: "Taman 123456789",
    line4: null,
    city: "Bandar Baru Bangi",
    postcode: "43650",
    state: "Selangor",
    coordinate: { x: 0.1, y: 0.1 },
  };

  const address2 = {
    name: "Work",
    line1: "1",
    line2: "Jalan 123456789",
    line3: "Taman 123456789",
    line4: null,
    city: "Kajang",
    postcode: "43000",
    state: "Selangor",
    coordinate: { x: 0.1, y: 0.1 },
  };

  for (let i = 0; i < 1; i++) {
    list.push(address);
    list.push(address2);
  }

  response.send(list);
});
