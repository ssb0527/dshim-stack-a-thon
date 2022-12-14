const Sequelize = require('sequelize')
const { STRING } = Sequelize;
const db = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const axios = require('axios');
const Closet = require('./Closet');
const Product = require('./Product');
const Color = require('./Color');
const Category = require('./Category');
const Temperature = require('./Temperature');
const Family = require('./Family');
const Brand = require('./Brand');
const Look = require('./Look');

const SALT_ROUNDS = 5;

const User = db.define('user', {
  username: {
    type: STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: STRING
  }
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function(candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
}

User.prototype.generateToken = function() {
  return jwt.sign({id: this.id}, process.env.JWT)
}

User.prototype.getCloset = async function() {
  let closet = await Closet.findOne({
    where: {
      userId: this.id
    },
    include: [
      {
        model: Product,
        include: [ 
          {
            model: Color
          },
          {
            model: Brand
          },
          {
            model: Category,
            include: [ Family ]
          } 
        ]
      }
    ]
  })
  if(!closet) {
    closet = await Closet.create({ userId: this.id })
    closet = await Closet.findByPk(closet.id, {
      include: [ Product ]
    })
  }
  return closet;
}

User.prototype.getLooks = async function() {
  let looks = await Look.findAll({
    where: {
      userId: this.id
    },
    order: [
      ['id', 'ASC']
    ]
  })
  return looks;
}

User.prototype.saveLook = async function(look) {
  return await Look.create({ ...look, userId: this.id });
}

User.prototype.deleteLook = async function(lookId) {
  const look = await Look.findByPk(lookId)
  await look.destroy();
  return
}

User.prototype.addItemToCloset = async function(product) {
  const closet = await this.getCloset();
  if(product.id) {
    let item = await Product.findOne({
      where: {
        id: product.id,
        closetId: closet.id
      }
    });
    if(
      product.name === item.name && 
      product.image === item.image && 
      product.brandId === item.brandId && 
      product.categoryId === item.categoryId && 
      product.colorId === item.colorId
      ) {
      await item.destroy()
    } else {
      await item.update(product);
    }
  } else {
    await Product.create({ ...product, closetId: closet.id });
  }
  return this.getCloset();
}

// User.prototype.addItemToCloset = async function(product) {
//   const closet = await this.getCloset();
//   await Product.create({ ...product, closetId: closet.id });
//   return this.getCloset();
// }

/**
 * classMethods
 */
User.authenticate = async function({ username, password }){
    const user = await this.findOne({where: { username }})
    if (!user || !(await user.correctPassword(password))) {
      const error = Error('Incorrect username/password');
      error.status = 401;
      throw error;
    }
    return user.generateToken();
};

User.findByToken = async function(token) {
  try {
    const {id} = await jwt.verify(token, process.env.JWT)
    const user = User.findByPk(id)
    if (!user) {
      throw 'nooo'
    }
    return user
  } catch (ex) {
    const error = Error('bad token')
    error.status = 401
    throw error
  }
}

/**
 * hooks
 */
const hashPassword = async(user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
}

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)
User.beforeBulkCreate(users => Promise.all(users.map(hashPassword)))
