const conjuntoA = ['B', 'C', 'A', 'D'];
const conjuntoB = ['D', 'C', 'A', 'B'];
const conjuntoC = ['D', 'A'];
function ConjuntoAB (conjuntoA, conjuntoC){
return conjuntoC.every(val => conjuntoA.includes(val));
}
function ConjuntoBA(conjuntoB, conjuntoA){
return conjuntoA.every(val => conjuntoB.includes(val));
}
console.log(ConjuntoAB(conjuntoA, conjuntoC));
console.log(ConjuntoBA(conjuntoB, conjuntoA));
