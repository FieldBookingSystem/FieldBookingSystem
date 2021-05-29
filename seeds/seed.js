const sequelize = require('../config/connection');
const { Coach, Booking, Fields } = require('../models');

const coachData = require('./coachData.json');
const bookingData = require('./bookingData.json');
const fieldsData = require('./fieldsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Coach.bulkCreate(coachData);

  await Fields.bulkCreate(fieldsData);

  await Booking.bulkCreate(bookingData);

  // for (const booking of bookingData) {
  //   await Booking.create({
  //     ...booking,
  //     coach_id: coach[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
