import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';

// import helmet from 'helmet';
import config from './config/config.js';
import { createAdminUser } from './src/controllers/user.controller.js';
import routes from './src/routes/index.js';

const app = express();
const PORT = config.port ?? 3000;
const HOST = config.host ?? 'localhost';
createAdminUser();

//** middleware **/
app.use(cors()); // enables Cross-Origin Resource Sharing
// app.use(helmet({ crossOriginResourcePolicy: false })); // adds various HTTP headers to secure the app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('uploads'));

// rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
});
app.use(limiter); // apply rate limiting to all routes under '/'

app.use(routes);

app.get('/', (_req, res) => {
  res.json({
    message: 'Eary-System web app 💻✌',
    github: 'https://github.com/Adosh74/Eary-System',
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Serving running on http://${HOST}:${PORT}`);
});
