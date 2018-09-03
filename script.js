function mouseOver() {
    document.getElementById("demo").style.color = "red";
    document.getElementById("name").style.color= "pink";
}

function mouseOut() {
    document.getElementById("demo").style.color = "green";
    document.getElementById("name").style.color = "yellow";
}



function big(x) {
    x.style.height = "200px";
    x.style.width = "200px";
}
function normalImg(x) {
    x.style.height = "120px";
    x.style.width = "120px";
}

function toggleDisplay5() {
    var displaysetting = document.getElementById('firstcontent10').style.display;
    if (displaysetting== 'block') {
        document.getElementById('firstcontent10').style.display = 'none';
        document.getElementById('firstman10').style.color = "#FFFFFF";
    }
    else {
        document.getElementById('firstcontent10').style.display = 'block';
        document.getElementById('firstman10').style.color = "#333333";
    }
}