const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 5000;

app.use(cors())

app.get("/", (req, res) => {
    res.send("code tutor server is running")
})

app.listen(port, () => {
    console.log(`Code Tutor server running on port ${port}`);
})