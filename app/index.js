const app = require("express")();
const PORT = process.env.APPID||9999;

app.get("/", (req, res) => res.send(`hello from a lightweight container. App ID = ${PORT}`))

app.get("/admin", (req, res) => res.send(`admin page. App ID = ${PORT}`))

app.get("/:appno", (req, res) => res.send(`this is ${req.params.appno}. App ID = ${PORT}`))

app.listen(9999, ()=>console.log(`server started at port ${PORT}`))
