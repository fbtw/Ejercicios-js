
var cuadrado = function(x) {
  return x * x;
};
function chiqui(x,y){
    if (x<y)return x;
    else return y;
}

function pares(x){
    switch (x){
        case 0: return true;
        case 1: return false;
        default: return pares(x-2); 
    }
}

function cuentaBe(str){
    let ln = str.length;
    let x = 0, c = 0;
    do{
        if (str.charAt(x)=="b") c++;
        x++;
    }while(x<ln)
    return c
}
function cuenta(str,letra){
    let ln = str.length;
    let x = 0, c = 0;
    do{
        if (str.charAt(x)==letra) c++;
        x++;
    }while(x<ln)
    return c
}

console.log(chiqui(cuadrado(6), cuadrado(5)));
console.log (12+": \t"+ pares(12));
console.log (13+": \t"+ pares(13));
console.log ("babobibo: \t"+ cuentaBe("babobibo"));
var asd = "sipirkilifrigilistiki ispirilidisi";
console.log (asd+": \t"+ cuenta(asd,"i"));
