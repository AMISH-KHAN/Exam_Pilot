const express = require("express")

const app = express() 



const PORT=8000||process.env.PORT

app.get("/", (req, res) => {
    res.send("hellp")
})

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
