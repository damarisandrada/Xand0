flag = 1;

function myfunction1(){
    if(flag == 1){
        document.getElementById("a1").value = 1;
        document.getElementById("a1Img").src = "x.png";
        document.getElementById("a1Img").style.height = "100px"
        document.getElementById("a1Img").style.width = "115px"
        document.getElementById("a1").onclick = false;
        flag = 0;
    }
    else {
        document.getElementById("a1").value = 0;
        document.getElementById("a1Img").src = "o.png";
        document.getElementById("a1Img").style.height = "100px"
        document.getElementById("a1Img").style.width = "115px"
        document.getElementById("a1").onclick = false;
        flag = 1;
    }
}

function myfunction2(){
    if(flag == 1){
        document.getElementById("a2").value = 1;
        document.getElementById("a2Img").src = "x.png";
        document.getElementById("a2Img").style.height = "100px"
        document.getElementById("a2Img").style.width = "115px"
        document.getElementById("a2").onclick = false;
        flag = 0;
    }
    else {
        document.getElementById("a2").value = 0;
        document.getElementById("a2Img").src = "o.png";
        document.getElementById("a2Img").style.height = "100px"
        document.getElementById("a2Img").style.width = "115px"
        document.getElementById("a2").onclick = false;
        flag = 1;
    }
}

function myfunction3(){
    if(flag == 1){
        document.getElementById("a3").value = 1;
        document.getElementById("a3Img").src = "x.png";
        document.getElementById("a3Img").style.height = "100px"
        document.getElementById("a3Img").style.width = "115px"
        document.getElementById("a3").onclick = false;
        flag = 0;
    }
    else {
        document.getElementById("a3").value = 0;
        document.getElementById("a3Img").src = "o.png";
        document.getElementById("a3Img").style.height = "100px"
        document.getElementById("a3Img").style.width = "115px"
        document.getElementById("a3").onclick = false;
        flag = 1;
    }
}

function myfunction4(){
    if(flag == 1){
        document.getElementById("b1").value = 1;
        document.getElementById("b1Img").src = "x.png";
        document.getElementById("b1Img").style.height = "100px"
        document.getElementById("b1Img").style.width = "115px"
        document.getElementById("b1").onclick = false;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = 0;
        document.getElementById("b1Img").src = "o.png";
        document.getElementById("b1Img").style.height = "100px"
        document.getElementById("b1Img").style.width = "115px"
        document.getElementById("b1").onclick = false;
        flag = 1;
    }
}

function myfunction5(){
    if(flag == 1){
        document.getElementById("b2").value = 1;
        document.getElementById("b2Img").src = "x.png";
        document.getElementById("b2Img").style.height = "100px"
        document.getElementById("b2Img").style.width = "115px"
        document.getElementById("b2").onclick = false;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = 0;
        document.getElementById("b2Img").src = "o.png";
        document.getElementById("b2Img").style.height = "100px"
        document.getElementById("b2Img").style.width = "115px"
        document.getElementById("b2").onclick = false;
        flag = 1;
    }
}

function myfunction6(){
    if(flag == 1){
        document.getElementById("b3").value = 1;
        document.getElementById("b3Img").src = "x.png";
        document.getElementById("b3Img").style.height = "100px"
        document.getElementById("b3Img").style.width = "115px"
        document.getElementById("b3").onclick = false;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = 0;
        document.getElementById("b3Img").src = "o.png";
        document.getElementById("b3Img").style.height = "100px"
        document.getElementById("b3Img").style.width = "115px"
        document.getElementById("b3").onclick = false;
        flag = 1;
    }
}

function myfunction7(){
    if(flag == 1){
        document.getElementById("c1").value = 1;
        document.getElementById("c1Img").src = "x.png";
        document.getElementById("c1Img").style.height = "100px"
        document.getElementById("c1Img").style.width = "115px"
        document.getElementById("c1").onclick = false;
        flag = 0;
    }
    else {
        document.getElementById("c1").value = 0;
        document.getElementById("c1Img").src = "o.png";
        document.getElementById("c1Img").style.height = "100px"
        document.getElementById("c1Img").style.width = "115px"
        document.getElementById("c1").onclick = false;
        flag = 1;
    }
}

