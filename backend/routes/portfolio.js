const express = require('express');
const router = express.Router();
const { db } = require('../db/database');

router.get('/', (req, res) => {
  const { featured, industry } = req.query;
  let rows;
  if (featured === 'true') {
    rows = db.prepare('SELECT * FROM portfolio WHERE featured = 1 ORDER BY created_at DESC').all();
  } else if (industry) {
    rows = db.prepare('SELECT * FROM portfolio WHERE industry = ? ORDER BY created_at DESC').all(industry);
  } else {
    rows = db.prepare('SELECT * FROM portfolio ORDER BY created_at DESC').all();
  }
  res.json(rows);
});

router.get('/testimonials', (req, res) => {
  const rows = db.prepare('SELECT * FROM testimonials ORDER BY created_at DESC').all();
  res.json(rows);
});

router.get('/:id', (req, res) => {
  const item = db.prepare('SELECT * FROM portfolio WHERE id = ?').get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Không tìm thấy dự án' });
  res.json(item);
});

module.exports = router;
