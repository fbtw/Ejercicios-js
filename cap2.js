for (var n=1, ch="#";n<=7;n++,ch+="#")
    console.log(n+ " "+ch);
var fb;
for (var n=1;n<=100;n++){
    if (n%15==0) console.log("FzBz");
    else if (n%5==0) console.log("Bz");
    else if (n%3==0) console.log("Fz");
    else console.log(n);
}

for (var n=1;n<9;n++){
    if (n%2==0) console.log("#  #  #  #  ");
    else console.log("  #  #  #  #");
}
    