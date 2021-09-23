module.exports = (sequelize, Sequelize) => {
  const Price = sequelize.define(
    "Price",
    {
      // Model attributes are defined here
      value: {
        type: Sequelize.DOUBLE,
      },
    },
    {}
  );

  // `sequelize.define` also returns the model
  console.log("Price ==> ", Price === sequelize.models.Price); // true
  return Price;
};
