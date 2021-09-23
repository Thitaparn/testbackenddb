const db = require("../db/connect");

const Product = db["Product"];
const Price = db["Price"];
const Color = db["Color"];
const Brand = db["Brand"];
const Specialprice = db["Specialprice"];
const Productvalue = db["Productvalue"];
const Description = db["Description"];
const Categorise = db["Categorise"];

exports.crateProduct = (payload) => {
  try {
    return new Promise((resolve, reject) => {
      Product.findOrCreate(payload).then(resolve).catch(reject);
    });
  } catch (error) {
    console.error(error);
  }
};

exports.cratePrice = (payload) => {
  try {
    return new Promise((resolve, reject) => {
      Price.create(payload).then(resolve).catch(reject);
    });
  } catch (error) {
    console.error(error);
  }
};

exports.crateColor = (payload) => {
  try {
    return new Promise((resolve, reject) => {
      Color.findOrCreate(payload).then(resolve).catch(reject);
    });
  } catch (error) {
    console.error(error);
  }
};

exports.crateBrand = (payload) => {
  try {
    return new Promise((resolve, reject) => {
      Brand.findOrCreate(payload).then(resolve).catch(reject);
    });
  } catch (error) {
    console.error(error);
  }
}; 

exports.crateSpecialprice = (payload) => {
  try {
    return new Promise((resolve, reject) => {
      Specialprice.create(payload).then(resolve).catch(reject);
    });
  } catch (error) {
    console.error(error);
  }
};

exports.crateProductvalue = (payload) => {
  try {
    return new Promise((resolve, reject) => {
      Productvalue.create(payload).then(resolve).catch(reject);
    });
  } catch (error) {
    console.error(error);
  }
};

exports.crateDescription = (payload) => {
  try {
    return new Promise((resolve, reject) => {
      Description.create(payload).then(resolve).catch(reject);
    });
  } catch (error) {
    console.error(error);
  }
};

exports.crateCategorise = (payload) => {
  try {
    return new Promise((resolve, reject) => {
      Categorise.findOrCreate(payload).then(resolve).catch(reject); //findOrCreate
    });
  } catch (error) {
    console.error(error);
  }
};  