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

// Código abaixo feito junto com o professor

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

// Código abaixo feito junto com o professor

function Q3(){}


function QuickSort_(X, IniVet, FimVet){

    function partition(X, IniVet, FimVet){
    var i = IniVet;
    var pivo = X[FimVet];
    var aux;
    for (let j = IniVet; j < FimVet; j++){
        if (X[j] < pivo) {
            aux = X[i];
            X[i] = X[j];
            X[j] = aux;
            i ++;
        }
    }
    aux = X[i];
    X[i] = X[FimVet];
    X[FimVet] = aux;
    return i;
    }
   
    var p;
    if (IniVet < FimVet){
        p = partition(X, IniVet, FimVet);
        QuickSort_ (X, IniVet, p-1);
        QuickSort_(X, p + 1, FimVet);   
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

// Código abaixo feito junto com o professor

var matrizA = [];
var matrizB = [];
function mostraMatriz(M) {
	mhtml = "<table>";
	for (let i = 0; i < M.length; i++) {
		mhtml += "<tr><td>|</td>";
		for (let j = 0; j < M[i].length; j++) {
			mhtml += "<td style=\"text-align:right\">" + 
				M[i][j] + "</td>";
		}
		mhtml += "<td>|</td></tr>";
	}
	mhtml += "</table>";
	return mhtml;
}

function appendMA() {
	var aux = (document.getElementById('linhaA').value).split(';');
	document.getElementById('linhaA').value = "";
	for (let i = 0; i < aux.length; i++) {
		aux[i] = Number.parseFloat(aux[i]);
	}
	matrizA.push(aux);
	console.log(matrizA);
	document.getElementById('MA').innerHTML = mostraMatriz(matrizA);
}

function appendMB() {
	var aux = (document.getElementById('linhaB').value).split(';');
	document.getElementById('linhaB').value = "";
	for (let i = 0; i < aux.length; i++) {
		aux[i] = Number.parseFloat(aux[i]);
	}
	matrizB.push(aux);
	console.log(matrizB);
	document.getElementById('MB').innerHTML = mostraMatriz(matrizB);
}

function multMatrix(A, B) { // mxn nxp
	var C = [];
	for(let i = 0; i < A.length; i++) {
		aux = [];
		for(let j = 0; j < B[0].length; j++) {
			aux.push(0);
		}
		C.push(aux);
	}
	for(let i = 0; i < A.length; i++) {
		for(let j = 0; j < B[0].length; j++) {
			for(let k = 0; k < B.length; k++) {
				C[i][j] += A[i][k] * B[k][j];
			}
		}
	}
	return C;
}

function Q5() {
    console.log('Q5');
    var C = multMatrix(matrizA, matrizB);
    console.log(C);
    document.getElementById('RQ5').innerHTML = mostraMatriz(C);
}

