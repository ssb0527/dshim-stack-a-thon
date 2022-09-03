//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Category = require('./models/Category')
const Brand = require('./models/Brand')
const Color = require('./models/Color')
const Temperature = require('./models/Temperature')
const CatTemp = require('./models/CatTemp')
const Closet = require('./models/Closet')
const Family = require('./models/Family')

//associations could go here!
Closet.belongsTo(User);
Closet.hasMany(Product);
Brand.hasMany(Product);
Product.belongsTo(Brand);
Category.hasMany(Product);
Product.belongsTo(Category)
CatTemp.belongsTo(Category);
CatTemp.belongsTo(Temperature);
Color.hasMany(Product);
Product.belongsTo(Color);
Family.hasMany(Category);
Category.belongsTo(Family);

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Brand,
    Color,
    Temperature,
    CatTemp,
    Closet,
    Family
  }
}
