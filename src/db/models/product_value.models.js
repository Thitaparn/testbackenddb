module.exports = (sequelize, Sequelize) => {
    const Productvalue = sequelize.define(
        "Productvalue",
        {
            // Model attributes are defined here
            name: {
              type: Sequelize.STRING,
            },
            weight: {
                type: Sequelize.FLOAT 
                // allowNull defaults to true
              }
          },
          {
            // Other model options go here
          }
    );
    // `sequelize.define` also returns the model
    console.log("Productvalue ==> ", Productvalue === sequelize.models.Productvalue); // true
    return Productvalue;
};