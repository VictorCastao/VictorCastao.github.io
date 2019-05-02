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
    console.log('Cateto 1 = ' + c1);
    console.log('Cateto 2 = ' + c2);
    console.log('Hipotenusa = ' + Math.sqrt(Math.pow(c1,2) + Math.pow(c2,2)));
}

function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    
    console.log('Profissão Escolhida: ' + profissao);
    
    if (profissao.endsWith('o')){console.log('Substantivo: Masculino')}
    else{
    
    if (profissao.endsWith('or')){console.log('Substantivo: Masculino')}
    else{
    
    if (profissao.endsWith('z')){console.log('Substantivo: Feminino')}
    else{ 
        
    if (profissao.endsWith('a')){console.log('Substantivo: Feminino')}
    else{    
        
    console.log('Substantivo: Ambos')}
           }
        }
    }
        
}

function Q4() {
    console.log('Q4');
    var a_str = document.getElementById('cat1').value;
    var b_str = document.getElementById('cat2').value;
    var c_str = document.getElementById('hip').value;   

    if (a_str && b_str && c_str){
        console.log('Retire um valor!!')} 
    else{
    
    if ((!a_str) && (!b_str) && (!c_str)){
        console.log('Informe ao menos dois valores!!')} 
    else{

    if ((!a_str) && (!b_str)){
        console.log('Informe mais um valor!!')} 
    else{

    if ((!a_str) && (!c_str)){
        console.log('Informe mais um valor!!')} 
    else{

    if ((!b_str) && (!c_str)){
        console.log('Informe mais um valor!!')} 
    else{

    if (!a_str) {
        console.log('Lado Faltando: Cateto 1')
        console.log('O valor do Cateto 1 é: ' + Math.sqrt(Math.pow (c_str,2) - Math.pow (b_str,2)))} 
    else{    
    
    if (!b_str) {
        console.log('Lado Faltando: Cateto 2')
        console.log('O valor do Cateto 2 é: ' + Math.sqrt(Math.pow (c_str,2) - Math.pow (a_str,2)))} 
    else{
    
    if (!c_str) {
        console.log('Lado Faltando: Hipotenusa')
        console.log('O valor da Hipotenusa é: ' + Math.sqrt(Math.pow (a_str,2) + Math.pow (b_str,2)))}  
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
        
        if ((!altura) || (!peso)){
            console.log('Informe os dois valores corretamente!!')}

            console.log('O peso é: ' + peso + 'kg');
            console.log('A altura é: ' + altura + 'm');
            console.log('O IMC é: ' + imc);
        
        switch (genero){
        case 'feminino':
        if (imc < 18.5){console.log('Sua classificação é: Magra')}
        else{
        if (imc < 25.0){console.log('Sua classificação é: Sarada')}    
        else{
        if (imc < 30.0){console.log('Sua classificação é: Rechonchuda')}
        else{
        if (imc >= 30.0){console.log('Sua classificação é: Obesa')}
                }
            }
        }
        break;
        
        case 'masculino':
        if (imc < 18.5){console.log('Sua classificação é: Magro')}
        else{
        if (imc < 25.0){console.log('Sua classificação é: Sarado')}    
        else{
        if (imc < 30.0){console.log('Sua classificação é: Rechonchudo')}
        else{
        if (imc >= 30.0){console.log('Sua classificação é: Obeso')}
                }
            }
        }
        break; 
    }

}



