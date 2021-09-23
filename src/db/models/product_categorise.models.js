module.exports = (sequelize, Sequelize) => {
    const Categorise = sequelize.define(
      "Categorise",
     {
        // Model attributes are defined here
        name: {
          type: Sequelize.TEXT,
        },
      },
      {}
      //{ name: Sequelize.STRING }
    );
  
    // `sequelize.define` also returns the model
    console.log("Categorise ==> ", Categorise === sequelize.models.Categorise); // true
    return Categorise;
  };