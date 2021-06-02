const router = require('express').Router();
const { Coach, Booking, Fields } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
   // res.render('homepage', {});
  
    const fieldData = await Fields.findAll();  
    
   // res.render('homepage');

   // Get all fields and JOIN with user data
   // const homepage = await Fields.findAll({
      // include: [
      //   {
      //     model: Fields,
      //     attributes: ['name'],
      //   },
      // ],
   // });

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

// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
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
//SIGNUP
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('homepage');
    return;
  }

  res.render('signup');
});

module.exports = router;
