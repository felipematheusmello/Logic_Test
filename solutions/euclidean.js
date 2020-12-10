/* 
N = números de círculos de 0 até n-1
[0, n-1 ]

Não entendi muito bem esse último desafio  =/
*/

const solution = (N, M) => {
  let chocolateNumber = N - 1;
  let wrappers = M;

  return chocolateNumber - wrappers;
};

/* 
peguei o número de doces e julguei o M como o número
de Wrappers pela representação do número de chocolates X + M,
 ou seja chocolate que a pessoa já comeu mais o número de 
 embrulhos que daria o próximo chocolate.
*/
