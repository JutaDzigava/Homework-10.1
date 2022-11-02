// document.write("Hello World!");

// window.alert("please, accept the cookies!");

console.log("Hello, I am Consol Log");

console.log(document.getElementById("myname").innerHTML);

document.getElementById("myname").innerHTML = "jondo";

console.log(5);
console.log("5");

var saxeli = "salome";
console.log(saxeli);

var a=4, b=6;
console.log(a+b);

var firstname="jondo", lastname="bagaturia";
console.log(firstname + " " + lastname);

{
    let r=4;
    console.log(r);
}

{
    let x="5", y="6";
    let xricxvi = parseInt(x), yricxvi = parseInt(y);
    console.log(xricxvi + yricxvi);

    let a=5, b=6;
    let asityva = a.toString(), bsityva = b.toString();
    console.log(asityva + bsityva);
}

{
    let a=7, b=2;
    a = a+b;
    console.log(a);
    a = a-b;
    console.log(a)
    // a=7, b=2

    a += b;
    console.log(a);
    // a=9, b=2

    a -= b;
    console.log(a)
    // a=7, b=2

    a *= b;
    console.log(a)
    // a=14, b=2

    b=3;
    a /= b;
    console.log(a);
    // b=4.666666666666667

    a=14;
    a %= b;
    console.log(a);
    // a=2
}

{
    let a=8, b=3, c=a>b; //boolean
    console.log(c);

    if(true){
        console.log("მართალია");
    }
    else{
        console.log("ტყუილია;");
    }
}

{
    let ricxvi = 0;

    if(ricxvi == 0){
        console.log(ricxvi + " nulis tolia");
    }
    else if(ricxvi > 0){
        console.log(ricxvi + " dadebitia");
    }
    else{
        console.log(ricxvi + "uaryofitia");
    }
}

{
    let op = "+", a=5, b=2;
    switch(op){
        case "+":
            console.log(a+b);
        break;
        case "-":
            console.log(a-b);
        break;
        case "*":
            console.log(a*b);
        break;
        case "x":
            console.log(a*b);
        break;
        case "/":
            console.log(a/b);
        break;
        case ":":
            console.log(a/b);
        break;
        default: "ar agirchevia operatori, jigar!";
    }
}

{
    for(i=0; i<10; i++){
        console.log(i);
    }
    let a=0;
    while(a<10){
        console.log(a);
        a++;
    }
}

document.getElementById("test").innerHTML = '<a href="3">damaklike</a>';


// let anteba = () => {
//     document.getElementById("light").src = "img/on.png";
// }
// let chaqroba = () => {
//     document.getElementById("light").src = "img/off.png";
// }


