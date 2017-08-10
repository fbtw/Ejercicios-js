
function rango(x,y,i){
    let arrarray =[];
    let c=0;
    if (i==null)i=1;
    do{
        arrarray[c]=x;
        x+=i;
        c++;
    }while (x!=y)
    arrarray[c]=y;
    return arrarray;
}
function sumatorio(arrarray){
    let s=0,i;
    for (i=0;i<arrarray.length;i++){
        s+=arrarray[i];
    }
    return s;
}

function severla(arrarray){
    let yarrarra=[],ln=arrarray.length;
    for (let i=0;i<ln;i++){
        yarrarra[i]=arrarray[ln-i-1]
   }
    return yarrarra;
}
function severla2(arrarray){
    let yarrarra=severla(arrarray),ln=arrarray.length;
    for (let i=0;i<ln;i++){
        arrarray[i]=yarrarra[i]
   }
}

function enésimo(lista, n) {
  if (lista.rest==null)
    return undefined;
  else if (n == 0)
    return lista.value;
  else
    return enésimo(lista.rest, n - 1);
}
var list = {
  value: 10,
  rest: {
    value: 20,
    rest: {
      value: 30,
      rest: {
        value: 40,
        rest: null
    }
    }
  }
};
function deepEqual(x, y) {
    if (x === y ){return true;}
    if ((typeof x != "object" || typeof y != "object") || 
        (x == null || y == null) || 
        (Object.keys(y).length != Object.keys(y).length)) {
        return false;
    } else {
        for (var asd in x) {
            return deepEqual(x[asd],y[asd]);
        }
    }
}

var v = rango(0,81,9);
console.log(rango(-2,2));
console.log(sumatorio(rango(1,10)));
console.log(v);
console.log(severla(v));
severla2(v);
console.log(v);
console.log(enésimo(list, 1));

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true