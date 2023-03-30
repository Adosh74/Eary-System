import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.json({
    message: 'Eary-System web app 💻✌',
    github: 'https://github.com/Adosh74/Eary-System',
  });
});
app.listen(PORT, () => {
  console.log(`Serving running on http://localhost:${PORT}`);
});
