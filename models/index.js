const Booking = require('./Booking');
const Coach = require('./Coach');
const Fields = require('./Fields');

Coach.hasMany(Booking, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
