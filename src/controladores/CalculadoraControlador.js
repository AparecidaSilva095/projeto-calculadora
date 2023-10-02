const soma = (req, res) => {
    const x = Number(req.query.num1);
    const y = Number(req.query.num2);
    const resultado = x + y;
    return res.send(`${resultado}`)
}

const subtracao = (req, res) => {
    const x = Number(req.query.num1);
    const y = Number(req.query.num2);
    const resultado = x - y;
    return res.send(`${resultado}`)
}

const divisao = (req, res) => {
    const x = Number(req.query.num1);
    const y = Number(req.query.num2);
    const resultado = x / y;
    return res.send(`${resultado}`)
}

const multiplicacao = (req, res) => {
    const x = Number(req.query.num1);
    const y = Number(req.query.num2);
    const resultado = x * y;
    return res.send(`${resultado}`)
}

module.exports = {
    soma,
    subtracao,
    divisao,
    multiplicacao
}