var saldo = 100;
var saldoN =0;
function consultar() {
    if(saldo<10||saldo>990){
        alert("Comuníquese a su banco +1 333 444 5566")
    }
    else {
    alert (`Su saldo es:  ${saldo}`);
}
}

function ingresar() {
    if(saldo<10||saldo>990){
        alert("Comuníquese a su banco +1 333 444 5566")
    }
    else {
    saldoN=parseInt(prompt("Escriba monto a ingresar"));
    saldo = saldo+saldoN;
    alert (`Monto a ingresar es:  ${saldoN}`);
    alert (`Nuevo saldo es:  ${saldo}`);
}
}

function retirar() {
    if(saldo<10||saldo>990){
        alert("Comuníquese a su banco +1 333 444 5566")
    }
    else {
    saldoN=parseInt(prompt("Escriba monto a retirar"));

    saldo = saldo-saldoN;
    alert (`Monto a retirar es:  ${saldoN}`);
    alert (`Nuevo saldo es:  ${saldo}`); 
}   
}