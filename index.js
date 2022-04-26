const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const history = require('connect-history-api-fallback');
const routerApi = require('./routes');

const app = express();
const port = 3000;

// Conexión base de datos

const uri = 'URI';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => {
    console.log('Conectado a DB');
  },
  /** handle initial connection error */
  (err) => {
    console.log(err);
  },
);

if (process.env.NODE_ENV === 'production') {
  // Definir un directorio estático
  app.use(express.static(`${__dirname}/site/`));
  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/site/index.html`);
  });
}

// Middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get('/', (req, res) => {
  res.send('HEllooo to my new server');
});

routerApi(app);

// Middleware para Vue.js router modo history
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`App ejemplo corriendo por el puerto: ${port}`);
});
