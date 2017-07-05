
var Calculador = {

  init: function(){
    on = document.getElementById('on')
    signo = document.getElementById('sign')
    raiz = document.getElementById('raiz')
    punto = document.getElementById('punto')
    igual = document.getElementById('igual')
    mas = document.getElementById('mas')
    menos = document.getElementById('menos')
    por = document.getElementById('por')
    divide = document.getElementById('dividido')

    cero = document.getElementById('0')
    uno = document.getElementById('1')
    dos = document.getElementById('2')
    tres = document.getElementById('3')
    cuatro = document.getElementById('4')
    cinco = document.getElementById('5')
    seis = document.getElementById('6')
    siete = document.getElementById('7')
    ocho = document.getElementById('8')
    nueve = document.getElementById('9')
    display = document.getElementById('display')
    num1= 0, num2= 0, operador= "0", x= "0"

    this.asignarEventosBotones('tecla')
    this.Numero(cero,0)
    this.Numero(uno,1)
    this.Numero(dos,2)
    this.Numero(tres,3)
    this.Numero(cuatro,4)
    this.Numero(cinco,5)
    this.Numero(seis,6)
    this.Numero(siete,7)
    this.Numero(ocho,8)
    this.Numero(nueve,9)

    this.Operador(mas,1)
    this.Operador(menos,2)
    this.Operador(por,3)
    this.Operador(divide,4)

    this.On()
    this.Signo()
    this.Punto()
    this.Igual()

  },

  asignarEventosBotones: function(selector){
    var botones = document.getElementsByClassName(selector);
    for (var i = 0; i < botones.length; i++) {
      botones[i].onmousedown = this.BotonPresionado;
      botones[i].onmouseup = this.BotonNormal;
    }
  },

  BotonPresionado: function(evento){
    evento.target.style="padding: 2px";
  },

  BotonNormal: function(evento){
    evento.target.style="";
  },

  Numero: function(num,n){
    num.onclick = function(){
      if(x=="0"){
        if (display.innerHTML=="0"){display.innerHTML= n;
        } else {
          if (display.innerHTML.length<8) {display.innerHTML+= n;}
        }
      }
      if(x=="1"){
           display.innerHTML= n;x="0";
      }
    }
  },

  Operador: function(op,i){
    op.onclick = function(){
      num1 = display.innerHTML
      display.innerHTML=""
      operador = i
      x="0"
    }
  },

  On: function(){
    on.onclick = function(){
       display.innerHTML="0"
       x="0"
    }
  },

  Signo: function(){
    signo.onclick = function(){
      if (display.innerHTML=="0" || display.innerHTML==""){display.innerHTML= "0";}
      else {
        if(display.innerHTML.indexOf('-')!=-1){display.innerHTML*="-1";}
        else {display.innerHTML= "-" + display.innerHTML;}
      }
    }
  },

  Punto: function(){
    punto.onclick = function(){
      if(x=="0"){
        if (display.innerHTML=="0" || display.innerHTML==""){display.innerHTML= "0.";}
        else {
            if(display.innerHTML.indexOf('.')!=-1){display.innerHTML+= "";}
            else {display.innerHTML+= ".";}
          }
      }
      if(x=="1"){
        display.innerHTML= "0.";x="0";
      }
    }
  },

  Igual: function(){
    igual.onclick = function(){
      if(operador=="1" && x=="0"){num2 = display.innerHTML;display.innerHTML = Suma(num1,num2)}
      if(operador=="1" && x=="1"){num1 = display.innerHTML;display.innerHTML = Suma(num1,num2)}
      if(operador=="2" && x=="0"){num2 = display.innerHTML;display.innerHTML = Resta(num1,num2)}
      if(operador=="2" && x=="1"){num1 = display.innerHTML;display.innerHTML = Resta(num1,num2)}
      if(operador=="3" && x=="0"){num2 = display.innerHTML;display.innerHTML = Multiplica(num1,num2)}
      if(operador=="3" && x=="1"){num1 = display.innerHTML;display.innerHTML = Multiplica(num1,num2)}
      if(operador=="4" && x=="0"){num2 = display.innerHTML;display.innerHTML = Divide(num1,num2)}
      if(operador=="4" && x=="1"){num1 = display.innerHTML;display.innerHTML = Divide(num1,num2)}
      x="1"
    }
  },

};

Calculador.init();



function Suma(a,b) {
  result = (Number(a)*10 + Number(b)*10)/10
  result = result.toString().substr(0,8)
  return result
}

function Resta(a,b) {
  result = (Number(a)*10 - Number(b)*10)/10
  result = result.toString().substr(0,8)
  return result
}

function Multiplica(a,b) {
  result = Number(a) * Number(b)
  result = result.toString().substr(0,8)
  return result
}

function Divide(a,b) {
  result = Number(a) / Number(b)
  if(result=="Infinity" || result =="-Infinity"){result="Error"}
  result = result.toString().substr(0,8)
  return result
}
