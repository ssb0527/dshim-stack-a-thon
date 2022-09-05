'use strict'

const {db, models: { User, Product, Category, Color, Temperature, Brand, CatTemp, Closet, Family, Look } } = require('../server/db');

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
  const [ acw, acneStudios, aderError, adidas, alexanderMcqueen, alexanderWang,
  alphaIndustries, ami, amiri, apc, autry, balenciaga, balmain, bottegaVeneta, burberry, calvinKlein, canadaGoose, celine,
  chloe, commeDesGarcons, cos, diesel, dior, driesVanNoten, fearOfGod, fendi, givenchy, goldenGoose, gucci, hm,
  helmutLang, hermes, isabelMarant, jacquemus, jilSander, juunJ, ksubi, lemaire, levis, loewe, louisVuitton,
  maisonKitsune, maisonMargiela, marni, mcm, moncler, monse, newBalance, nike, ourLegacy, palmAngels, prada,
  puma, rafSimons, ragAndBone, rickOwens, saintLaurent, stu, stussy, supreme, thomBrowne, uniqlo, vans, vetements,
  wooyoungmi, yProject, zara, zegna ] = await Promise.all([
    Brand.create({ name: 'A-Cold-Wall', link: 'https://a-cold-wall.com/', image: await readFile('./public/images/brands/a cold wall logo.png') }),
    Brand.create({ name: 'Acne Studios', link: 'https://www.acnestudios.com/us/en/home', image: await readFile('./public/images/brands/acne studios logo.png') }),
    Brand.create({ name: 'Ader Error', link: 'https://en.adererror.com/', image: await readFile('./public/images/brands/ader error logo.png') }),
    Brand.create({ name: 'Adidas', link: 'https://www.adidas.com/us', image: await readFile('./public/images/brands/adidas logo.png') }),
    Brand.create({ name: 'Alexander Mcqueen', link: 'https://www.alexandermcqueen.com/en-us', image: await readFile('./public/images/brands/alexander mcqueen logo.png') }),
    Brand.create({ name: 'Alexander Wang', link: 'https://www.alexanderwang.com/us-en/', image: await readFile('./public/images/brands/alexander wang logo.png') }),
    Brand.create({ name: 'Alpha Industries', link: 'https://www.alphaindustries.com/', image: await readFile('./public/images/brands/alpha industries logo.png') }),
    Brand.create({ name: 'AMI', link: 'https://www.amiparis.com/us/', image: await readFile('./public/images/brands/ami logo.png') }),
    Brand.create({ name: 'Amiri', link: 'https://amiri.com/', image: await readFile('./public/images/brands/amiri logo.png') }),
    Brand.create({ name: 'A.P.C.', link: 'https://www.apc-us.com/', image: await readFile('./public/images/brands/apc logo.png') }),
    Brand.create({ name: 'Autry', link: 'https://www.autry-usa.com/en/', image: await readFile('./public/images/brands/autry logo.png') }),
    Brand.create({ name: 'Balenciaga', link: 'https://www.balenciaga.com/en-us', image: await readFile('./public/images/brands/balenciaga logo.png') }),
    Brand.create({ name: 'Balmain', link: 'https://us.balmain.com/en', image: await readFile('./public/images/brands/balmain logo.png') }),
    Brand.create({ name: 'Bottega Veneta', link: 'https://www.bottegaveneta.com/en-us', image: await readFile('./public/images/brands/bottega veneta logo.png') }),
    Brand.create({ name: 'Burberry', link: 'https://us.burberry.com/', image: await readFile('./public/images/brands/burberry logo.png') }),
    Brand.create({ name: 'Calvin Klein', link: 'https://www.calvinklein.us/en', image: await readFile('./public/images/brands/calvin klein logo.png') }),
    Brand.create({ name: 'Canada Goose', link: 'https://www.canadagoose.com/us/en/home-page', image: await readFile('./public/images/brands/canada goose logo.png') }),
    Brand.create({ name: 'Celine', link: 'https://www.celine.com/en-us/home', image: await readFile('./public/images/brands/celine logo.png') }),
    Brand.create({ name: 'Chloe', link: 'https://www.chloe.com/us', image: await readFile('./public/images/brands/chloe logo.png') }),
    Brand.create({ name: 'Comme Des Garcons', link: 'https://www.comme-des-garcons.com/', image: await readFile('./public/images/brands/comme des garcons logo.png') }),
    Brand.create({ name: 'COS', link: 'https://www.cos.com/en_usd/index.html', image: await readFile('./public/images/brands/cos logo.png') }),
    Brand.create({ name: 'Diesel', link: 'https://shop.diesel.com/en/', image: await readFile('./public/images/brands/diesel logo.png') }),
    Brand.create({ name: 'Dior', link: 'https://www.dior.com/en_us', image: await readFile('./public/images/brands/dior logo.png') }),
    Brand.create({ name: 'Dries Van Noten', link: 'https://us.driesvannoten.com/', image: await readFile('./public/images/brands/dries van noten logo.png') }),
    Brand.create({ name: 'Fear Of God', link: 'https://fearofgod.com/', image: await readFile('./public/images/brands/fear of god logo.png') }),
    Brand.create({ name: 'Fendi', link: 'https://www.fendi.com/us-en', image: await readFile('./public/images/brands/fendi logo.png') }),
    Brand.create({ name: 'Givenchy', link: 'https://www.givenchy.com/us/en-US/homepage', image: await readFile('./public/images/brands/givenchy logo.png') }),
    Brand.create({ name: 'Golden Goose', link: 'https://www.goldengoose.com/us/en', image: await readFile('./public/images/brands/golden goose logo.png') }),
    Brand.create({ name: 'Gucci', link: 'https://www.gucci.com/us/en/', image: await readFile('./public/images/brands/gucci logo.png') }),
    Brand.create({ name: 'H&M', link: 'https://www2.hm.com/en_us/index.html', image: await readFile('./public/images/brands/h&m logo.png') }),
    Brand.create({ name: 'Helmut Lang', link: 'https://www.helmutlang.com/', image: await readFile('./public/images/brands/helmut lang logo.png') }),
    Brand.create({ name: 'Hermes', link: 'https://www.hermes.com/us/en/', image: await readFile('./public/images/brands/hermes logo.png') }),
    Brand.create({ name: 'Isabel Marant', link: 'https://www.isabelmarant.com/us', image: await readFile('./public/images/brands/isabel marant logo.png') }),
    Brand.create({ name: 'Jacquemus', link: 'https://www.jacquemus.com/en_fr', image: await readFile('./public/images/brands/jacquemus logo.png') }),
    Brand.create({ name: 'Jil Sander', link: 'https://www.jilsander.com/en-us/home', image: await readFile('./public/images/brands/jil sander logo.png') }),
    Brand.create({ name: 'Juun.J', link: 'http://www.juunj.com/main.jsp', image: await readFile('./public/images/brands/juun j logo.png') }),
    Brand.create({ name: 'Ksubi', link: 'https://ksubi.com/', image: await readFile('./public/images/brands/ksubi logo.png') }),
    Brand.create({ name: 'Lemaire', link: 'https://us.lemaire.fr/', image: await readFile('./public/images/brands/lemaire logo.png') }),
    Brand.create({ name: "Levi's", link: 'https://www.levi.com/US/en_US/', image: await readFile('./public/images/brands/levis logo.png') }),
    Brand.create({ name: 'Loewe', link: 'https://www.loewe.com/usa/en/home', image: await readFile('./public/images/brands/loewe logo.png') }),
    Brand.create({ name: 'Louis Vuitton', link: 'https://us.louisvuitton.com/eng-us/homepage', image: await readFile('./public/images/brands/louis vuitton logo.png') }),
    Brand.create({ name: 'Maison Kitsune', link: 'https://maisonkitsune.com/us/', image: await readFile('./public/images/brands/maison kitsune logo.png') }),
    Brand.create({ name: 'Maison Margiela', link: 'https://www.maisonmargiela.com/en-us/', image: await readFile('./public/images/brands/maison margiela logo.png') }),
    Brand.create({ name: 'Marni', link: 'https://www.marni.com/en-us/', image: await readFile('./public/images/brands/marni logo.png') }),
    Brand.create({ name: 'MCM', link: 'https://us.mcmworldwide.com/en_US/home', image: await readFile('./public/images/brands/mcm logo.png') }),
    Brand.create({ name: 'Moncler', link: 'https://www.moncler.com/en-us/', image: await readFile('./public/images/brands/moncler logo.png') }),
    Brand.create({ name: 'Monse', link: 'https://monse.com/', image: await readFile('./public/images/brands/monse logo.png') }),
    Brand.create({ name: 'New Balance', link: 'https://www.newbalance.com/', image: await readFile('./public/images/brands/new balance logo.png') }),
    Brand.create({ name: 'Nike', link: 'https://www.nike.com/', image: await readFile('./public/images/brands/nike logo.png') }),
    Brand.create({ name: 'Our Legacy', link: 'https://www.ourlegacy.com/', image: await readFile('./public/images/brands/our legacy logo.png') }),
    Brand.create({ name: 'Palm Angels', link: 'https://www.palmangels.com/en-us/', image: await readFile('./public/images/brands/palm angels logo.png') }),
    Brand.create({ name: 'Prada', link: 'https://www.prada.com/us/en.html', image: await readFile('./public/images/brands/prada logo.png') }),
    Brand.create({ name: 'Puma', link: 'https://us.puma.com/us/en', image: await readFile('./public/images/brands/puma logo.png') }),
    Brand.create({ name: 'Raf Simons', link: 'https://rafsimons.com/', image: await readFile('./public/images/brands/raf simons logo.png') }),
    Brand.create({ name: 'rag & bone', link: 'https://www.rag-bone.com/', image: await readFile('./public/images/brands/rag and bone logo.png') }),
    Brand.create({ name: 'Rick Owens', link: 'https://www.rickowens.eu/en/US/men', image: await readFile('./public/images/brands/rick owens logo.png') }),
    Brand.create({ name: 'Saint Laurent', link: 'https://www.ysl.com/en-us', image: await readFile('./public/images/brands/saint laurent logo.png') }),
    Brand.create({ name: 'SaTurday of Us', link: 'https://stuoffice.com/', image: await readFile('./public/images/brands/stu logo.png') }),
    Brand.create({ name: 'Stussy', link: 'https://www.stussy.com/', image: await readFile('./public/images/brands/stussy logo.png') }),
    Brand.create({ name: 'Supreme', link: 'https://www.supremenewyork.com/', image: await readFile('./public/images/brands/supreme logo.png') }),
    Brand.create({ name: 'Thom Browne', link: 'https://www.thombrowne.com/us/', image: await readFile('./public/images/brands/thom browne logo.png') }),
    Brand.create({ name: 'Uniqlo', link: 'https://www.uniqlo.com/us/en/', image: await readFile('./public/images/brands/uniqlo logo.png') }),
    Brand.create({ name: 'Vans', link: 'https://www.vans.com/en-us', image: await readFile('./public/images/brands/vans logo.png') }),
    Brand.create({ name: 'Vetements', link: 'https://vetementswebsite.com/', image: await readFile('./public/images/brands/vetements logo.png') }),
    Brand.create({ name: 'Wooyoungmi', link: 'https://en.wooyoungmi.com/', image: await readFile('./public/images/brands/wooyoungmi logo.png') }),
    Brand.create({ name: 'Y Project', link: 'https://www.yproject.fr/', image: await readFile('./public/images/brands/y project logo.png') }),
    Brand.create({ name: 'Zara', link: 'https://www.zara.com/us/', image: await readFile('./public/images/brands/zara logo.png') }),
    Brand.create({ name: 'Zegna', link: 'https://www.zegna.com/us-en/', image: await readFile('./public/images/brands/zegna logo.png') })
  ])

  // Creating Families
  const [
    outerwear,
    tops,
    bottoms,
    shoes,
    hats,
    bags,
    socks,
    scarves
  ] = await Promise.all([
    'Outerwear',
    'Tops',
    'Bottoms',
    'Shoes',
    'Hats',
    'Bags',
    'Socks',
    'Scarves'
  ].map(name => Family.create({ name }))
  );

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
    sneakers,
    bucketHats,
    caps,
    beanies,
    backpacks,
    messengerBags,
    toteBags,
    _socks,
    _scarves
  ] = await Promise.all(
    [
      { name: 'Sweaters & Cardigans', familyId: tops.id },
      { name: 'Pants', familyId: bottoms.id },
      { name: 'T-Shirts', familyId: tops.id },
      { name: 'Shirts', familyId: tops.id },
      { name: 'Shorts', familyId: bottoms.id },
      { name: 'Sweatshirts & Hoodies', familyId: tops.id },
      { name: 'Jeans', familyId: bottoms.id },
      { name: 'Blazers', familyId: outerwear.id },
      { name: 'Coats', familyId: outerwear.id },
      { name: 'Trench Coats', familyId: outerwear.id },
      { name: 'Denim Jackets', familyId: outerwear.id },
      { name: 'Down Jackets', familyId: outerwear.id },
      { name: 'Shearling Jackets', familyId: outerwear.id },
      { name: 'Leather Jackets', familyId: outerwear.id },
      { name: 'Bombers', familyId: outerwear.id },
      { name: 'Boots', familyId: shoes.id },
      { name: 'Lace-Ups', familyId: shoes.id },
      { name: 'Sandals', familyId: shoes.id },
      { name: 'Sneakers', familyId: shoes.id },
      { name: 'Bucket Hats', familyId: hats.id },
      { name: 'Caps', familyId: hats.id },
      { name: 'Beanies', familyId: hats.id },
      { name: 'Backpacks', familyId: bags.id },
      { name: 'Messenger Bags', familyId: bags.id },
      { name: 'Tote Bags', familyId: bags.id },
      { name: 'Socks', familyId: socks.id },
      { name: 'Scarves', familyId: scarves.id }
    ].map(category => Category.create(category))
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
      { range: '82°F or higher', id: 1 },
      { range: '73-81°F', id: 2 },
      { range: '68-72°F', id: 3 },
      { range: '63-67°F', id: 4 },
      { range: '54-62°F', id: 5 },
      { range: '48-53°F', id: 6 },
      { range: '41-47°F', id: 7 },
      { range: '40°F or lower', id: 8 }
    ].map(temperature => Temperature.create(temperature))
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
    CatTemp.create({ categoryId: sneakers.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: bucketHats.id, temperatureId: eightyTwoOrHigher.id }),
    CatTemp.create({ categoryId: bucketHats.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: bucketHats.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: bucketHats.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: bucketHats.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: bucketHats.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: caps.id, temperatureId: eightyTwoOrHigher.id }),
    CatTemp.create({ categoryId: caps.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: caps.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: caps.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: caps.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: caps.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: caps.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: caps.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: beanies.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: beanies.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: beanies.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: beanies.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: backpacks.id, temperatureId: eightyTwoOrHigher.id }),
    CatTemp.create({ categoryId: backpacks.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: backpacks.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: backpacks.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: backpacks.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: backpacks.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: backpacks.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: backpacks.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: messengerBags.id, temperatureId: eightyTwoOrHigher.id }),
    CatTemp.create({ categoryId: messengerBags.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: messengerBags.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: messengerBags.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: messengerBags.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: messengerBags.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: messengerBags.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: messengerBags.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: toteBags.id, temperatureId: eightyTwoOrHigher.id }),
    CatTemp.create({ categoryId: toteBags.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: toteBags.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: toteBags.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: toteBags.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: toteBags.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: toteBags.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: toteBags.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: _socks.id, temperatureId: eightyTwoOrHigher.id }),
    CatTemp.create({ categoryId: _socks.id, temperatureId: seventyThreeToEightyOne.id }),
    CatTemp.create({ categoryId: _socks.id, temperatureId: sixtyEightToSeventyTwo.id }),
    CatTemp.create({ categoryId: _socks.id, temperatureId: sixtyThreeToSixtySeven.id }),
    CatTemp.create({ categoryId: _socks.id, temperatureId: fiftyFourToSixtyTwo.id }),
    CatTemp.create({ categoryId: _socks.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: _socks.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: _socks.id, temperatureId: fourtyOrLower.id }),
    CatTemp.create({ categoryId: _scarves.id, temperatureId: fourtyEightToFiftyThree.id }),
    CatTemp.create({ categoryId: _scarves.id, temperatureId: fourtyOneToFourtySeven.id }),
    CatTemp.create({ categoryId: _scarves.id, temperatureId: fourtyOrLower.id }),
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
    Product.create({ name: 'Bottega Veneta Beige Trench Coat', image: await readFile('./public/images/products/bottega veneta beige trench coat.png'), closetId: davidCloset.id, brandId: bottegaVeneta.id, categoryId: trenchCoats.id, colorId: beige.id }),
    Product.create({ name: 'Alexander Wang Grey Hoodie', image: await readFile('./public/images/products/alexander wang grey hoodie.png'), closetId: davidCloset.id, brandId: alexanderWang.id, categoryId: sweatshirtsHoodies.id, colorId: grey.id }),
    Product.create({ name: 'COS Light Blue Jeans', image: await readFile('./public/images/products/cos light blue jeans.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: jeans.id, colorId: blue.id }),
    Product.create({ name: 'Nike Stussy Air Force Sneakers', image: await readFile('./public/images/products/nike stussy air force.png'), closetId: davidCloset.id, brandId: nike.id, categoryId: sneakers.id, colorId: white.id }),
    Product.create({ name: 'COS Black Bucket Hat', image: await readFile('./public/images/products/cos black bucket hat.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: bucketHats.id, colorId: black.id }),
    Product.create({ name: 'COS Natural Large Shoulder Bag', image: await readFile('./public/images/products/cos natural large shoulder bag.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: messengerBags.id, colorId: beige.id }),
    Product.create({ name: 'Uniqlo White Long Socks', image: await readFile('./public/images/products/uniqlo white long socks.png'), closetId: davidCloset.id, brandId: uniqlo.id, categoryId: _socks.id, colorId: white.id }),
    Product.create({ name: 'Uniqlo Black Long Socks', image: await readFile('./public/images/products/uniqlo black long socks.png'), closetId: davidCloset.id, brandId: uniqlo.id, categoryId: _socks.id, colorId: black.id }),
    Product.create({ name: 'Acne Studios Green Chekced Scarf', image: await readFile('./public/images/products/acne studios green checked scarf.png'), closetId: davidCloset.id, brandId: acneStudios.id, categoryId: _scarves.id, colorId: green.id }),
    Product.create({ name: 'Acne Studios Grey Canada Scarf', image: await readFile('./public/images/products/acne studios grey canada scarf.png'), closetId: davidCloset.id, brandId: acneStudios.id, categoryId: _scarves.id, colorId: grey.id }),
    Product.create({ name: 'COS Beige Boucle Knit Cardigan', image: await readFile('./public/images/products/cos beige boucle knit cardigan.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: sweatersCardigans.id, colorId: beige.id }),
    Product.create({ name: 'COS Beige Wide Leg Pants', image: await readFile('./public/images/products/cos beige wide leg pants.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: pants.id, colorId: beige.id }),
    Product.create({ name: 'COS Black Pleated Tote Bag', image: await readFile('./public/images/products/cos black pleated tote bag.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: toteBags.id, colorId: black.id }),
    Product.create({ name: 'COS Black Pleated Wide Leg Pants', image: await readFile('./public/images/products/cos black pleated wide leg pants.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: pants.id, colorId: black.id }),
    Product.create({ name: 'COS Black Rubber Slides', image: await readFile('./public/images/products/cos black rubber slides.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: sandals.id, colorId: black.id }),
    Product.create({ name: 'COS Navy Knit Short Sleeve Shirt', image: await readFile('./public/images/products/cos navy knit shirt.png'), closetId: davidCloset.id, brandId: cos.id, categoryId: tShirts.id, colorId: navy.id })
  ])

  // Creating Looks
  await Promise.all([
    Look.create({ 
      outerwearImage: await readFile('./public/images/products/acne studios shearling jacket.png'), 
      topImage: await readFile('./public/images/products/cos black sweater.png'), 
      bottomImage: await readFile('./public/images/products/cos black jeans.png'), 
      shoeImage: await readFile('./public/images/products/bottega veneta lug chelsea boots.png'),
      sockImage:await readFile('./public/images/products/uniqlo black long socks.png'),
      date: '2022-01-15',
      temperature: '40°F or lower',
      note: 'Snowy day',
      userId: david.id
    }),
    Look.create({ 
      outerwearImage: await readFile('./public/images/products/bottega veneta beige trench coat.png'), 
      topImage: await readFile('./public/images/products/alexander wang grey hoodie.png'), 
      bottomImage: await readFile('./public/images/products/cos light blue jeans.png'), 
      shoeImage: await readFile('./public/images/products/nike stussy air force.png'),
      bagImage: await readFile('./public/images/products/cos natural large shoulder bag.png'),
      sockImage: await readFile('./public/images/products/uniqlo white long socks.png'),
      date: '2022-04-07',
      temperature: '48-53°F',
      note: 'Shopping in soho', 
      userId: david.id
    }),
    Look.create({ 
      hatImage: await readFile('./public/images/products/cos black bucket hat.png'), 
      topImage: await readFile('./public/images/products/cos navy knit shirt.png'), 
      bottomImage: await readFile('./public/images/products/cos black pleated wide leg pants.png'), 
      shoeImage: await readFile('./public/images/products/cos black rubber slides.png'),
      bagImage: await readFile('./public/images/products/cos black pleated tote bag.png'),
      date: '2022-08-14',
      temperature: '48-53°F',
      note: 'Brunch on Sunday', 
      userId: david.id
    })
  ])  

  // console.log(`seeded ${users.length} users`)
  // console.log(`seeded ${brands.length} brands`)
  // console.log(`seeded ${categories.length} categories`)
  // console.log(`seeded ${temperatures.length} temperatures`)
  // console.log(`seeded ${colors.length} colors`)
  console.log(`seeded successfully`)
  // return {
  //   users: { 
  //     cody, murphy, david
  //   },
  //   brands: {
  //     nike, acneStudios, cos, bottegaVeneta
  //   },
  //   categories: { 
  //     sweatersCardigans, pants, tShirts, shirts, shorts, sweatshirtsHoodies, jeans, blazers, coats, trenchCoats, denimJackets, downJackets, shearlingJackets, leatherJackets, bombers, boots, laceUps, sandals, sneakers
  //   },
  //   colors: { 
  //       black, blue, brown, burgundy, grey, green, navy, orange, pink, purple, red, beige, white, yellow
  //   },
  //   temperatures: {
  //     eightyTwoOrHigher, seventyThreeToEightyOne, sixtyEightToSeventyTwo, sixtyThreeToSixtySeven, fiftyFourToSixtyTwo, fourtyEightToFiftyThree, fourtyOneToFourtySeven, fourtyOrLower
  //   }
  // }
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
