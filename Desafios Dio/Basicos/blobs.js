/*
No planeta Alpha vive a criatura Blobs, que come precisamente 1/2 de seu suprimento de comida disponível todos os dias. Escreva um algoritmo que leia a capacidade inicial de suprimento de comida (em Kg), e calcule quantos dias passarão antes que Blobs coma todo esse suprimento até restar um quilo ou menos.

Entrada
A primeira linha de entrada contem um único inteiro N (1 ≤ N ≤ 1000), indicando o número de casos de teste. As N linhas seguintes contém um valor de ponto flutuante C (1 ≤ C ≤ 1000) correspondente à quantidade de comida disponível para Blobs.

Saída
Para cada caso de teste, imprima uma linha contendo o número de dias que Blobs irá demorar para comer todo seu suprimento de comida, seguido da palavra "dias".

 
Exemplo de Entrada |	Exemplo de Saída
3                  |         
40.0               |    
200.0              | 
300.0              | 

6 dias
8 dias
9 dias

 
*/

// complete as variaveis necessarias
let n = parseInt(gets());
function calcularDias(qtdComida) {
    if (qtdComida <= 1.0) {
      return 0;
    }
    const consomeComida = qtdComida / 2.0;
    
    return 1 + calcularDias(consomeComida);
}

while (n-- > 0) { //complete o codigo
    const c = parseFloat(gets());
    const dias = calcularDias(c); //atribua o valor correto a variavel

  console.log(`${dias} dias`);
 
}