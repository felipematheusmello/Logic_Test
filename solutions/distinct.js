/* 
        O que entendi sobre o enúnciado ;D
O teste da um array com alguns números que se repetem
no entanto há um problema, que, alguns deles se divergem
e eu teria que achar o número de divergências
*/

const solution = (A) => {
  let differentNumbers = [];
  for (let i = 0; i < A.length; i++) {
    if (!differentNumbers.includes(A[i])) {
      differentNumbers.push(A[i]);
    }
  }
  return differentNumbers.length;
};

/* 
        Minha solução *.*
como era para ver quantos números tinham diferentes, eu verificava em um outro 
array se ele existia e logo depois se a resposta fosse não, eu dava push e o 
length já indicaria quantas divergências ocorreriam
*/
