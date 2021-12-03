const exspress = require("express");
const cors = require("cors");

const app = exspress();

var corsOption = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOption));

app.use(exspress.json());

app.use(exspress.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to JayenTara" })
});

require("./app/routes/tutorial.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});