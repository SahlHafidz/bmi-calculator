function hasil(){
    let bb=document.getElementById("berat_badan").value;
    let tb=document.getElementById("tinggi_badan").value/100;
    let total=bb/(tb*tb)
    display=document.getElementById("display").value=total;
}