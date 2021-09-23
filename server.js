const expres = require("express");
const cors = require("cors");
const RoterHeader = require("./src/routes/header.roter");
const RoterProduct = require("./src/routes/product.router");
const bodyParser = require("body-parser");
const app = expres();
const port = 8080;
const fs = require('fs');
const csv = require('csv-parser');
const ProductService = require("./src/service/product.service");

app.use(bodyParser.json());
app.use(cors());
app.use(RoterHeader);
app.use(RoterProduct);


const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "." + file["originalname"].split(".")[1];
    cb(null, file.originalname + "-" + uniqueSuffix);
  }
})

const upload = multer({ storage: storage })
app.post('/product', upload.single('catalog'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  //console.log(req.file);
  try {
    res.send(req.file);
    let results = []
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on('data', (data) =>  results.push(data))
      .on('end', () => {
   //console.log(results);
   (async function () {
     // console.log(`SHOW :: ${0} ==> `, results[0]);
     for (let i = 0; i < results.length; i++) {
         //console.log("hihi =",results[i]["price"]);   
          //console.log(`SHOW :: ${i} ==> `, results[i]);
          const product = await ProductService.crateProduct({ where: { sku: results[i]["sku"]} || null });
          const price = await ProductService.cratePrice({ value:parseFloat(results[i]["price"])  || null});
          const color = await ProductService.crateColor({  where: { value: results[i].color || null } });
          const brand = await ProductService.crateBrand({ where: { name: results[i].brand || null } });
          const specialprice = await ProductService.crateSpecialprice({ value: results[i].special_price || null });
          const productvalue = await ProductService.crateProductvalue({ name: results[i]['name'] || null, weight: results[i]["weight"] || null });
          const description = await ProductService.crateDescription({ long: results[i].description || null , short: results[i].short_description || null });
          const categorise = await ProductService.crateCategorise({ where: { name: results[i].categories || null  } });   

          
          //console.log(results[i].price);
          console.log(color);
          console.log(categorise);
          // console.log("product ==> ",product[0]);
          console.log(product);
          console.log(brand);
          console.log(price);
          // console.log("productvalue  ==>  ",productvalue);
          console.log(productvalue);
          console.log(description);
          console.log(specialprice);

          product[0].setColor(color[0]);
          product[0].setCategorise(categorise[0]);
          product[0].setBrand(brand[0]);
          price.setProduct(product[0]);
          productvalue.setProduct(product[0]);
          description.setProduct(product[0]);
          specialprice.setProduct(product[0]);
        }
      })();
  });

  }catch(err) {
    res.sendStatus(400);
  }
});


const db = require("./src/db/connect");
const { Productvalue } = require("./src/db/connect");
// force: true will drop the table if it already exists
db.sequelize.sync({ force: true, alter: true }).then(() => {
  console.log("Drop and Resync with { alter: true }");
});

app.listen(port, () => {
  console.log(`Server listening port ${port}`);
});
