const fs = require('fs');

fs.readFile('./dados.json', 'utf-8', (error, data) => {

    const dados = JSON.parse(data);

    var maior = 0, menor = 0, soma = 0, media = 0, aux = 0;

    for (var i = 0; i < dados.length; i++) {

        if (dados[i].valor != 0) {
            aux = dados[i].valor;

            if (aux > maior) {
                maior = aux;
            }
            if (menor == 0) {
                menor = aux;
            }
            if (aux < menor) {
                menor = aux;
            }

            soma += dados[i].valor;

        }

    }

    console.log("Maior faturamento do mês: " + maior);
    console.log("Menor faturamento do mês: " + menor);


    media = soma / dados.length;

    var diasFaturamento = [];

    for (var j = 0; j < dados.length; j++) {

        if (dados[j].valor != 0) {
            if (dados[j].valor > media) {
                diasFaturamento += (dados[j].dia) + ', ';
            }
        }

    }
    console.log("Media mensal: " + media);
    console.log("Dias em que o faturamento foi maior que a media mensal: " + diasFaturamento);


});




