const Coach = require('./Coach');
const Fields = require('./Fields');
const Booking = require('./Booking');

Coach.hasMany(Booking, {
  foreignKey: 'coach_id',
  onDelete: 'CASCADE'
});

Fields.hasMany(Booking, {
  foreignKey: 'field_id'
});

Booking.belongsTo(Coach, {
  foreignKey: 'coach_id'
});

Booking.belongsTo(Fields, {
  foreignKey: 'field_id'
});


// Booking.belongsTo(Coach, {
//   foreignKey: 'id'
// });

// Coach.belongsTo(Booking);

module.exports = { Booking, Coach, Fields };
