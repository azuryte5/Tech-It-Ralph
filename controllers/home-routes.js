const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment} = require('../models');


router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'content',
      'title',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'feedback', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    console.log(posts)
    // const data = {
    //     feed: dbPostData[0]
        // .get({plain: true})
    // }
    // const post = dbPostData.get({ plain:true });
    
      res.render('homepage', { posts }
    //   { posts, loggedIn: req.session.loggedIn}
      );
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'content',
      'title',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'feedback', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('homepage', {
        post 
        // loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
// This gets added later to prevent logging in twice 
//  if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
  res.render('login');
});

module.exports = router;
