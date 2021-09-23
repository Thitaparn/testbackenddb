const { Productvalue } = require("../db/connect");
const ProductService = require("../service/product.service");

exports.GetProduct = (req, res) => {
  try {
    res.status(200).json({ data: product });
  } catch (error) {
    console.error(error);
  }
};

exports.Create = async (req, res) => {
  const data = req.body;
  try {
    console.log("data => ", data);
    const product = await ProductService.crateProduct({sku: data["sku"] });
    const price = await ProductService.cratePrice({ value: data.price }); 
    const color = await ProductService.crateColor({  where: { value: data.color  } });
    const brand = await ProductService.crateBrand({ where: { name: data.brand   } });
    const specialprice = await ProductService.crateSpecialprice({ value: data.specialprice });
    const productvalue = await ProductService.crateProductvalue({ name: data.name ,  weight: data.weight  });
    const description = await ProductService.crateDescription({ long: data.description  , short: data.short_description  });
    const categorise = await ProductService.crateCategorise({ where: { name: data.categories  } });

    console.log(product);
    console.log(price);
    console.log(color);
    console.log(brand);
    console.log(specialprice);
    console.log(productvalue);
    console.log(description);
    console.log(categorise);
    
    price.setProduct(product[0]);
    product.setColor(color[0]);
    product.setBrand(brand[0]);
    specialprice.setProduct(product[0]);
    productvalue.setProduct(product[0]);
    description.setProduct(product[0]);
    product.setCategorise(categorise[0]);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error(error);
  }
};

exports.delete = async (req, res) => {
  const name = req.params.name;
  try {
    if (product.length > 0) {
      const result = await product.filter((item) => {
        return item.product.name !== name;
      });
      product = result;
      res.status(200).json({ message: "success" });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.upadte = async (req, res) => {
  const name = req.params.name;
  const data = req.body;
  try {
    const result = await product.filter((item) => {
      return item.product.name !== name;
    });
    result = [...product, data];
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error(error);
  }
};
