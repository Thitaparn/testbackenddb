const Sequelize = require("sequelize");
const db = {};

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("projectdb", "proplugin_user", "7sy^&a*@;Nln", {
  host: "185.78.165.11",
  dialect: "mariadb",
  timezone: "+07:00",
  operatorsAliases: false,
  port: 3306,
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
  db.Product = require("./models/product_entities.model")(sequelize, Sequelize);
  db.Price = require("./models/product_price.model")(sequelize, Sequelize);
  db.Color = require("./models/product_color.model")(sequelize, Sequelize);
  db.Brand = require("./models/product_brand.models")(sequelize, Sequelize);
  db.Specialprice = require("./models/product_special_price.models")(sequelize, Sequelize);
  db.Productvalue = require("./models/product_value.models")(sequelize, Sequelize);
  db.Description = require("./models/product_description.models")(sequelize, Sequelize);
  db.Categorise = require("./models/product_categorise.models")(sequelize, Sequelize);
  require("./associations")(db);
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = db;
