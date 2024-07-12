const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    mobile: String,
    password: String,
    role: { type: String, enum: ['admin', 'restaurant'], default: 'restaurant' },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RestaurantInfo"
    }
}, {
    collection: "UserInfo"
});

mongoose.model("UserInfo", UserDetailSchema);
