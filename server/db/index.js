//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Category = require('./models/Category')
const Brand = require('./models/Brand')
const Color = require('./models/Color')
const Temperature = require('./models/Temperature')
const CatTemp = require('./models/CatTemp')

//associations could go here!
User.hasMany(Product);
Brand.hasMany(Product);
Category.hasMany(Product);
CatTemp.belongsTo(Category);
CatTemp.belongsTo(Temperature);
Color.hasMany(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Brand,
    Color,
    Temperature,
    CatTemp
  }
}
