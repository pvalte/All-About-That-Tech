const Post = require('./Post');
const User = require('./User');

// create associations
//posts - many to one relationship with users
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };