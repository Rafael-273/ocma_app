const express=require("express");
const app=express();
const mongoose=require("mongoose");

const mongoUrl="mongodb+srv://ocma_app:ocma123@drivesmart.laqpnez.mongodb.net/?retryWrites=true&w=majority&appName=drivesmart"

mongoose.connect(mongoUrl).then(()=> {
    console.log("Database Connected")
}).catch((e)=> {
    console.log(e)
})

require('./userDetails')
const User = mongoose.model("UserInfo");

app.get("/", (req, res)=> {
    res.send({status:"Started"})
})

app.post("/register", async(req, res)=> {
    const {name, email, mobile, password} = req.body;

    const oldUser = await User.findOne({
        email:email
    })

    if(oldUser){
        return res.send({ data: "User already exists! "})
    }

    try {
        await User.create({
            name: name,
            email: email,
            mobile,
            password
        });

        res.send({status: "ok", data: "User Created"})

    } catch (error) {}
});

app.listen(5001, ()=> {
    console.log('Node JS server started')
});