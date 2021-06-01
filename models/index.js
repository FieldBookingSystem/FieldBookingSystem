const Booking = require('./Booking');
const Coach = require('./Coach');
const Fields = require('./Fields');

Coach.belongsToMany(Booking, {
  foreignKey: 'coach_id',
  onDelete: 'CASCADE'
});

Fields.belongsToMany(Booking, {
  through: Fields,
  foreignKey: 'field_id'
});

// Booking.hasOne(Fields, {

//   foreignKey: 'field_id'
// });
module.exports = { Booking, Coach, Fields };
