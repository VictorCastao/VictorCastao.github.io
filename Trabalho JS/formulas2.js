function Q1() {
    let r = Number.parseFloat(document.getElementById('r-1').value);
    let i = Number.parseFloat(document.getElementById('i-1').value);
    document.getElementById('RQ1').innerHTML = Tensão(r,i);
    
    function Tensão (r,i)  {
    return ( (r * i) + ' ' + 'Volts');
    }
}


function Q2() {
    let u = Number.parseFloat(document.getElementById('u-1').value);
    let i = Number.parseFloat(document.getElementById('i-2').value);
    // Segue aqui seu código
    document.getElementById('RQ2').innerHTML = Potencia(u,i);
    
    function Potencia (u,i)  {
    return ((u * i) + ' ' + 'W');
    } 
}



function Q3() {
    let m = Number.parseFloat(document.getElementById('m').value);
    let v = Number.parseFloat(document.getElementById('v').value);
    document.getElementById('RQ3').innerHTML = EnergiaCinética(m,v);
    
    function EnergiaCinética (x,y)  {
    return ((m * (Math.sqrt(v,2))/2) = " " + "J");
    }
}


function Q4() {
    let f = Number.parseFloat(document.getElementById('f-1').value);
    let a = Number.parseFloat(document.getElementById('a-1').value);
    
    document.getElementById('RQ4').innerHTML = Pressão(f,a);
    
    function Pressão (f,a)  {
    return ((f/a) + ' ' + "N/m²");
    } 
}


function Q5() {
    let k = Number.parseFloat(document.getElementById('k-1').value);
    let x = Number.parseFloat(document.getElementById('x-1').value);
    
    document.getElementById('RQ5').innerHTML = EnergiaElástica(k,x);
    
    function EnergiaElástica (k,x)  {
    return ((k * (Math.pow(x,2))/2) + ' ' + "J");
    } 
}


function Q6() {
    let m = Number.parseFloat(document.getElementById('m-2').value);
    let h = Number.parseFloat(document.getElementById('h-1').value);
    
    document.getElementById('RQ6').innerHTML = EnergiaPotencialGravitacional(m,h);
    
    function EnergiaPotencialGravitacional (m,g)  {
    return ((10 * m * h) + ' ' + "j");
    } 
}


function Q7() {
    let d = Number.parseFloat(document.getElementById('D-líquido').value);
    let v = Number.parseFloat(document.getElementById('V-SólidoSubmerso').value);
    document.getElementById('RQ7').innerHTML = Empuxo(d,v);
    
    function Empuxo (d,v)  {
    return ((d * v * 10) + ' ' + "N");
    } 
}


function Q8() {
    let L = Number.parseFloat(document.getElementById('Lâmbda').value);
    let f = Number.parseFloat(document.getElementById('frequência').value);
    
    document.getElementById('RQ8').innerHTML = VelocidadeSom(L,f);
    
    function VelocidadeSom (L,f)  {
    return ((L * f) + ' ' + "m/s");
    } 
}



function Q9() {
    let S = Number.parseFloat(document.getElementById('Distância Inicial').value);
    let V = Number.parseFloat(document.getElementById('Velocidade Inicial').value);
    let T = Number.parseFloat(document.getElementById('Tempo').value);
    let A = Number.parseFloat(document.getElementById('Aceleração').value);
    let x = (Math.pow(T,2))/2
    document.getElementById('RQ9').innerHTML = Sorvetão(S,V,T,A,x);
    
    function Sorvetão (S,V,T,A,x)  {
    return ((S + (V * T) + (A * x)) + ' ' + "m");
    } 
}



function Q10() {
    let m1 = Number.parseFloat(document.getElementById('M-concentração 1').value);
    let m2= Number.parseFloat(document.getElementById('M-concentração 2').value);
    let v1= Number.parseFloat(document.getElementById('V-volume 1').value);
    let v2= Number.parseFloat(document.getElementById('V-volume 2').value);
    let vf= Number.parseFloat(document.getElementById('V-volume final').value);
    
    document.getElementById('RQ10').innerHTML = ConcentraçãoFinalMistura(m1,m2,v1,v2,vf);
    
    function ConcentraçãoFinalMistura (m1,m2,v1,v2,vf  {
    return ((((m1 * v1) + (m2 * v2))/ vf) + ' ' + "Mol/L");
    } 
}

function Q11() {
    let c1 = Number.parseFloat(document.getElementById('concentração 1').value);
    let v2= Number.parseFloat(document.getElementById('volume 2').value);
    let v1= Number.parseFloat(document.getElementById('volume 1').value);
   
    
    document.getElementById('RQ11').innerHTML = Concentração2(c1,v1,v2);
    
    function ConcentraçãoFinalMistura (c1,v1,v2)  {
    return (((c1 * v1)/v2) + ' ' + "Mol/L");
    } 
}




function Q12() {
    let c = Number.parseFloat(document.getElementById('Capital Inicial').value);
    let i = Number.parseFloat(document.getElementById('juros').value);
    let t = Number.parseFloat(document.getElementById('tempo de rendimento').value);
    let aux = i/100;
   
    
    document.getElementById('RQ12').innerHTML = JurosCompostos(aux,t,c);
    
    function JurosCompostos (aux,t,c)  {
    return ((c * (Math.pow((1 + aux),t))) + ' ' + "R$");
    } 
}



function Q13() {
    let l = Number.parseFloat(document.getElementById('Lados Iguais').value);
    
    
    document.getElementById('RQ13').innerHTML = AreaTriânguloEquilátero(l);
    
    function AreaTriânguloEquilátero (l)  {
    return (((Math.pow(l,2)* Math.sqrt(3))/4) + ' ' + "m²");
    } 
}




function Q14() {
    let l = Number.parseFloat(document.getElementById('ldif').value);
    let h = Number.parseFloat(document.getElementById('alt').value);
    document.getElementById('RQ14').innerHTML = AreaTriânguloIsóceles(l,h);
    
    function AreaTriânguloIsóceles (l,h)  {
    return (((l * h)/2) + ' ' + "m²");
    } 
}





function Q15() {
    let Maior = Number.parseFloat(document.getElementById('Base Maior').value);
    let Menor = Number.parseFloat(document.getElementById('Base Menor').value);
    let h = Number.parseFloat(document.getElementById('Altura do Trapézio').value);
   
    
    document.getElementById('RQ15').innerHTML = AreaTrapézio(Maior,Menor,h);
    
    function AreaTrapézio (Maior,Menor,h)  {
    return ((((Maior + Menor) * h)/2) + ' ' + "m²");
    } 
}







function Q16() {
    let a = Number.parseFloat(document.getElementById('Lado a do Cubo').value);
    let b = Number.parseFloat(document.getElementById('Lado b do Cubo').value);
    let c = Number.parseFloat(document.getElementById('Lado c do Cubo').value);
   
    document.getElementById('RQ16').innerHTML = VolumeCubo(a,b,c);
    
    function VolumeCubo (a,b,c)  {
    return ((a * b * c) + ' ' + "m³");
    } 
}