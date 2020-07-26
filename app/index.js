const app = require("express")();
const PORT = process.env.APPID||9999;

app.get("/", (req, res) => res.send(`hello from a lightweight container. App ID = ${PORT}`))

app.get("/admin", (req, res) => res.send(`admin page. App ID = ${PORT}`))

app.get("/app1", (req, res) => res.send(`this is app1. App ID = ${PORT}`))

app.get("/app2", (req, res) => res.send(`this is app2. App ID = ${PORT}`))

app.listen(9999, ()=>console.log(`server started at port ${PORT}`))
