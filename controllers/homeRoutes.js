const router = require('express').Router();
const { Coach, Booking, Fields } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
   // res.render('homepage', {});
  
    const fieldData = await Fields.findAll();  
    
   
  //  Serialize data so the template can read it
    const fields = fieldData.map((field) => field.get({ plain: true }));

  //  Pass serialized data and session flag into template
    res.render('homepage', { 
      fields, 
     logged_in: req.session.logged_in 
    });
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



router.get('/profile/:id', async (req, res) => {
  try {
    const bookingData = await Booking.findOne({ where: { coach_id: req.params.id } }, {
      // include: [
      //   {
      //     model: Fields,
      //     attributes: ['name'],
      //   },
      // ],
    });

    const booking1 = bookingData.get({ plain: true });

    res.render('profile', {
      booking1,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});








// router.get('/profile/:id', async (req, res) => {
//   try {
//     const coachData = await Coach.findByPk(req.params.id, {
//       include: [
//         {
//           model: Coach,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const coach1 = coachData.get({ plain: true });

//     res.render('profile', {
//       ...coach1,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('homepage');
    return;
  }

  res.render('login');
});

module.exports = router;
