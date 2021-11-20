const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedOne = [{
    username: 'Vanellope',
    password: 'TheGlitch'
}]

const postOne = [{
    title:"Hero's Duty new update",
    content: 'Sergeant Calhoun has a new mission to defend the citadel',
    user_id: 1
}]

const commentOne = [{
    feedback: "This new level looks great",
    user_id: 1,
    post_id: 1
}]

const seed = () => User.bulkCreate(seedOne);
const seedPosts = () => Post.bulkCreate(postOne);
const seedComments = () => Comment.bulkCreate(commentOne);

const seedAll = async () => {
    await sequelize.sync({force: true})
    await seed();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();
