/*
funciones
function nombre (parametros){
	acciones
	return algo
}

puede
->no tener nombre asignado
->hacer referencias a si mismas (recusrsivas)
->ser definidas en una funcion

*definir una funcion no la ejecura
*su alcance solo aplica a la varible donde se usa (a menos que se defina global)

usa eventos (cunado el usuarion puede interactuar con la pagina)
->click: al dar click en algo
->onsubmit: al clickera enviar
->onmouseover: cuando el 
->onmouseout
*/

function holaMundo(){
	alert("hola mundo");
}

function over(){
	document.write("el mouse esta encima del elemento");
}

function out(){
	document.write("el mouse esta fuera del elemento");	
}