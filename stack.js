let express = require("express");
let app     = express();
let body =require('body-parser');
let route=express.Router();
let stack   = [];
app.use(body.text({type:"*/*"}));

route.post("/", (req, res, next) => {
    // let buffer = "";

    // req.on("data", (data) => {
    //     buffer += data;
    // });
    // req.on("end", () => {
    //     stack.push(buffer);
    //     return next();
    // });

    stack.push(req.body);
});

route.delete("/", (req, res, next) => {
    stack.pop();
    return next();
});

app.get("/:index", (req, res) => {
    if (req.params.index >= 0 && req.params.index < stack.length)
    return res.end("" + stack[req.params.index])
    res.status(404).end();
});
app.use("/", (req, res) => {
    res.send(stack);
});
app.use("/stack",route);
app.listen(3000);