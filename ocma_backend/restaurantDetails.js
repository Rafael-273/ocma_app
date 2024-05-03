const mongoose = require("mongoose");

const RestaurantDetailSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String
}, {
    collection: "RestaurantInfo"
});

mongoose.model("RestaurantInfo", RestaurantDetailSchema);
