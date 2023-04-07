import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

//** middleware **/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.json({
    message: 'Eary-System web app 💻✌',
    github: 'https://github.com/Adosh74/Eary-System',
  });
});
app.listen(PORT, () => {
  console.log(`Serving running on http://localhost:${PORT}`);
});