function myfunction8(){
    if(flag == 1){
        document.getElementById("c2").value = 1;
        document.getElementById("c2Img").src = "x.png";
        document.getElementById("c2Img").style.height = "100px"
        document.getElementById("c2Img").style.width = "115px"
        document.getElementById("c2").onclick = false;
        flag = 0;
    }
    else {
        document.getElementById("c2").value = 0;
        document.getElementById("c2Img").src = "o.png";
        document.getElementById("c2Img").style.height = "100px"
        document.getElementById("c2Img").style.width = "115px"
        document.getElementById("c2").onclick = false;
        flag = 1;
    }
}

function myfunction9(){
    if(flag == 1){
        document.getElementById("c3").value = 1;
        document.getElementById("c3Img").src = "x.png";
        document.getElementById("c3Img").style.height = "100px"
        document.getElementById("c3Img").style.width = "115px"
        document.getElementById("c3").onclick = false;
        flag = 0;
    }
    else {
        document.getElementById("c3").value = 0;
        document.getElementById("c3Img").src = "o.png";
        document.getElementById("c3Img").style.height = "100px"
        document.getElementById("c3Img").style.width = "115px"
        document.getElementById("c3").onclick = false;
        flag = 1;
    }
}

function winner(){
    var a1, a2, a3, b1, b2, b3, c1, c2, c3;
    a1 = document.getElementById("a1").value;
    a2 = document.getElementById("a2").value;
    a3 = document.getElementById("a3").value;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    c1 = document.getElementById("c1").value;
    c2 = document.getElementById("c2").value;
    c3 = document.getElementById("c3").value;

     if ((a1 == 1) && (a2 == 1) && (a3 == 1)) {
    document.getElementById("p1Wins").style.display ="flex";
    document.getElementById("b1").onclick = false;
    document.getElementById("b2").onclick = false;
    document.getElementById("b3").onclick = false;
    document.getElementById("c1").onclick = false;
    document.getElementById("c2").onclick = false;
    document.getElementById("c3").onclick = false;
}
else if ((b1 == 1) && (b2 == 1) && (b3 == 1)) {
    document.getElementById("p1Wins").style.display = "flex";
    document.getElementById("a1").onclick = false;
    document.getElementById("a2").onclick = false;
    document.getElementById("a3").onclick = false;
    document.getElementById("c1").onclick = false;
    document.getElementById("c2").onclick = false;
    document.getElementById("c3").onclick = false;
}
else if ((c1 == 1) && (c2 == 1) && (c3 == 1)) {
    document.getElementById("p1Wins").style.display = "flex";
    document.getElementById("a1").onclick = false;
    document.getElementById("a2").onclick = false;
    document.getElementById("a3").onclick = false;
    document.getElementById("b1").onclick = false;
    document.getElementById("b2").onclick = false;
    document.getElementById("b3").onclick = false;
}
else if ((a1 == 1) && (b1 == 1) && (c1 == 1)) {
    document.getElementById("p1Wins").style.display = "flex";
    document.getElementById("a2").onclick = false;
    document.getElementById("b2").onclick = false;
    document.getElementById("c2").onclick = false;
    document.getElementById("a3").onclick = false;
    document.getElementById("b3").onclick = false;
    document.getElementById("c3").onclick = false;
}
else if ((a2 == 1) && (b2 == 1) && (c2 == 1)) {
    document.getElementById("p1Wins").style.display = "flex";
    document.getElementById("a1").onclick = false;
    document.getElementById("b1").onclick = false;
    document.getElementById("c1").onclick = false;
    document.getElementById("a3").onclick = false;
    document.getElementById("b3").onclick = false;
    document.getElementById("c3").onclick = false;
}
else if ((a3 == 1) && (b3 == 1) && (c3 == 1)) {
    document.getElementById("p1Wins").style.display = "flex";
    document.getElementById("a2").onclick = false;
    document.getElementById("b2").onclick = false;
    document.getElementById("c2").onclick = false;
    document.getElementById("a1").onclick = false;
    document.getElementById("b1").onclick = false;
    document.getElementById("c1").onclick = false;
}
else if ((a1 == 1) && (b2 == 1) && (c3 == 1)) {
    document.getElementById("p1Wins").style.display = "flex";
    document.getElementById("a2").onclick = false;
    document.getElementById("a3").onclick = false;
    document.getElementById("b1").onclick = false;
    document.getElementById("b3").onclick = false;
    document.getElementById("c1").onclick = false;
    document.getElementById("c2").onclick = false;
}
else if ((a3 == 1) && (b2 == 1) && (c1 == 1)) {
    document.getElementById("p1Wins").style.display = "flex";
    document.getElementById("a1").onclick = false;
    document.getElementById("a2").onclick = false;
    document.getElementById("b1").onclick = false;
    document.getElementById("b3").onclick = false;
    document.getElementById("c2").onclick = false;
    document.getElementById("c3").onclick = false;
}
     if ((a1 == 0) && (a2 == 0) && (a3 == 0)) {
    document.getElementById("p2Wins").style.display = "flex";
    document.getElementById("b1").onclick = false;
    document.getElementById("b2").onclick = false;
    document.getElementById("b3").onclick = false;
    document.getElementById("c1").onclick = false;
    document.getElementById("c2").onclick = false;
    document.getElementById("c3").onclick = false;
}
else if ((b1 == 0) && (b2 == 0) && (b3 == 0)) {
    document.getElementById("p2Wins").style.display = "flex";
    document.getElementById("a1").onclick = false;
    document.getElementById("a2").onclick = false;
    document.getElementById("a3").onclick = false;
    document.getElementById("c1").onclick = false;
    document.getElementById("c2").onclick = false;
    document.getElementById("c3").onclick = false;
}
else if ((c1 == 0) && (c2 == 0) && (c3 == 0)) {
    document.getElementById("p2Wins").style.display = "flex";
    document.getElementById("a1").onclick = false;
    document.getElementById("a2").onclick = false;
    document.getElementById("a3").onclick = false;
    document.getElementById("b1").onclick = false;
    document.getElementById("b2").onclick = false;
    document.getElementById("b3").onclick = false;
}
else if ((a1 == 0) && (b1 == 0) && (c1 == 0)) {
    document.getElementById("p2Wins").style.display = "flex";
    document.getElementById("a2").onclick = false;
    document.getElementById("b2").onclick = false;
    document.getElementById("c2").onclick = false;
    document.getElementById("a3").onclick = false;
    document.getElementById("b3").onclick = false;
    document.getElementById("c3").onclick = false;
}
else if ((a2 == 0) && (b2 == 0) && (c2 == 0)) {
    document.getElementById("p2Wins").style.display = "flex";
    document.getElementById("a1").onclick = false;
    document.getElementById("b1").onclick = false;
    document.getElementById("c1").onclick = false;
    document.getElementById("a3").onclick = false;
    document.getElementById("b3").onclick = false;
    document.getElementById("c3").onclick = false;
}
else if ((a3 == 0) && (b3 == 0) && (c3 == 0)) {
    document.getElementById("p2Wins").style.display = "flex";
    document.getElementById("a2").onclick = false;
    document.getElementById("b2").onclick = false;
    document.getElementById("c2").onclick = false;
    document.getElementById("a1").onclick = false;
    document.getElementById("b1").onclick = false;
    document.getElementById("c1").onclick = false;
}
else if ((a1 == 0) && (b2 == 0) && (c3 == 0)) {
    document.getElementById("p2Wins").style.display = "flex";
    document.getElementById("a2").onclick = false;
    document.getElementById("a3").onclick = false;
    document.getElementById("b1").onclick = false;
    document.getElementById("b3").onclick = false;
    document.getElementById("c1").onclick = false;
    document.getElementById("c2").onclick = false;
}
else if ((a3 == 0) && (b2 == 0) && (c1 == 0)) {
    document.getElementById("p2Wins").style.display = "flex";
    document.getElementById("a1").onclick = false;
    document.getElementById("a2").onclick = false;
    document.getElementById("b1").onclick = false;
    document.getElementById("b3").onclick = false;
    document.getElementById("c2").onclick = false;
    document.getElementById("c3").onclick = false;
}
else if ((a1 == 1 || a1 == 0) && (a2 == 1 
|| a2 == 0) && (a3 == 1 || a3 == 0) && 
(b1 == 1 || b1 == 0) && (b2 == 1 || 
b2 == 0) && (b3 == 1 || b3 == 0) && 
(c1 == 1 || c1 == 0) && (c2 == 1 || 
c2 == 0) && (c3 == 1 || c3 == 0)) {
    document.getElementById("tie").style.display = "flex";
}
else {
    if (flag == 1) {
        document.getElementById('p1Turn').innerText = "Your turn";
        document.getElementById('p2Turn').innerText = "";
    }
    else{
        document.getElementById('p2Turn').innerText = "Your turn";
        document.getElementById('p1Turn').innerText = "";
    }
}
}


function resetbtn() {
    location.reload();
    document.getElementById('a1').value = '';
    document.getElementById("a2").value = '';
    document.getElementById("a3").value = '';
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("c1").value = '';
    document.getElementById("c2").value = '';
    document.getElementById("c3").value = '';
  
}