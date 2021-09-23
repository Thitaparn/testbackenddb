module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define(
      "Brand",
      {
        // Model attributes are defined here
        name: {
          type: Sequelize.STRING,
        },
      },
      {}
    );
  
    // `sequelize.define` also returns the model
    console.log("Brand ==> ", Brand === sequelize.models.Brand); // true
    return Brand;
  };