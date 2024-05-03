const express=require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json());
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');

const mongoUrl="mongodb+srv://ocma_app:ocma123@drivesmart.laqpnez.mongodb.net/?retryWrites=true&w=majority&appName=drivesmart"

const JWT_SECRET ='d97435b0f891b07ea2a2fda0040c642b5e7db1fc2e9f0616f4a3506687ccdd39'


mongoose.connect(mongoUrl).then(()=> {
    console.log("Database Connected")
}).catch((e)=> {
    console.log(e)
})

require('./userDetails')
const User = mongoose.model("UserInfo");
require('./restaurantDetails')
const Restaurant = mongoose.model("RestaurantInfo");

app.get("/", (req, res)=> {
    res.send({status:"Started"})
})

app.post("/register-user", async(req, res)=> {
    const { name, email, mobile, password } = req.body;

    const oldUser = await User.findOne({
        email:email
    })

    if(oldUser){
        return res.send({ data: "User already exists! "})
    }

    const encryptedPassword = await bcrypt.hash(password, 10)

    try {
        await User.create({
            name: name,
            email: email,
            mobile,
            password: encryptedPassword,
        });

        res.send({status: "ok", data: "User Created"})

    } catch (error) {}
});

app.post('/login-user', async(req, res) => {
    const { email, password } = req.body;
    const oldUser = await User.findOne({ email: email });

    if (!oldUser) {
        return res.send({ data: "Esse usuário não existe!" })
    }

    if (await bcrypt.compare(password, oldUser.password)){
        const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);

        if(res.status(201)) {
            return res.send({ status: "ok", data: token });
        } else {
            return res.send({ error: "error" });
        }
    }
})

app.post("/user-data", async(req, res) => {
    const { token } = req.body;

    try {
        const user = jwt.verify(token, JWT_SECRET);
        const userEmail = user.email;

        User.findOne({ email:userEmail }).then((data) => {
            return res.send({ status: "ok", data: data});
        })
    } catch(error) {
        return res.send({ error: "error" });
    }
});

app.post("/register-restaurant", async(req, res) => {
    const { name, location, description } = req.body;

    try {
        await Restaurant.create({
            name: name,
            location: location,
            description: description,
        });

        res.send({ status: "ok", data: "Restaurant Created" });
    } catch (error) {
        console.error("Erro ao registrar restaurante:", error);
        res.status(500).send({ error: "Erro ao registrar restaurante. Tente novamente mais tarde." });
    }
});

app.get("/list-restaurants", async (req, res) => {
    try {
        const restaurants = await Restaurant.find();

        res.send({ status: "ok", data: restaurants });
    } catch (error) {
        console.error("Erro ao buscar restaurantes:", error);
        res.status(500).send({ error: "Erro ao buscar restaurantes. Tente novamente mais tarde." });
    }
});

app.listen(5001, ()=> {
    console.log('Node JS server started')
});