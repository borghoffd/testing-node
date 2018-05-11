const express = require("express");

let app = express();

app.get("/", (req,res) => {
    res.status(404).send({
        error: "Page not found.",
        name: "Todo App v1.0"
    });
});

app.get("/users", (req, res) => {
   res.send([
       {name: "Dennis", age: 27},
       {name: "Peter", age: 12},
       {name: "Juan", age: 69}
   ]);
});

app.listen(3000);

module.exports.app = app;
