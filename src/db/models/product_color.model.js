module.exports = (sequelize, Sequelize) => {
  const Color = sequelize.define(
    "Color",
    {
      // Model attributes are defined here
      value: {
        type: Sequelize.STRING,
      },
    },
    {}
  );

  // `sequelize.define` also returns the model
  console.log("Color ==> ", Color === sequelize.models.Color); // true
  return Color;
};
