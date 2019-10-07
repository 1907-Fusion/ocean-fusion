'use strict'

const db = require('../server/db')
const {User, Question} = require('../server/db/models/')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'stevie@email.com', password: 'meow'}),
    User.create({email: 'dali@email.com', password: 'meow'})
  ])

  const questions = await Promise.all([
    Question.create({
      content:
        "Which ocean's fish populations have taken the hardest hit from overfishing?",
      choices: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
      answer: 'Atlantic'
    }),
    Question.create({
      content: "Where is the world's largest marine sanctuary?",
      choices: [
        'Andaman Islands (Indian Ocean)',
        'Hawaiian Islands (Pacific Ocean)',
        'West Indies (Atlantic Ocean)',
        'Phoenix Islands (Pacific Ocean)'
      ],
      answer: 'Phoenix Islands (Pacific Ocean)'
    }),
    Question.create({
      content:
        'How much has the global mean sea level risen over the last century?',
      choices: [
        'Not at all',
        '1-3 in (2.5-7.6cm)',
        '4-8 in (10-20 cm)',
        '15-20 in (38-51 cm)'
      ],
      answer: '4-8 in (10-20 cm)'
    }),
    Question.create({
      content:
        'Which of these common U.S. species is doing damage as an invasive species in the Black Sea?',
      choices: [
        'American eel',
        'Bull trout',
        'Comb jellyfish',
        'Sockeye salmon'
      ],
      answer: 'Comb jellyfish'
    }),
    Question.create({
      content:
        'What area of the ocean is suffering the most from habitat destruction?',
      choices: ['Coasts', 'Ocean Floor', 'Deep Sea', 'Estuaries'],
      answer: 'Coasts'
    }),
    Question.create({
      content:
        'Industrial fishing is estimated to have wiped out what percent of large predatory fish?',
      choices: ['10%', '20%', '60%', '90%'],
      answer: '90%'
    }),
    Question.create({
      content: 'More than 80% of ocean pollution comes from what activities?',
      choices: [
        'Marine Activites',
        'Land Activities',
        'Flight Activities',
        'Both (It is fairly divided)'
      ],
      answer: 'Land Activities'
    }),
    Question.create({
      content: 'Elevated water temperature can cause corals to do what?',
      choices: ['Grow too quickly', 'Bleach', 'Eat themselves', 'Reproduce'],
      answer: 'Bleach'
    }),
    Question.create({
      content: 'What animals are most at risk from ocean acidification?',
      choices: ['Shellfish', 'Marine Mammals', 'Bottom-Feeding Fish', 'Sharks'],
      answer: 'Shellfish'
    }),
    Question.create({
      content:
        'In the summer of 2014, researchers recorded the highest global mean sea-surface temperatures in history. Where was the warming concentrated?',
      choices: [
        'South Pacific',
        'North Pacific',
        'The Sea of Japan',
        'Indian Ocean'
      ],
      answer: 'North Pacific'
    }),
    Question.create({
      content: "How much of the earth's surface is covered by water?",
      choices: ['87%', '75%', '47%', '60%'],
      answer: '75%'
    }),
    Question.create({
      content:
        'Pasca, a Native American word for bread, gave this Gulf coast city its name.',
      choices: ['Pascagoula', 'Des Moines', 'Pudget Sound', 'Mount Rainier'],
      answer: 'Pascagoula'
    }),
    Question.create({
      content: "How much of the world's carbon dioxide do oceans absorb?",
      choices: ['30%', '60%', '90%', '10%'],
      answer: '30%'
    }),
    Question.create({
      content:
        'How many people depend on marine and coastal biodiversity for their livelihoods?',
      choices: ['4 billion', '3 billion', '2 billion', '1 billion'],
      answer: '3 billion'
    }),
    Question.create({
      content:
        "Women constitute half of the workforce. But in aquaculture, they earn what percentage of men's wage?",
      choices: ['82%', '75%', '64%', '100%'],
      answer: '64%'
    }),
    Question.create({
      content:
        'How many marine animals are killed annually by plastic in the ocean?',
      choices: ['100,000', '200,000', '10000', '25,000'],
      answer: '100,000'
    }),
    Question.create({
      content:
        'About how many tons of plastic ends up in the ocean every year?',
      choices: ['13 million', '10 million', '5 million', '20 million'],
      answer: '13 million'
    }),
    Question.create({
      content: 'What is the most ubiquitous type of litter on the planet?',
      choices: [
        'Plastic straws',
        'Cigarette butts',
        'Plastic cups',
        'Beer cans'
      ],
      answer: 'Cigarette butts'
    }),
    Question.create({
      content:
        'The Nestle Corporation has partnered with which government agency to bottle municipal groundwater?',
      choices: [
        'Bureau of Land Management',
        'The U.S. Forest Service',
        'The State of California',
        'The Environmental Protection Agency'
      ],
      answer: 'The U.S. Forest Service'
    }),
    Question.create({
      content: 'What can you do to help stop plastic pollution?',
      choices: [
        'Refuse single-use plastic bottles,straws,to-go containers and coffee cups and lids.',
        'Bring your own reusable bags wherever you go shopping or just need to carry stuff.',
        'Ask merchants, restaurants and other establishments you frequent to consider using plastic-free alternatives.',
        'All of the above'
      ],
      answer: 'All of the above'
    }),
    Question.create({
      content:
        'On average, how many aluminum soda cans are used in the United States each year?',
      choices: ['1 million', '90 million', '120 million', ' 3 billion'],
      answer: '120 million'
    }),
    Question.create({
      content:
        'What percentage of monetary purchasing goes to packaging materials?',
      choices: [
        '$1 for every $10 spent',
        '$1 for every $50 spent',
        '$1 for every $100 spent',
        '$1 for every $1,000 spent'
      ],
      answer: '$1 for every $10 spent'
    }),
    Question.create({
      content: 'How much energy does recycling just one aluminum can save?',
      choices: [
        'Enough to power a microwave for 30 minutes',
        'Enough to power the average American home for 4 days',
        'Enough to power a computer for 15 minutes',
        'Enough to power a TV for 3 hours'
      ],
      answer: 'Enough to power a TV for 3 hours'
    }),
    Question.create({
      content:
        'Recycling plastic saves ______ times as much energy as burning it in an incinerator.',
      choices: [
        '2 times',
        '0.5 times',
        '3 times',
        'None, it takes more energy to recycle'
      ],
      answer: '2 times'
    }),
    Question.create({
      content:
        'A typical glass bottle would take _____ years or more to decompose.',
      choices: [
        '20 years',
        '150 years',
        '4000 years',
        'It will never break down'
      ],
      answer: '4000 years'
    }),
    Question.create({
      content:
        'The US Department of Energy (DOE) recommends turning off the monitor and placing the computer on sleep mode if you are not going to use it for more than _______.',
      choices: ['2 hours', '6 hours', '45 minutes', '20 minutes'],
      answer: '20 minutes'
    }),
    Question.create({
      content:
        'Compact Florescent Lighting -CFLs- use ______ of the energy needed for incandescent bulbs.',
      choices: ['25%', '50%', '75%', '100%'],
      answer: '25%'
    }),
    Question.create({
      content:
        'How many gallons of motor gasoline does the average American consume in one year?',
      choices: ['150 gallons', '500 gallons', '310 gallons', '750 gallons'],
      answer: '500 gallons'
    }),
    Question.create({
      content:
        'How much does the average American consume in paper, wood, and other products made from trees each year?',
      choices: ['1 tree', ' 5 trees', '7 trees', '15 trees'],
      answer: '7 trees'
    }),
    Question.create({
      content:
        'What type of supermarket bag is more ecofriendly, paper or plastic?',
      choices: [
        'Paper',
        'None - carry your own bag',
        'Either is fine',
        'Plastic'
      ],
      answer: 'None - carry your own bag'
    }),
    Question.create({
      content:
        'Approximately how much global electricity output is produced from renewable sources?',
      choices: ['5%', '10%', '1%', '20%'],
      answer: '10%'
    }),
    Question.create({
      content:
        'Which of the following is an alternative material for making paper?',
      choices: ['Panda Excrement', 'Sheepskin', 'Hemp', 'All of the Above'],
      answer: 'All of the Above'
    }),
    Question.create({
      content: 'What percentage of life on Earth resides in the ocean?',
      choices: ['72%', '94%', '55%', '33%'],
      answer: '94%'
    }),
    Question.create({
      content:
        'Where are the majority of cables that power the internet located?',
      choices: [
        'Along the the ocean floor',
        'Underground throughout the Midwest',
        'Near Area 51',
        'On Roosevelt Island, New York'
      ],
      answer: 'Along the ocean floor',
      explanation:
        'The vast majority of the cables that power the Internet, allowing access to it across the entire globe, are underwater. Wires called “submarine communications cables” crisscross the ocean floors, put in place by boats built solely for that purpose. To ensure that the cables remain undisturbed, they have to be placed on relatively flat stretches of the ocean floor, away from ocean ecosystems or shipwrecks.'
    }),
    Question.create({
      content:
        'Which of the following would have the greatest impact on curbing climate change?',
      choices: [
        'Composting your waste',
        'Cooking over clean stoves',
        'Throwing away less food',
        'Eating a plant-heavy diet'
      ],
      answer: 'Throwing away less food',
      explanation:
        'A third of all food that we raise or grow never makes it onto our plates, and that waste accounts for around 8% of global emissions.'
    }),
    Question.create({
      content:
        'Which of the following would have the greatest impact on curbing climate change?',
      choices: [
        'Driving an electric car',
        'Shipping goods more efficiently',
        'Taking less airplane trips',
        'Investing in high-speed trains'
      ],
      answer: 'Driving an electric car',
      explanation:
        'If just 16% of the miles we drive were traveled in an electric-powered vehicle instead of a gas-powered one, it could keep 10 gigatons of carbon emissions out of the air.'
    }),
    Question.create({
      content:
        'Which of the following would have the greatest impact on curbing climate change?',
      choices: [
        'Designing more walkable cities',
        'Using smart thermostats',
        'Installing green roofs',
        'Switching to LED lightbulbs'
      ],
      answer: 'Switching to LED lightbulbs',
      explanation:
        'LED lightbulbs cost more, but they use far less energy than incandescent and compact fluorescent bulbs, and they last longer.'
    }),
    Question.create({
      content:
        'Which of the following would have the greatest impact on curbing climate change?',
      choices: [
        'Cleaning up chemicals in our refrigerators and ACs',
        'Building with greener cement',
        'Using water more efficiently',
        'Recycling More'
      ],
      answer: 'Cleaning up chemicals in our refrigerators and ACs',
      explanation:
        'Recycling, using less water and switching to cleaner cement would all help slow climate change. But the chemicals used in our refrigerators and A/C units trap thousands of times more heat than CO2, so containing them is essential to stopping global warming. If we prevent refrigerants from leaking and switch to using cleaner chemicals, it would be like keeping nearly 90 gigatons of C02 out of the atmosphere.'
    }),
    Question.create({
      content:
        'Which of the following would have the greatest impact on curbing climate change?',
      choices: [
        'Investing in nuclear power',
        'Building more wind farms',
        'Building more solar farms',
        'Capturing energy from ocean waves'
      ],
      answer: 'Building more wind farms',
      explanation:
        'While solar has potential as a dominant electricity source in the future, Project Drawdown says investing in onshore wind farms offers the greatest reduction in CO2 emissions. Wind farms can also be built quickly, and the land they sit on can be used for farming or grazing simultaneously.'
    }),
    Question.create({
      content: 'Where is the biggest waterfall in the world located?',
      choices: [
        'Angel Falls, Venezuela',
        'Niagara Falls, New York',
        'Underwater in the Denmark Strait',
        'Gullfoss Waterfall, Iceland'
      ],
      answer: 'Underwater in the Denmark Strait',
      explanation:
        'Caverns and fissures are formed on the ocean floor form when water oozes through layers of salt - creating waterfalls! The Denmark Strait is a massive cascade of water that plummets 11,500 feet (more than three times the height of Angel Falls in Venezuela).'
    }),
    Question.create({
      content: 'Where is the biggest waterfall in the world located?',
      choices: [
        'It is a biodegradable material so it eventually disintegrates',
        'It never fully goes away, it just breaks into little pieces',
        'There is no such thing as plastic waste, all plastic is recycled',
        'It is dumped in the ocean for fish to eat'
      ],
      answer: 'It never fully goes away, it just breaks into little pieces'
    }),
    Question.create({
      content: 'What percent of its plastic does the U.S. recycle?',
      choices: ['9%', '35%', '50%', '75%'],
      answer: '9%',
      explanation:
        'As of 2015, about 6.3 billion metric tons (Mt) of plastic has been produced in the U.S. and, of that, only 9% has been recycled, found a recent study published on Science Advances.'
    }),
    Question.create({
      content: 'How much water does it take to produce one bottle of water?',
      choices: [
        'No water is used to produce plastic',
        '1 bottle of water',
        '3 bottles of water',
        '6 bottles of water'
      ],
      answer: '3 bottles of water',
      explanation:
        'According to the Pacific Institute, producing a water bottle (including the plastic container and the filtered water inside) requires three times the amount of water in the actual bottle. In other words, every liter of bottled water sold represents 3 liters of water used. And this doesn’t say anything about the energy required to transport it.'
    })
  ])

  console.log(`seeded ${users.length} users and ${questions.length} questions!`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
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

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
