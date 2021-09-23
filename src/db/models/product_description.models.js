module.exports = (sequelize, Sequelize) => {
    const Description = sequelize.define(
        "Description",
        {
            // Model attributes are defined here
            long: {
              type: Sequelize.TEXT,
            },
            
            short: {
                type: Sequelize.TEXT //before -> STRING
                // allowNull defaults to true
              }
          },
          {
            // Other model options go here
          }
    );
    // `sequelize.define` also returns the model
    console.log("Description ==> ", Description === sequelize.models.Description); // true
    return Description;
};