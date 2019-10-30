const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.port || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./routes/bookType.route")(app);

app.get("/", (req, res) => {
    res.json({ message: "Kiểm tra API thành công!" });
});

app.listen(port, () => {
    console.log("Server đang chạy tại cổng: ", port);
});

