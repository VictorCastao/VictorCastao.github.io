console.log("Respostas Desafios JS_002");

function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    var resp = divide(x,y);
    document.getElementById('RQ1').innerHTML = resp;
    console.log(resp);
}

function divide(x,y){
    return ('Valor de X: '+ x + '/' + 'Valor de Y: ' + y + '/' + 'Quociente = ' + Math.floor(x/y) + '/' + 'Resto = ' + (x%y))
}

function Q2() {
    console.log('Q2');
    var c1 = Number.parseFloat(document.getElementById('c1').value);
    var c2 = Number.parseFloat(document.getElementById('c2').value);
    var resp2 = hipotenusa(c1, c2);
    document.getElementById('RQ2').innerHTML = resp2;
    console.log(resp2);

}

function hipotenusa(c1,c2){
    return ('Cateto 1 = ' + c1 + '/' + 'Cateto 2 = ' + c2 + '/' + 'Hipotenusa = ' + Math.sqrt(Math.pow (c1, 2) + Math.pow (c2, 2)))
}

function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    var resp3 = profegenero(profissao);
    document.getElementById('RQ3').innerHTML = resp3;
    console.log(resp3);
}


function profegenero(profissao){
    
    if (profissao.endsWith('o')){return('Profissão Escolhida: ' + profissao + '/' + 'Substantivo: Masculino')}
    else{
    
    if (profissao.endsWith('or')){return('Profissão Escolhida: ' + profissao + '/' + 'Substantivo: Masculino')}
    else{
    
    if (profissao.endsWith('z')){return('Profissão Escolhida: ' + profissao + '/' + 'Substantivo: Feminino')}
    else{ 
        
    if (profissao.endsWith('a')){return('Profissão Escolhida: ' + profissao + '/' + 'Substantivo: Feminino')}
    else{    
        
    return('Profissão Escolhida: ' + profissao + '/' + 'Substantivo: Ambos')
                }    
            }
        }
    }    
}
    

function Q4() {
    console.log('Q4');
    var a_str = document.getElementById('cat1').value;
    var b_str = document.getElementById('cat2').value;
    var c_str = document.getElementById('hip').value;   
    var resp4 = faltando(a_str,b_str,c_str);
    document.getElementById('RQ4').innerHTML = resp4;
    console.log(resp4);
}

function faltando(a_str,b_str,c_str){

    if (a_str && b_str && c_str){
        return('Retire um valor!!')} 
    else{
    
    if ((!a_str) && (!b_str) && (!c_str)){
        return('Informe ao menos dois valores!!')} 
    else{

    if ((!a_str) && (!b_str)){
        return('Informe mais um valor!!')} 
    else{

    if ((!a_str) && (!c_str)){
        return('Informe mais um valor!!')} 
    else{

    if ((!b_str) && (!c_str)){
        return('Informe mais um valor!!')} 
    else{

    if (!a_str) {
        return('Lado Faltando: Cateto 1' + '/' + 'O valor do Cateto 1 é: ' + Math.sqrt(Math.pow (c_str,2) - Math.pow (b_str,2)))}
    else{    
    
    if (!b_str) {
        return('Lado Faltando: Cateto 2' + '/' + 'O valor do Cateto 2 é: ' + Math.sqrt(Math.pow (c_str,2) - Math.pow (a_str,2)))}
    else{
    
    if (!c_str) {
        return('Lado Faltando: Hipotenusa' + '/' + 'O valor da Hipotenusa é: ' + Math.sqrt(Math.pow (a_str,2) + Math.pow (b_str,2)))}
                            }
                        }
                    }
                }
            }
        }
    }      
}

function Q5(){
        console.log('Q5');
        var altura = Number.parseFloat(document.getElementById('altura').value);
        var peso = Number.parseFloat(document.getElementById('peso').value);
        var aux = document.getElementById('genero');
        var genero = aux.options[aux.selectedIndex].value;
        var imc = peso / Math.pow(altura,2);
        var resp5 = calculo (altura,peso,genero,imc);
        document.getElementById('RQ5').innerHTML = resp5;
        console.log(resp5);
}

function calculo(altura,peso,genero,imc){   
        if ((!altura) || (!peso)){
            return('Informe os dois valores corretamente!!')}

            return('O peso é: ' + peso + 'kg' + '/' + 
                   'A altura é: ' + altura + 'm' + '/' +
                   'O IMC é: ' + imc + '/' +
                   'Sua classificação é: ' + genclass(genero,imc))
}
            
function genclass(genero,imc){        
        
    switch (genero){
        case 'feminino':
        if (imc < 18.5){return('Magra')}
        else{
        if (imc < 25.0){return ('Sarada')}    
        else{
        if (imc < 30.0){return ('Rechonchuda')}
        else{
        if (imc >= 30.0){return('Obesa')}
                }
            }
        }
        break;
        
        case 'masculino':
        if (imc < 18.5){return('Magro')}
        else{
        if (imc < 25.0){return ('Sarado')}    
        else{
        if (imc < 30.0){return ('Rechonchudo')}
        else{
        if (imc >= 30.0){return('Obeso')}
                }
            }
        }
        break; 
    }

}



