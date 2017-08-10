

function Vector(x,y) {
  this.x = x;
  this.y = y;
  this.length=function(){
      return (Math.sqrt(Math.pow(x,2)+Math.pow(y,2))).toFixed(1);
  };
}

Vector.prototype.suma = function(vector2) {
    let vector3 = new Vector (this.x+vector2.x,this.y+vector2.y);
    /*
    console.log("x1: "+this.x + " y1: "+this.y );
    console.log("x2: "+vector2.x + " y2: "+vector2.y );
    console.log("x3: "+vector3.x + " y3: "+vector3.y );*/
    return vector3
};
Vector.prototype.resta = function(vector2) {
    let vector3 = new Vector (this.x-vector2.x,this.y-vector2.y);
    return vector3
};
var vec = new Vector(5,4);

console.log("vec1\nx1: "+vec.x + "\ty2: "+vec.y+" leght: "+vec.length());
var vec2 = new Vector(3,2);
console.log("vec2\nx1: "+vec2.x + "\ty2: "+vec2.y+" leght: "+vec2.length() );
var vec3 = vec.suma(vec2);
console.log("vec3\nx1: "+vec3.x + "\ty2: "+vec3.y+" leght: "+vec3.length() );
vec3 = vec.resta(vec2);
console.log("vec3\nx1: "+vec3.x + "\ty2: "+vec3.y );




function inner(text) {
  this.text = [text];

};
inner.prototype.minHeight = function () {
  return this.text.length;
};
inner.prototype.minWidth = function () {
  return this.text.length+1;
};
inner.prototype.draw = function (w,h) {
  return this.text;
};

function StretchCell(inner, width, height) {
    this.inner = inner;
    var text = this.inner.text;
    if (text.length < height) {
        while (height - text.length > 0) {
            text = text.concat([""]);
            --height;
        }
    }
    this.inner.text = text.map(function (line) {
        if (line.length < width) {
            return line.concat(' '.repeat(width - line.length));
        } else {
            return line;
        }
    });
}

StretchCell.prototype.minHeight = function () {
    return this.inner.minHeight();
};
StretchCell.prototype.minWidth = function () {
    return this.inner.minWidth();
};
StretchCell.prototype.draw = function (w, h) {
    return this.inner.draw(w, h);
};

var sc = new StretchCell(new inner("abc"), 1, 2);

console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]




function logFive(sequence){
    for(i=0;i<5;i++)
    {
        console.log(sequence.current());
        if(!sequence.next())
        break;
    }
}

function ArraySeq(array){
  this.pos=0;
  this.array=array;
}

ArraySeq.prototype.current=function(){
  return this.array[this.pos]; 
};

ArraySeq.prototype.next=function(){
  this.pos++;
  if(this.pos>=this.array.length) 
    return false;
  else
    return true;
};

function RangeSeq(from,to){
  this.pos=from;
  this.to=to;
}

RangeSeq.prototype.current=function(){
  return this.pos; 
};

RangeSeq.prototype.next=function(){
  this.pos++
  if(this.pos>this.to)
    return false;
  else
    return true;
};
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
