const expres = require("express");
const router = expres.Router();
const app = expres();
const Product = require("../controller/product.controller");


router.post("/create", Product.Create);
router.get("/get", Product.GetProduct);
router.put("/update/:name", Product.upadte);
router.delete("/delete/:name", Product.delete);

app.use("/product", router);

module.exports = app;
