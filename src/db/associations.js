const { Brand } = require("./connect");

module.exports = (db) => {
  const Product = db["Product"];
  const Price = db["Price"];
  const Color = db["Color"];
  const Brand = db["Brand"];
  const Specialprice = db["Specialprice"];
  const Productvalue = db["Productvalue"];
  const Description = db["Description"];
  const Categorise = db["Categorise"];

  /** Relationship One - to - One [Product, Price]*/
  Product.hasOne(Price);
  Price.belongsTo(Product);

  /**
   * Relationship Many - to - One [Color, Product]
   */
  Color.hasMany(Product);
  Product.belongsTo(Color);

  /** Many - to - One [Brand, Product] */
  Brand.hasMany(Product);
  Product.belongsTo(Brand);

  /** One - to - One [Product, Specialprice] */
  Product.hasOne(Specialprice);
  Specialprice.belongsTo(Product);

  /** One - to - One [Product, Productvalue] */
  Product.hasOne(Productvalue);
  Productvalue.belongsTo(Product);

  /** One - to - One [Product, Description] */
  Product.hasOne(Description);
  Description.belongsTo(Product);

  /** Many - to - One [Categorise, Product]  */
  //Product.hasMany(Categorise); //One to Many
  //Categorise.belongsTo(Product);

  Categorise.hasMany(Product);
  Product.belongsTo(Categorise);
};
