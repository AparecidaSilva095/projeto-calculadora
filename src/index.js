const express = require('express');
const { soma, subtracao, multiplicacao, divisao } = require('./controladores/CalculadoraControlador');

const app = express();

app.get('/calculadora/soma', soma);
app.get('/calculadora/subtracao', subtracao);
app.get('/calculadora/multiplicacao', multiplicacao);
app.get('/calculadora/divisao', divisao);



app.listen(3000);