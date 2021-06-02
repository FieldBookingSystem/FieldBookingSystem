const router = require('express').Router();
const { Coach, Booking, Fields } = require('../../models');
const bcrypt = require('bcrypt');
const withAuth = require('./../../utils/auth');

// gets all the fields data I think this can be used to build the 
router.get('/', async (req, res) => {
  try {
    const coachData = await Coach.findAll();
    res.status(200).json(coachData);
    //res.render('homepage');

    // // Serialize data so the template can read it
    // const projects = projectData.map((project) => project.get({ plain: true }));

    // // Pass serialized data and session flag into template
    // res.render('homepage', { 
    //   projects, 
    //   logged_in: req.session.logged_in 
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

// gets one field by it's id
router.get('/:id', async (req, res) => {
  try {
    const coachData = await Coach.findByPk(req.params.id);
    res.status(200).json(coachData)
    // const project = projectData.get({ plain: true });

    // res.render('project', {
    //   ...project,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

// This Functions purpose is to render a users profile I don't know if 
// we will need this one.
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// this function checks if the user is logged in. and if they are not directs them to a log in page
// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });


router.post('/login', async (req, res) => {
  try {
    const userData = await Coach.findOne({ where: { email: req.body.email } });
    console.log("did not validate");
    if (!userData) {
      
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    console.log(userData.id);
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({  id: userData.id });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});




//POST A NEW COACH--------------- 
router.post('/', async (req, res) => {
  try {
    console.log("hi")
    const newCoach = await Coach.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      postalcode: req.body.postalcode,
    });
    console.log("newCoach".newCoach)
    res.status(200).json(newCoach);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;





//////// old create coach post route 
// router.post('/', async (req, res) => {
//   try {
//     const newCoach = await Coach.create({
//       ...req.body,
//        user_id: req.session.user_id,
//     });

//     res.status(200).json(newCoach);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });