let num = ""
let new_num;
let new_num2;
document.getElementById("b9").onclick = function() {
    num = num + "9"
    document.getElementById("screen").innerHTML = num
}

document.getElementById("b8").onclick = function() {
    num = num + "8"
    document.getElementById("screen").innerHTML = num
}
document.getElementById("b7").onclick = function() {
    num = num + "7"
    document.getElementById("screen").innerHTML = num
}
document.getElementById("b6").onclick = function() {
    num = num + "6"
    document.getElementById("screen").innerHTML = num
}
document.getElementById("b5").onclick = function() {
    num = num + "5"
    document.getElementById("screen").innerHTML = num
}
document.getElementById("b4").onclick = function() {
    num = num + "4"
    document.getElementById("screen").innerHTML = num
}
document.getElementById("b3").onclick = function() {
    num = num + "3"
    document.getElementById("screen").innerHTML = num
}
document.getElementById("b2").onclick = function() {
    num = num + "2"
    document.getElementById("screen").innerHTML = num
}
document.getElementById("b1").onclick = function() {
    num = num + "1"
    document.getElementById("screen").innerHTML = num
}
document.getElementById("b0").onclick = function() {
    num = num + "0"
    document.getElementById("screen").innerHTML = num
}

document.getElementById("bclear").onclick = function() {
    num = ""
    document.getElementById("screen").innerHTML = 0
}
document.getElementById("bdel").onclick = function() {
    let new_num = '';
    if (num == '') {
        document.getElementById("screen").innerHTML = 0;
    } else {


        for (i = 0; i < num.length - 1; i++) {
            new_num = new_num + num[i];


        }
        num = new_num;
        document.getElementById("screen").innerHTML = num
    }


}

document.getElementById("bplus").onclick = function() {
    new_num = Number(num);
    num = num + "+"
    document.getElementById("screen").innerHTML = num;
    console.log(new_num);
}
document.getElementById("bminus").onclick = function() {
    new_num = Number(num);
    num = num + "-"
    document.getElementById("screen").innerHTML = num;
    console.log(new_num);
}
document.getElementById("btimes").onclick = function() {
    new_num = Number(num);
    num = num + "x"
    document.getElementById("screen").innerHTML = num;
    console.log(new_num);
}
document.getElementById("bdivide").onclick = function() {
    new_num = Number(num);
    num = num + "/"
    document.getElementById("screen").innerHTML = num;
    console.log(new_num);
}
document.getElementById("bpercent").onclick = function() {
    new_num = Number(num);
    num = num + "%"
    document.getElementById("screen").innerHTML = num;
    console.log(new_num);
}



document.getElementById("bequal").onclick = function() {

    if (num.includes("+")) {
        new_num2 = Number(num.slice(num.indexOf("+") + 1));

        let sum;
        sum = new_num2 + new_num;
        num = String(sum);
        document.getElementById("screen").innerHTML = sum;



    } else if (num.includes("-")) {
        new_num2 = Number(num.slice(num.indexOf("-") + 1));

        let sum;
        sum = new_num - new_num2;
        num = String(sum);
        document.getElementById("screen").innerHTML = sum;
    } else if (num.includes("x")) {
        new_num2 = Number(num.slice(num.indexOf("x") + 1));
        let total;
        total = new_num * new_num2;
        document.getElementById("screen").innerHTML = total;
        console.log(total)
        num = String(total)
    } else if (num.includes("/")) {
        new_num2 = Number(num.slice(num.indexOf("/") + 1));
        let total;
        total = new_num / new_num2;
        document.getElementById("screen").innerHTML = total;
        console.log(total)
        num = String(total)
    } else if (num.includes("%")) {
        let total;
        total = new_num / 100;
        document.getElementById("screen").innerHTML = total;
        console.log(total)
        num = String(total)
    }

}