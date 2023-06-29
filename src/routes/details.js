import express from 'express';

const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('List of users');
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Details of user ${userId}`);
});

router.post('/users', (req, res) => {
  res.send('Create a new user');
});

router.put('/:user_id/:resouce_id', (req, res) => {
  const userId = req.params.user_id;
  res.send(`Update user ${userId}`);
});

router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Delete user ${userId}`);
});

export default router;
