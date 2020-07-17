function relogio(){
    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min="0"+min;
    }
    if(seg<10){
        seg="0"+seg;
    }
    var hrs = hr+":"+min+":"+seg;
    document.getElementById("relo").innerHTML = hrs; 
}
var temp = setInterval(relogio, 1000);