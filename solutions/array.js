/* 
Anotação do que entendi do enúnciado ;D
Array A vai receber um número de inteiros, que 
contém um número ímpar de elementos com grande 
parte dos elementos emparelhado exceto 1, que 
está desemparelhado e não segue um padrão.
 A função deve pegar um array A com N números
e retornar o número desemparelhado ou que não
segue o padrão dado
*/

const solution = (A) => {
  let unpairedNumber = [];
  for (let i = 0; i < A.length; i++) {
    unpairedNumber = A.filter((number) => number === A[i]);
    if (unpairedNumber.length % 2 === 1) {
      return A[i];
    }
  }
};

/* 
Nessa primeira etapam, pensei que como o número desemparelhado
seria único, usei o filter para retornar um array com números iguais
e iterei sobre o length dele, então considerando o 'assuma que',
um dos valores se repetiria em valores ímpares, tomei isso como base.
*/
