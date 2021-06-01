const router = require('express').Router();
const { Coach, Booking, Fields } = require('../../models');
const withAuth = require('../../utils/auth');

//GET ALL BOOKINGS---------------
router.get('/', async (req, res) => {
  try {
    const bookingData = await Booking.findAll();
    res.status(200).json(bookingData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// GET BY ID----------------------
router.get('/:id', async (req, res) => {
  try {
    const bookingData = await Booking.findByPk(req.params.id);
    include: [{ model: Coach, through: Booking }]
    res.status(200).json(bookingData)

  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER AUTH -----------------
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

// GET LOGGED IN USER ----------this function checks if the user is logged in. and if they are not directs them to a log in page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});



//POST A NEW BOOKING--------------- 
router.post('/', async (req, res) => {
  try {
    const newBooking = await Booking.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBooking);
  } catch (err) {
    res.status(400).json(err);
  }
});

//DELETE A BOOKING -------------------
router.delete('/:id', async (req, res) => {
  try {
    const bookingData = await Booking.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!bookingData) {
      res.status(404).json({ message: 'No booking found with this id!' });
      return;
    }

    res.status(200).json(bookingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;