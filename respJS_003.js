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
    primos = [];
    console.log('Q2');
    var aux = Number.parseInt(document.getElementById('numprimo').value);
    for (let numero = 2; numero <= aux; numero ++){
      let chk = true;

        for (let i = 0; i < primos.length ; i++){
            if (numero % primos[i] === 0) {
                chk = false;
                break;
            }
        }
        if (chk) {primos.push (numero);}   
    }
    document.getElementById('RQ2').innerHTML = primos;
    console.log (primos);  
}





function Q3(listaStrings) {
    var listaStrings = [];
    var novaString = document.getElementById('string').value;
    console.log('Q3');
    listaStrings.push(novaString);
    console.log(listaStrings);
    document.getElementById("string").value = "";
    document.getElementById("RQ3").innerHTML = listaStrings;
    document.getElementById("RQ3-1").innerHTML = listaStrings[0].toUppercase;

}

function MAIUSCULA(listaStrings){
    for (i = 0; i < listaStrings.length; i++){
        console.log(listaStrings[i]);
    }
}

