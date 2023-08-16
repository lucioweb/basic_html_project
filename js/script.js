//Contador de números pares menores ou iguais a 20.
//Utiliza um contador dentro de uma estrutura for.
//E exibe os números.
function exercicio_for1() {
    alert("Contador de números pares menores ou iguais a 20.");
    p = "";
    for (var i = 0; i <= 20; i += 2) {
        p = p + i + " ";
//        p += i + ", ";
    }
    alert("Parabéns!\nSeu script está correto!\nOs números pares menores ou iguais a 20 são:\n" + p);
}

//Este script verifica se um número informado é par.
function exercicio_for2() {
    alert("Este script verifica se um número informado é par.");
    var n = parseInt(prompt("Digite um número inteiro."));
    for (var a = 1; a <= 4; a = a + 1){
    
//    for (var a = 1; a <= 4; a = a + 1)
    if(n % 2!==0){
          alert("O número " + n +" não é par.");
          var n = parseInt(prompt("Digite um número."));    
    }else {
            alert("Parabéns!\nSeu script está correto!\nO número " + n +" é par.");
            break;
        }
}
}

//Este script soma 5 númmeros inteiros.
function exercicio_for3() {
    alert("Este script soma 5 números inteiros.");
    s = 0;
    for (var a = 0; a < 5; a++) {
        n = parseInt(prompt("Digite o " + (a + 1) + "º número"));
        s += n;
    }
    alert("Parabéns!\nSeu script está correto!\nA soma dos númeos informados é " + s + ".");
}

//Este script utiliza a estrutura de repetição for. Verifica o maior de cinco números digitados.
function exercicio_array1() {
    var notas = new Array();
    for (var i = 0; i < 5; i++) {
        notas[i] = Number(prompt("Digite um número. "));
    }
    for (var i = 0; i < 5; i++) {
//        console.log(notas.length);
alert("Parabéns!\nSeu script está correto!\nO número informado foi ".concat(notas[i]));
//alert("Números " + notas[i] + "<br>");
    }
}

function exercicio_array2() {
    var arr1 = ["Maria", " Joana"];
    var arr2 = [" Luiza", " Tobias", " Luiz"];
    var arr3 = [" Romana", " Morgan"];
    var myChildren = arr1.concat(arr2, arr3);
    alert("Meus filhos são: ".concat(myChildren));
}

function exercicio_for4(){
    alert("Este script utiliza a estrutura de repetição for.\nVerifica o maior de cinco números digitados.");
    var maior;
    for(var i=0;i<5;i++){
        numero=parseFloat(prompt("Digite um númeo"));
        if(numero>maior||i===0){
            alert(maior);
        }
    }
}

//Este script solicita um número e  retorna para o usuário o número informado.\nExemplo de estrutura sequencial.
function estrutura_sequencial1() {
    alert("Este script solicita um número e  retorna para o usuário o número informado.\nExemplo de estrutura sequencial.");
    n = parseInt(prompt("Digite um número."));
    alert("O número informado foi " + n +".");
//  alert("O número informado foi ".concat(n));
}

//Este script solicita uma medida em metros e a converte em centímetros.
function estrutura_sequencial2() {
    alert("Este script solicita uma medida em metros e a converte em centímetros.");
    m = parseFloat(prompt("Informe a medida (m) a converter."));
    alert("A medida informada corresponde a " + m * 100 + "cm.");
}

//Meu primeiro script é uma mensagem de boas vindas.
function estrutura_sequencial3() {
    alert("Meu primeiro script é uma mensagem de boas vindas.");
    alert("Olá!\nSeja bem vindo!\nEsse é meu primeiro script.");
}

//Este script soma 5 númmeros inteiros.
function estrutura_sequencial4() {
     alert("Este script soma 5 númmeros inteiros.");
     n1 = parseInt(prompt("Digite o 1º número"));
     n2 = parseInt(prompt("Digite o 2º número"));
     n3 = parseInt(prompt("Digite o 3º número"));
     n4 = parseInt(prompt("Digite o 4º número"));
     n5 = parseInt(prompt("Digite o 5º número"));
     
     soma = n1 + n2 + n3 + n4 + n5;
     alert("A soma dos 5 números informados é " + soma +".");
      
}

//Este script soma dois números inteiros.
function estrutura_sequencial5() {
    alert("Este script soma dois números inteiros.");
    x = prompt("Informe o primeiro número");
    y = prompt("Informe o segundo número");
    soma = parseInt(x) + parseInt(y);
    alert("A soma dos dois números informados é " + soma +".");
}

