module.exports = (sequelize, Sequelize) => {
    const Specialprice = sequelize.define(
      "Specialprice",
      {
        // Model attributes are defined here
        value: {
          type: Sequelize.DOUBLE,
        },
      },
      {}
    );
  
    // `sequelize.define` also returns the model
    console.log("Specialprice ==> ", Specialprice === sequelize.models.Specialprice); // true
    return Specialprice;
  };