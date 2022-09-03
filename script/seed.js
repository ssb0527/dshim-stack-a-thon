'use strict'

const {db, models: { User, Product, Category, Color, Temperature, Brand, CatTemp, Closet } } = require('../server/db');

const readFile = path => {
  return new Promise((resolve, reject) => {
    require('fs').readFile(path, 'base64', (err, res) => {
      if(err){
        reject(err);
      }
      else {
        resolve(res);
      }
    })
  });
}

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const [ cody, murphy, david ] = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
    User.create({ username: 'david', password: '123' })
  ])

  // Creating Brands
  const [ nike, acneStudios, cos, bottegaVeneta ] = await Promise.all([
    Brand.create({ name: 'Nike', link: 'https://www.nike.com/', image: await readFile('./public/images/brands/nike logo.png') }),
    Brand.create({ name: 'Acne Studios', link: 'https://www.acnestudios.com/us/en/home', image: await readFile('./public/images/brands/acne studios logo.png') }),
    Brand.create({ name: 'COS', link: 'https://www.cos.com/en_usd/index.html', image: await readFile('./public/images/brands/cos logo.png') }),
    Brand.create({ name: 'Bottega Veneta', link: 'https://www.bottegaveneta.com/en-us', image: await readFile('./public/images/brands/bottega veneta logo.png') }),
  ])

  // Creating Categories
  const [ 
    sweatersCardigans, 
    pants, 
    tShirts,
    shirts, 
    shorts, 
    sweatshirtsHoodies, 
    jeans, 
    blazers, 
    coats, 
    trenchCoats, 
    denimJackets,
    downJackets,
    shearlingJackets,
    leatherJackets,
    bombers,
    boots,
    laceUps,
    sandals,
    sneakers
  ] = await Promise.all(
    [
      'Sweaters & Cardigans',
      'Pants',
      'T-Shirts',
      'Shirts',
      'Shorts',
      'Sweatshirts & Hoodies',
      'Jeans',
      'Blazers',
      'Coats',
      'Trench Coats',
      'Denim Jackets',
      'Down Jackets',
      'Shearling Jackets',
      'Leather Jackets',
      'Bombers',
      'Boots',
      'Lace-Ups',
      'Sandals',
      'Sneakers'
    ].map(name => Category.create({ name }))
  );

  // Creating Temperatures
  const [
    eightyTwoOrHigher,
    seventyThreeToEightyOne,
    sixtyEightToSeventyTwo,
    sixtyThreeToSixtySeven,
    fiftyFourToSixtyTwo,
    fourtyEightToFiftyThree,
    fourtyOneToFourtySeven,
    fourtyOrLower
  ] = await Promise.all(
    [
      '82°F or higher',
      '73-81°F',
      '68-72°F',
      '63-67°F',
      '54-62°F',
      '48-53°F',
      '41-47°F',
      '40°F or lower'
    ].map(range => Temperature.create({ range }))
  );

  await Promise.all([
    CatTemp.create({ categoryId: sweatersCardigans.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: sweatersCardigans.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: sweatersCardigans.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: sweatersCardigans.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: sweatersCardigans.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: pants.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: pants.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: pants.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: pants.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: pants.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: pants.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: pants.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: tShirts.id, temperatureId: eightyTwoOrHigher.id }),
    CatTemp.create({ categoryId: tShirts.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: tShirts.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: tShirts.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: tShirts.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: shirts.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: shirts.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: shorts.id, temperatureId: eightyTwoOrHigher.id }),
    CatTemp.create({ categoryId: shorts.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: shorts.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: shorts.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: sweatshirtsHoodies.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: sweatshirtsHoodies.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: sweatshirtsHoodies.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: sweatshirtsHoodies.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: sweatshirtsHoodies.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: jeans.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: jeans.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: jeans.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: jeans.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: jeans.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: jeans.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: jeans.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: blazers.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: blazers.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: coats.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: trenchCoats.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: denimJackets.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: downJackets.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: shearlingJackets.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: leatherJackets.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: leatherJackets.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: bombers.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: bombers.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: boots.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: boots.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: boots.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: laceUps.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: laceUps.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: laceUps.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: laceUps.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: laceUps.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: sandals.id, temperatureId: eightyTwoOrHigher.id }),
    CatTemp.create({ categoryId: sandals.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: sneakers.id, temperatureId: eightyTwoOrHigher.id }),
    CatTemp.create({ categoryId: sneakers.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: sneakers.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: sneakers.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: sneakers.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: sneakers.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: sneakers.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: sneakers.id, temperatureId: fourtyOrLower.id })
  ])

  // Creating Colors
  const [
    black,
    blue,
    brown,
    burgundy,
    grey,
    green,
    navy,
    orange,
    pink,
    purple,
    red,
    beige,
    white,
    yellow
  ] = await Promise.all(
    [
      'Black',
      'Blue',
      'Brown',
      'Burgundy',
      'Grey',
      'Green',
      'Navy',
      'Orange',
      'Pink',
      'Purple',
      'Red',
      'Beige',
      'White',
      'Yellow'
    ].map(name => Color.create({ name }))
  );

  // Creating Closets
  const davidCloset = await Closet.create({ userId: david.id })

  // Creating Products
  const products = await Promise.all([
    Product.create({ name: 'Acne Studios Black Leather Shearling Jacket', image: await readFile('./public/images/products/acne studios shearling jacket.png'), closetId: davidCloset.id, brandId: acneStudios.id, categoryId: shearlingJackets.id, colorId: black.id }),
    Product.create({ name: 'COS Black Sweater', image: await readFile('./public/images/products/cos black sweater.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: sweatersCardigans.id, colorId: black.id }),
    Product.create({ name: 'COS Black Jeans', image: await readFile('./public/images/products/cos black jeans.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: jeans.id, colorId: black.id }),
    Product.create({ name: 'Bottega Veneta Black Lug Chelsea Boots', image: await readFile('./public/images/products/bottega veneta lug chelsea boots.png'), closetId: davidCloset.id, brandId: bottegaVeneta.id, categoryId: boots.id, colorId: black.id }),
    Product.create({ name: 'Bottega Veneta Beige Trench Coat', image: await readFile('./public/images/products/bottega veneta beige trench coat.png'), closetId: davidCloset.id, brandId: bottegaVeneta.id, categoryId: trenchCoats.id, colorId: beige.id })
  ])

  // console.log(`seeded ${users.length} users`)
  // console.log(`seeded ${brands.length} brands`)
  // console.log(`seeded ${categories.length} categories`)
  // console.log(`seeded ${temperatures.length} temperatures`)
  // console.log(`seeded ${colors.length} colors`)
  console.log(`seeded successfully`)
  return {
    users: { 
      cody, murphy, david
    },
    brands: {
      nike, acneStudios, cos, bottegaVeneta
    },
    categories: { 
      sweatersCardigans, pants, tShirts, shirts, shorts, sweatshirtsHoodies, jeans, blazers, coats, trenchCoats, denimJackets, downJackets, shearlingJackets, leatherJackets, bombers, boots, laceUps, sandals, sneakers
    },
    colors: { 
        black, blue, brown, burgundy, grey, green, navy, orange, pink, purple, red, beige, white, yellow
    },
    temperatures: {
      eightyTwoOrHigher, seventyThreeToEightyOne, sixtyEightToSeventyTwo, sixtyThreeToSixtySeven, fiftyFourToSixtyTwo, fourtyEightToFiftyThree, fourtyOneToFourtySeven, fourtyOrLower
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