//Este scrip calcula seu salário a partir da carga horária diária e do ganho por hora.
function estrutura_sequencial6() {
    alert("Este scrip calcula seu salário a partir da carga horária diária e do ganho por hora.");
    h = prompt("Quanto você ganha (R$) por hora trabalhada?");
    m = prompt("Informe a carga horária (h) diária de trabalho.");
    alert("Seu salário mensal é de: R$" + (h * m) * 30 + ",00.");
}

//Este scrip calcula a área de uma circunferência dado seu raio.
function estrutura_sequencial7() {
    alert("Este scrip calcula a área de uma circunferência dado seu raio.");
    r = prompt("Informe o raio da circunferência.");
    alert("A área da circunferência de raio " + r + "uc é: " + 3.14 * Math.pow(r, 2) + "ua");
}

//Este script calcula a área de um quadrado dado o seu raio.
function estrutura_sequencial8() {
    alert("Este script calcula a área de um quadrado dado o seu raio.");
    l = prompt("Informe o lado do quadrado.");
    alert("O dobro da área do quadrado de lado L=" + l + " é " + 2 * Math.pow(l, 2) + "ua");
}

//Este script solicita um número entre 0 e 10 e retorna para o usuário o número informado.
function exercicio_if_else1() {
    alert("Este script solicita um número entre 0 e 10 e retorna para o usuário o número informado.\nExemplo de estrutura sequencial.");
    n = parseInt(prompt("Digite um número."));
   
    if (n < 0 || n > 10 || isNaN(n)){
         alert("Informe um número entre 0 e 10.");
    }else{
         alert(n);
         
    }
}

//Este script verifica se um número solicitado\nestá dentro de um intervalo desejado.\nFaz uso de uma estrutura condicional simples que impõe que a instrução ou bloco de intruções só sejam excutadas se a condição estabelecida for satisfeita.
function exercicio_if_else2() {
    alert("Este script verifica se um número solicitado\nestá dentro de um intervalo desejado.\nFaz uso de uma estrutura condicional simples que impõe que a instrução ou bloco de intruções só sejam excutadas se a condição estabelecida for satisfeita.");
    var n = parseInt(prompt("Informe um número inteiro entre 0 e 10"));
    for (var a = 1; a <= 4; a = a + 1) {
        if (n > 10 || isNaN(n)) {
            alert("Desculpe!\nDigite novamente.\nO valor informado não está no intervalo desejado, ou não é um número.\nResta(m) apenas " + (5 - a) + " tentativa(s)");
            n = parseInt(prompt("Informe um número inteiro entre 0 e 10"));
        } else {
            alert("Parabéns.\n" + n + " está no intervalo desejado.\nBye bye!!");
            break;
        }
    }
}

//Este script faz o cálculo da média(M) escolar de um aluno,\ndadas as 4 notas trimestrais.
function exercicio_if_else3() {
    alert("Este script faz o cálculo da média(M) escolar de um aluno,\ndadas as 4 notas trimestrais.");
    N1 = parseFloat(prompt("Nota 1º Trimestre"));
    N2 = parseFloat(prompt("Nota 2º Trimestre"));
    N3 = parseFloat(prompt("Nota 3º Trimestre"));
    N4 = parseFloat(prompt("Nota 4º Trimestre"));
    M = (N1 + N2 + N3+ N4) / 4;

    if (5<=M<7) {
            alert("Sua média foi " + M.toFixed(2) + " e o Sr. está em recuperação!");
    }
    else if (M < 5) {
            alert("Sua média foi " + M.toFixed(2) + " e o Sr. está reprovado!");
    }else {
            alert("Sua média foi " + M.toFixed(2) + " e o Sr. está aprovado!");
    }
    
   
   }

//Este script solicita dois números e imprime o maior deles.   
function exercicio_if_else4() {
    alert("Este script solicita dois números e imprime o maior deles.");
    num1 = parseInt(prompt("Digite o primeiro número"));
    num2 = parseInt(prompt("Digite o segundo número"));
    if (num1 > num2) {
        alert("Os números informados foram " +num1+ " e " +num2+ ".\nO primeiro número é maior que o segundo.");
    } else if (num2 > num1) {
        alert("Os números informados foram " +num1+ " e " +num2+ ".\nO segundo número é maior que o primeiro.");
    }else{
        alert("Os números informados são iguais.");
    }
}

