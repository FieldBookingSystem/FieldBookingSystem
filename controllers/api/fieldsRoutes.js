const router = require('express').Router();
const { Fields, Booking } = require('../../models');
const withAuth = require('../../utils/auth');

// gets all the fields data I think this can be used to build the 
router.get('/', async (req, res) => {
  try {
    const fieldData = await Fields.findAll();
    res.status(200).json(fieldData);
    // const fields = fieldData.map((field) => field.get({ plain: true }));
    // res.render('field-details', { 
    //     fields,
    //    // logged_in: req.session.logged_in 
    //   });
  } catch (err) {
    res.status(500).json(err);
  }
});

// gets one field by it's id
router.get('/:id', async (req, res) => {
  try {
    const fieldData = await Fields.findByPk(req.params.id);
    res.status(200).json(fieldData)
    // const project = projectData.get({ plain: true });

    // res.render('project', {
    //   ...project,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/fieldDisplay', async (req, res) => {
  try {
    const fieldData = await Fields.findAll();
   
   const fields = fieldData.map((field) => field.get({ plain: true }));
    console.log("fields");
    //res.status(200).json(fields);
     res.render('field-details', { 
         fields,
       // logged_in: req.session.logged_in 
       });
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
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
