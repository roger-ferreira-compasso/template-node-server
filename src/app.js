require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const handlebars = require('express-handlebars');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');
/*eslint-disable */
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const winston = require('./config/winston');
/* eslint-enable */

const app = express();

// Configurando pastas dos arquivos estáticos.
app.use(express.static(path.join(__dirname, '/public/')));
// Template Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Configurando helmet
app.use(helmet());
// Configurando o cors
app.use(cors());
// Configurando o Morgan
app.use(morgan('combined', { stream: winston.stream }));
// Configurando o Body-parser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Configurando as rotas

// Extended https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'TemplateNode',
      description: 'Custom api template for PampecJr nodejs projects',
      contact: {
        name: 'Pampec Jr',
        url: 'https://www.pampecjr.com',
        email: 'projetos@pampecjr.com',
      },
      servers: [`http://${process.env.HOST}:${process.env.PORT}`],
    },
  },
  apis: ['./src/router/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('/', require('./router/index'));

app.use(errors());

module.exports = app;
