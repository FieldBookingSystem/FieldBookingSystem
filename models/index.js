const Booking = require('./Booking');
const Coach = require('./Coach');
const Fields = require('./Fields');

Coach.hasMany(Booking, {
  foreignKey: 'coach_id',
  onDelete: 'CASCADE'
});

Fields.hasMany(Booking, {
  through: Fields,
  foreignKey: 'field_id'
});

// Booking.hasOne(Fields, {

//   foreignKey: 'field_id'
// });
module.exports = { Booking, Coach, Fields };
