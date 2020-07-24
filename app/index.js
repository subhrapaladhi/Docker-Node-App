const app = require("express")();
const PORT = process.env.APPID;

app.get("/", (req, res) => res.send(`hello from a lightweight container. App ID = ${PORT}`))

app.listen(9999, ()=>console.log(`server started at port ${PORT}`))
