/*query selector
nombre, valor o tarjet
*/
document.querySelector("p").innerHTML = "Busqueda por etiqueta"; /*busca a la primera etiqueta y hace cambio nada mas a esa*/
document.querySelector("p.bclase").innerHTML = "Busqueda por clase";
document.querySelector("#bid").innerHTML = "Busqueda por id";

var nombre = document.getElementsByName('bot')[0].value
alert(nombre);
var y = 5;
var x = y+2;
document.write('<br>operacion suma '+x);
var z = 5;
var a = --z;
document.write('<br>decremento '+a);
var b = 5;
var c = b%5;
document.write('<br>modulo '+c);
var d = 5;
var e = 10;
d = e;
document.write("<br>asignar "+e);
var texto = "hola",texto1 = "mundo";
var valor = 5,valor1 = 6,valor2=7,valor3=8;
var val1=true,val2=false;
//numero + numero ->suma
valor+=2;

//este es 2 devido a que true=1
val1+=1;
document.write(val1); 
//numero + string -> concatenacion
valor2+=texto;
//cadena + valor = cadena
texto+=false;
//inifinito
valor3/=0;
document.write('prueba 1: '+'prueba 2: '+val1+' prueba 3 '+valor2+'prueva 3: '+texto+'prueba 4: '+valor3);
var text = "";
var i;

for(i=0;i<5;i++){
	if(i==4){
		document.write("el numero magico es" + i + "<br>");
	}else{
		document.write("no hay magia<br>")
	}
}

/*
---------------------------------------------------------------
js: es un lenguaje de programacion en la web
se caracteriza por ser:
	de tipado dinamico(las var cambian de tipo)
	de tipado debil
	OO(se pueden usar los pilares)
	Estructurado
	Interpretado
	POE (programacion orientada a eventos)
----------------------------------------------------------------
usa el 

D	O	M
o	b	o
c	j	d
u	e	e
m	c	l
e	t	
n
t
-----------------------------------------------------------------
*/


/*
-----------------------------------------------------------------
si 
a=1;
b="1";
a=b; asigna
a==b; true (porque son semejantes)
a===b; false (porque debe ser exactamente igual)
-----------------------------------------------------------------
*/