const Favorites = require('./Favorites');
const User = require('./User');

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Favorites.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports= {User, Favorites};