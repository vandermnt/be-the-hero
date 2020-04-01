const express = require('express'); 
const routes = require('./routes') // ./ serve para referenciar a mesma pasta do arquivo index
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333);

