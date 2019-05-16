console.log("Respostas Desafios JS_003");


function Q1() {
    console.log('Q1');
    var pares = [];
    var aux = document.getElementById('numpar').value;
    for (let i = 0; i <= aux; i+=2){
        pares.push(i);
    }
    document.getElementById('RQ1').innerHTML = pares;
    console.log(pares);
    

}

function Q2() {
    console.log('Q2');
    var primos = [];
    var aux = document.getElementById('num').value;
    for (let i = 0; i <= aux; i+=2){
        pares.push(i);
    }
    document.getElementById('RQ1').innerHTML = pares;
    console.log(pares);
    

}