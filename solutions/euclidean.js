/* 
       O que entendi ;D
Vou ter que passar de acordo com o módulo (x + m) modulo N (%)
e quando chegar a um chocolate que já foi comido eu vou parar
a execução
*/

const solution = (N, M) => {
  let chocolates = [];
  let nextChocolate = 0;
  for (let i = 0; i < N - 1; i++) {
    if (!chocolates.includes(nextChocolate)) {
      chocolates.push(nextChocolate);
      nextChocolate = (nextChocolate + M) % N;
    }
  }

  return chocolates.join(",");
};

/* 
          Como fiz *.*
Fiz um for para iterar sobre a quantidade 
de chocolates dentro do circulo que como 
no enúnciado falava iterava do 0 até o n-1
e para pegar o próximo chocolate eu usei a
formula (chocolate à ser comido + embrulho) % 
número de chocolates

*/
