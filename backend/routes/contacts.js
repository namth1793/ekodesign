const express = require('express');
const router = express.Router();
const { db } = require('../db/database');

router.post('/', (req, res) => {
  const { name, phone, email, service, message } = req.body;
  if (!name) return res.status(400).json({ error: 'Vui lòng nhập họ tên' });
  try {
    const stmt = db.prepare(
      'INSERT INTO contacts (name, phone, email, service, message) VALUES (?, ?, ?, ?, ?)'
    );
    const result = stmt.run(name, phone || '', email || '', service || '', message || '');
    res.json({ success: true, id: result.lastInsertRowid, message: 'Gửi thành công! Chúng tôi sẽ liên hệ sớm.' });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
});

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all();
  res.json(rows);
});

module.exports = router;