//Este script verifica se o sexo informado é masculino ou feminino.
function exercicio_if_else5() {  
    alert("Este script verifica se o sexo informado é masculino ou feminino.");
    var m = prompt("Digite M ou F,conforme seu sexo seja masculino ou feminino.");
    for (var a = 1; a <= 4; a = a + 1) {
    if (m === "m" || m === "M") {
        alert("O sexo informado foi masculino.\nParabéns!");
        break;
    } else if (m === "f" || m === "F") {
        alert("O sexo informado foi feminino.\nParabéns!");
         break;
    } else {
        alert("Desculpe!\nDigite novamente.\nO sexo informado é inválido.\nResta(m) apenas " + (5 - a) + " tentativa(s).\nDigite M ou F,conforme seu sexo seja masculino ou feminino.");
        var m = prompt("Digite M ou F,conforme seu sexo seja masculino ou feminino.");
       
        }
         
    }  
   
}

//Script usando a estrutura de repetição do while
function exercicio_do_while1() {
alert("Script usando a estrutura de repetição do while.");
var nota;
    do{
        nota = parseFloat(prompt("Digite um número entre 0 e 10"));
    } while (nota < 0 || nota > 10 || isNaN(nota));
    alert(nota);

}

//Script usando a estrutura de repetição do while.
function exercicio_do_while2() {
alert("Script usando a estrutura de repetição do while.");
var nota;
    do{
        nota = parseFloat(prompt("Digite um número entre 0 e 10"));
    } while (nota < 0 || nota > 10 || isNaN(nota));
    alert(nota);

}

//Este script verifica se a letra informada é vogal ou consoante.
function exercicio_switch1() {
    alert("Este script verifica se a letra informada é vogal ou consoante.");
    var letra = prompt("Digite uma letra");
    letra = letra.toUpperCase();//toUpperCase Transforma as letras em maiusculas
    switch (letra) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            alert("A letra Você digitou uma vogal");
            break;

        default:
            alert("Você digitou uma consoante");
    }
}

//Escolha seu candidato digitando de 1 a 3, ou vote nulo.
function exercicio_switch2() {
    escolha = prompt("Escolha seu candidato digitando de 1 a 3, ou vote nulo.");
    switch (escolha) {
        case "1":
            alert("Lula presidente!");
            break;
        case "2":
            alert("Bolsonaro presidente!");
            break;
        case "3":
            alert("Aécio presidente!");
            break;
        default:
            alert("Voto nulo");
    }
}

//Este script utiliza a estrutura de repetição do while.\nVerifica se o sexo informado é masculino ou feminino.
function exercicio_do_while3() { 
    alert("Este script utiliza a estrutura de repetição do while.\nVerifica se o sexo informado é masculino ou feminino.");
    var nome;
    do{
        nome=prompt("Escolha o nome.");
        if(nome.length<=3 || !isNaN(nome)){
            alert("O nome é inválido.");                     
        }
    }while(nome.length<=3 || !isNaN(nome));
    
    var sexo;
    do{
        sexo=prompt("Escolha o sexo.");
        
    }while(sexo!=="m" && sexo!=="f");
    alert("Obrigado!");
}

//Este script utiliza a estrutura de repetição for.\nVerifica o maior de cinco números digitados.
function exercicio_for4(){
    alert("Este script utiliza a estrutura de repetição for.\nVerifica o maior de cinco números digitados.");
    var maior;
    for(var i=0;i<5;i++){
        numero=parseFloat(prompt("Digite um númeo"));
        if(numero>maior||i===0){
            alert(maior);
        }
    }
}











function SomenteNumero(e) {
                var tecla; //Armazena a tecka pressionada.
                 
                if (e.which) {
                    tecla = e.which;
                } else {
                    tecla = e.keyCode;
                }
 
                if ((tecla >= 48 && tecla <= 57) || (e.which === 08)) {
                    return true;
                } else {
                    return false;
                }
             }
             
function precoProduto() {

    alert("Digite os preços dos produtos");
    pr01 = parseFloat(prompt("Digite o preço do 1º produto"));
    pr02 = parseFloat(prompt("Digite o preço do 2º produto"));
    pr03 = parseFloat(prompt("Digite o preço do 3º produto"));

    if (pr01 < pr02 && pr03 > pr01) {
        alert("Você deve comprar o 1º produto, ele é o mais barato: " + pr01);
    } else if (pr02 < pr01 && pr03 > pr02) {
        alert("Você deve comprar o 2º produto, ele é o mais barato: " + pr02);
    } else if (pr03 < pr01 && pr02 > pr03) {
        alert("Você deve comprar o 3º produto, ele é o mais barato: " + pr03);
    }

}

