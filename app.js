const {EventEmitter} = require("events")
const fs = require("fs").promises

const events = new EventEmitter()

const login = async function (data) {
    const users = JSON.parse(await fs.readFile("./users.json"))

    const user = users.find(
        (u) => u.username === data.username && u.password === data.password
    );
     if(!user) return console.log("bunday foydalanuvchi yoq");

     console.log("siz kirdingiz");
}


events.on("login", login)

events.emit("login", {username: "username", password: "password"})
