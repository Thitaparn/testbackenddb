module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      // Model attributes are defined here
      sku: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
    },
    {}
  );

  // `sequelize.define` also returns the model
  console.log("Product ==> ", Product === sequelize.models.Product); // true
  return Product;
};