function positivoNegativo() {

    //Faça um Programa que peça um valor e mostre na tela se o valor é 
    //positivo ou negativo.
    num01 = parseInt(prompt("digite um numero"));
    if (num01 >= 0) {
        alert("Número positivo " + "(" + num01 + ")");
    } else {
        alert("Número negativo " + "(" + num01 + ")");
    }

}
function menorNumero() {
    n1 = parseInt(prompt("Digite o primeiro número"));
    n2 = parseInt(prompt("Digite o segundo número"));
    n3 = parseInt(prompt("Digite o terceiro número"));

    if (n1 > n2) {
        aux = n1;
        n1 = n2;
        n2 = aux;
    }
    if (n2 > n3) {
        aux = n2;
        n2 = n3;
        n3 = aux;
    }
    if (n1 > n2) {
        aux = n1;
        n1 = n2;
        n2 = aux;
    }
    alert(" - " + n1 + " - " + n2 + " - " + n3);

}

function repeticao() {
    s = 0;
    for (var i = 0; i < 5; i++) {
        n = parseFloat(prompt("Digite o " + (i + 1) + "° número"));
        s += n;
    }
    alert("A soma dos  números informados é " + s);
}


function comwhile2() {
    var resposta = "não";
    while (resposta !== "sim") {
        resposta = prompt("o cabra é bonito?");
    }
    alert("Parabéns,o cabra é bonito");
}

function exfor() {
    for (var i = 2; i <= 8; i += 2) {
        alert("Os Números pares entre 0 e 10 são:\n");
        alert(+i);
    }
}



function exercicio03() {
    for (i = 1; i < 2; i++) {
        for (a = 1; a < 50; a++) {
            nome = prompt("digite seu nome");
            if (nome.length > 3) {
                break;
            } else {
                alert("Nome invalido");
            }
        }
        for (a = 1; a < 50; a++) {
            idade = parseInt(prompt("Digite sua idade"));
            if (idade > 0 && idade < 150) {
                break;
            } else {
                alert("Idade invalida tente denovo");
            }
        }
        for (a = 1; a < 50; a++) {
            salario = parseFloat(prompt("Digite seu salario"));
            if (salario > 0) {
                break;
            } else {
                alert("Salario não pode ser zero ou menos");
            }
        }
        for (a = 1; a < 50; a++) {
            sexo = prompt("Digite o sexo m/f");
            if (sexo === "m" || sexo === "M") {
                sexo = "Masculino";
                break;
            } else if (sexo === "f" || sexo === "F") {
                sexo = "Feminino";
                break;
            } else {
                alert("Sexo invalido digite m/f");
            }
        }
        for (a = 1; a < 50; a++) {
            estado = prompt("Estado civil - s / c / v / d");
            if (estado === "s" || estado === "S") {
                estado = "Solteiro(a)";
                break;
            } else if (estado === "c" || estado === "C") {
                estado = "Casado(a)";
                break;
            } else if (estado === "v" || estado === "V") {
                estado = "Viuvo(a)";
                break;
            } else if (estado === "d" || estado === "D") {
                estado = "Divorciado(a)";
                break;
            } else {
                alert("Opção invalida tente denovo ");
            }
        }

        alert("Bem vindo cadastro feito com sucesso");
        alert("Nome " + nome + "\n Idade " + idade + " anos \n Salario " + salario.toFixed(2) + "\n Sexo " + sexo + "\n Estsdo cívil " + estado);
    }
}



function maiorMenor() {
    n1 = parseInt(prompt("Digite o 1º número"));
    n2 = parseInt(prompt("Digite o 2º número"));
    n3 = parseInt(prompt("Digite o 3º número"));

    if (n1 > n2 && n3 < n1) {
        alert("O 1º número é maior");
    } else if (n2 > n1 && n3 < n2) {
        alert("O 2º número é maior");
    } else if (n3 > n1 && n2 < n3) {
        alert("O 3º número é maior");
    }
//para colocar em ordem do menor para o maior    
    /*    if(a > b) {
     aux = a;
     a = b;
     b = aux;
     }
     if(b > c) {
     aux = b;
     b = c;
     c = aux;
     }
     if(a > b) {
     aux = a;
     a = b;
     b = aux;
     }
     */
}