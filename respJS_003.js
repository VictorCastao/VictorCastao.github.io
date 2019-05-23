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




var listaStrings = [];

function acrescentar() {
    var aux = document.getElementById('novaString').value;
    listaStrings.push(aux);
    document.getElementById("novaString").value = "";
    document.getElementById("nova").innerHTML = listaStrings;
    console.log(listaStrings);
}

function Q3(){}


function QuickSort_(X, IniVet, FimVet){
    var i = 0;
    var j = X.length - 1;
    var pivo = X[Math.floor((i+j)/2)];
    var aux;

   while(i <= j){
     while (X[i] < pivo){ 
              i++;
           }
          
          while (X[j] > pivo) {
              j--;
          }
          if (i <= j) {
              aux  = X[i];
              X[i] = X[j];
              X[j] = aux;
              i++;
              j--;
        }
    }          
   if (IniVet < j) {
      QuickSort(X, IniVet, j);
    }
   if (i < FimVet) {
      QuickSort(X, i, FimVet);
   }
}

function QuickSort(X){
    var Y = Array.from(X);
    QuickSort_(Y, 0, Y.length-1);
    return Y;
}


function Q4(){
    console.log("Q4");
    var aux = document.getElementById('numeroQ4').value;
    var numerosQ4 = aux.split(';');
    var ordenados;
    for (let i=0;i<numerosQ4.length;i++){
        numerosQ4[i] = Number.parseFloat(numerosQ4[i]);
    }
    ordenados=QuickSort(numerosQ4);
    console.log(ordenados);
    document.getElementById("RQ4").innerHTML=ordenados;
}

