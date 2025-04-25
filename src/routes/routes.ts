const express = require('express');
const router = express.Router();

router.get('/sample', (req:Request, res: { json: (arg0: { message: string; }) => void; }) => {
  res.json({ message: 'This is a sample message' });
});

export default router;