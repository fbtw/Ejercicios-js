var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);

var arrarray = [[1,2,3],[4,5],[6,7],8];
var aplanado = arrarray.reduce(
    function(x, y) {
    return x.concat(y);
    })
console.log(aplanado);


var byName = {};
ancestry.map(
    function(person) {
    byName[person.name] = person;
    
});

function promedio(array) {
  function mas(a, b) { return a + b; }
  return array.reduce(mas) / array.length;
}

var edades = [];

var  tieneMami = ancestry.filter( 
    function( person ) {
        return byName[ person.mother ];
    }
);

tieneMami.forEach( function( person ) {
		edades.push(person.born - byName[ person.mother ].born );
    } );
console.log(edades);
console.log( promedio( edades ).toFixed(2) );


function agrupar( array, func ) {
	var grouped = {};
    var toGroup;
	array.map( function( arg ) {
		toGroup = func( arg );
		if( ! grouped[toGroup] ) { grouped[toGroup] = []; }
		grouped[func( arg )].push( arg );
	} );
	return grouped;
}

var agruparxSiglo = agrupar( 
    ancestry, 
    function ( person ) {
        return Math.ceil( person.died / 100 );
    }
);

var romanos = function(num) {//num < 100
  var decimalValue = [ 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var romanized = '';
  for (var i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
  return romanized;
}
for( let siglo in agruparxSiglo ) {
	if ( agruparxSiglo.hasOwnProperty( siglo ) ) {
	    let edad = agruparxSiglo[siglo].map( function( person ) {
		    return person.died - person.born;
		} );
		console.log(romanos(siglo) + '\t: ' + promedio( edad ).toFixed(3) );
	}
}


function every( array, func ) {
    for( let i = 0; i < array.length; i += 1 ) {
        if( func( array[i] ) === false ) { return false; }	
    }
    return true;
}
function some( array, func ) {
	for( let i = 0; i < array.lengthl; i += 1 ) {
		if( func( array[i] ) === true ) { return true; }
	}
	return false;
}
console.log( every( [ NaN, NaN, NaN ], isNaN ) );
console.log( every( [ NaN, NaN, 4 ], isNaN ) );
console.log( some( [ NaN, 3, 4 ], isNaN ) );
console.log( some( [ 2, 3, 4 ], isNaN ) );
