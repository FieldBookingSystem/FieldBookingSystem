const Coach = require('./Coach');
const Fields = require('./Fields');
const Booking = require('./Booking');

Coach.hasMany(Booking, {
  foreignKey: 'coach_id',
  onDelete: 'CASCADE'
});

Booking.belongsTo(Fields, {
  foreignKey: 'field_id'
});

module.exports = { Booking, Coach, Fields };
