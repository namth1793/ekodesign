const express = require('express');
const cors = require('cors');
const { initDB } = require('./db/database');
const contactsRouter = require('./routes/contacts');
const blogRouter = require('./routes/blog');
const portfolioRouter = require('./routes/portfolio');

const app = express();
const PORT = 5013;

app.use(cors());
app.use(express.json());

initDB();

app.use('/api/contacts', contactsRouter);
app.use('/api/blog', blogRouter);
app.use('/api/portfolio', portfolioRouter);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`EkoDesign backend running on http://localhost:${PORT}`);
});
