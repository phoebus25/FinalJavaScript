
var on = document.getElementById('on')
var signo = document.getElementById('sign')
var raiz = document.getElementById('raiz')
var punto = document.getElementById('punto')
var igual = document.getElementById('igual')
var mas = document.getElementById('mas')
var menos = document.getElementById('menos')
var por = document.getElementById('por')
var divide = document.getElementById('dividido')


var cero = document.getElementById('0')
var uno = document.getElementById('1')
var dos = document.getElementById('2')
var tres = document.getElementById('3')
var cuatro = document.getElementById('4')
var cinco = document.getElementById('5')
var seis = document.getElementById('6')
var siete = document.getElementById('7')
var ocho = document.getElementById('8')
var nueve = document.getElementById('9')

var display = document.getElementById('display')

var num1=0, num2=0;
var operador = "0";
var x="0";

on.onclick = function(){
  display.innerHTML="0";
  x="0"
}

signo.onclick = function() {
  if (display.innerHTML=="0" || display.innerHTML==""){display.innerHTML= "0";}
  else {
      if(display.innerHTML.indexOf('-')!=-1){display.innerHTML*="-1";}
      else {display.innerHTML= "-" + display.innerHTML;}
    }
  }

punto.onclick = function() {
  if (display.innerHTML=="0" || display.innerHTML==""){display.innerHTML= "0.";}
  else {
      if(display.innerHTML.indexOf('.')!=-1){display.innerHTML+= "";}
      else {display.innerHTML+= ".";}
    }
  }

function Numero(num,n) {
  num.onclick = function() {
    if(x=="0"){
      if (display.innerHTML=="0"){display.innerHTML= n;
      } else {
        if (display.innerHTML.length<8) {display.innerHTML+= n;}
      }
    }
    if(x=="1"){
      if (display.innerHTML=="0"){display.innerHTML= n;x="0";
      } else {
         display.innerHTML= n;x="0";
      }
    }
  }
  num.onmousedown = function () { BotonPresionado(num) }
  num.onmouseup = function () { BotonNormal(num) }
}

function Operador(op,i) {
  op.onclick = function(){
    num1 = display.innerHTML
    display.innerHTML=""
    operador = i
    x="0"
  }
  op.onmousedown = function () { BotonPresionado(op) }
  op.onmouseup = function () { BotonNormal(op) }
}

function Boton(btn){
  btn.onmousedown = function () { BotonPresionado(btn) }
  btn.onmouseup = function () { BotonNormal(btn) }
}

Numero(cero,0)
Numero(uno,1)
Numero(dos,2)
Numero(tres,3)
Numero(cuatro,4)
Numero(cinco,5)
Numero(seis,6)
Numero(siete,7)
Numero(ocho,8)
Numero(nueve,9)

Operador(mas,1)
Operador(menos,2)
Operador(por,3)
Operador(divide,4)

Boton(on)
Boton(signo)
Boton(raiz)
Boton(punto)
Boton(igual)

var resultado=0

igual.onclick = function(){
  if(operador=="1" && x=="0"){num2 = display.innerHTML;resultado = (Number(num1)*10 + Number(num2)*10)/10;display.innerHTML = resultado.toString().substr(0,8)}
  if(operador=="1" && x=="1"){num1 = display.innerHTML;resultado = (Number(num1)*10 + Number(num2)*10)/10;display.innerHTML = resultado.toString().substr(0,8)}
  if(operador=="2" && x=="0"){num2 = display.innerHTML;resultado = Number(num1) - Number(num2);display.innerHTML = resultado.toString().substr(0,8)}
  if(operador=="2" && x=="1"){num1 = display.innerHTML;resultado = Number(num1) - Number(num2);display.innerHTML = resultado.toString().substr(0,8)}
  if(operador=="3" && x=="0"){num2 = display.innerHTML;resultado = Number(num1) * Number(num2);display.innerHTML = resultado.toString().substr(0,8)}
  if(operador=="3" && x=="1"){num1 = display.innerHTML;resultado = Number(num1) * Number(num2);display.innerHTML = resultado.toString().substr(0,8)}
  if(operador=="4" && x=="0"){num2 = display.innerHTML;resultado = Number(num1) / Number(num2);display.innerHTML = resultado.toString().substr(0,8)}
  if(operador=="4" && x=="1"){num1 = display.innerHTML;resultado = Number(num1) / Number(num2);display.innerHTML = resultado.toString().substr(0,8)}

  x="1"
}

function BotonPresionado(elemento){
  elemento.style="padding: 2px";
}

function BotonNormal(elemento){
  elemento.style="";
}
