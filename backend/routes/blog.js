const express = require('express');
const router = express.Router();
const { db } = require('../db/database');

router.get('/', (req, res) => {
  const { category, limit = 10, offset = 0 } = req.query;
  let rows;
  if (category) {
    rows = db.prepare('SELECT * FROM blog_posts WHERE category = ? ORDER BY created_at DESC LIMIT ? OFFSET ?').all(category, Number(limit), Number(offset));
  } else {
    rows = db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC LIMIT ? OFFSET ?').all(Number(limit), Number(offset));
  }
  res.json(rows);
});

router.get('/:slug', (req, res) => {
  const post = db.prepare('SELECT * FROM blog_posts WHERE slug = ?').get(req.params.slug);
  if (!post) return res.status(404).json({ error: 'Không tìm thấy bài viết' });
  res.json(post);
});

module.exports = router;
