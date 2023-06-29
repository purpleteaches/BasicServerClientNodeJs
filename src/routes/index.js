import express from 'express';

const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('Home');
});

export default router;
