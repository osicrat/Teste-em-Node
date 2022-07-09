

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}

var sp = 67.83643,
    rj = 36.67866,
    mg = 29.22988,
    es = 27.16548,
    outr = 19.84953;

var total = (sp + rj + mg + es + outr);

var psp = (sp / total) * 100;
var prj = (rj / total) * 100;
var pmg = (mg / total) * 100;
var pes = (es / total) * 100;
var poutr = (outr / total) * 100;


console.log("Porcentagem do faturamento de SP %f%", financial(psp));
console.log("Porcentagem do faturamento de RJ %f%", financial(prj));
console.log("Porcentagem do faturamento de MG %f%", financial(pmg));
console.log("Porcentagem do faturamento de ES %f%", financial(pes));
console.log("Porcentagem do faturamento de Outros %f%", financial(poutr));