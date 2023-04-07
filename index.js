import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/index.js';

const app = express();
const PORT = 3000;

//** middleware **/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);
app.get('/', (_req, res) => {
  res.json({
    message: 'Eary-System web app 💻✌',
    github: 'https://github.com/Adosh74/Eary-System',
  });
});
app.listen(PORT, () => {
  console.log(`Serving running on http://localhost:${PORT}`);
});
