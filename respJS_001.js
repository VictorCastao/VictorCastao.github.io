console.log("Olá mundo!");

function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    console.log(x);
    console.log(y);
    console.log('Quociente = ' + Math.floor(x/y));
    console.log('Resto = ' + (x%y));
}

function Q2() {
    console.log('Q2');
    var c1 = Number.parseInt(document.getElementById('c1').value);
    var c2 = Number.parseInt(document.getElementById('c2').value);
    console.log('Cateto 1 = ' + c1);
    console.log('Cateto 2 = ' + c2);
    console.log('Hipotenusa = ' + Math.sqrt(Math.pow(c1,2) + Math.pow(c2,2)));
}
function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    
    
    console.log('Profissão Escolhida: ' + profissao);
    
    switch(aux.options[aux.selectedIndex].value){
        case 'bombeiro': console.log('Substantivo: Masculino');
        break;
        case 'bombeiro': console.log('Substantivo: Masculino');
        break;
        case 'bombeiro': console.log('Substantivo: Masculino');
        break;
        case 'bombeiro': console.log('Substantivo: Masculino');
        break;
        case 'bombeiro': console.log('Substantivo: Masculino');
        break;
        case 'bombeiro': console.log('Substantivo: Masculino');
        break;
        case 'bombeiro': console.log('Substantivo: Masculino');
        break;
        case 'bombeiro': console.log('Substantivo: Masculino');
        break;
    }
    

}
