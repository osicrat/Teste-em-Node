

var numero1 = 0, numero2 = 1, numero3 = 0;

let numero = [0, 1, 1, 2, 3, 5, 10, 12, 22, 33, 43, 89, 144, 233, 377, 610, 987, 1597, 2584];


for (var i = 0; i < numero.length; i++) {
    if (numero[i] > numero3) {
        numero3 = numero1 + numero2;
        numero1 = numero2;
        numero2 = numero3;



        if (numero[i] == 0 | numero[i] == 1) {
            console.log('numero %d esta na sequência', numero[i]);
        }
        if (numero[i] == numero3) {
            console.log('numero %d esta na sequência ', numero[i]);
        } else {
            console.log('numero %d não esta na sequência', numero[i]);
        }
    }
}