

function ppo(){

	var eleccion1=prompt("escoje piedra papel o tijera");

	var eleccion2 = Math.random();

	if (eleccion2 < 0.34) {
		eleccion2 = "piedra";
	}else {
		if(eleccion2 <= 0.67){
			eleccion2 = "tijeras";
		}else{
			eleccion2 = "papel";
		}
	}

	if (eleccion1===eleccion2){
		alert("empate");
	}
	if(eleccion1==="piedra"){
		if(eleccion2==="papel"){
			alert("la maquina uso "+eleccion2+": perdiste");
		}else{
			alert("la maquina uso "+eleccion2+": ganaste");
		}
	}

	if(eleccion1==="papel"){
		if(eleccion2==="tijeras"){
			alert("la maquina uso "+eleccion2+": perdiste");
		}else{
			alert("la maquina uso "+eleccion2+": ganaste");
		}
	}

	if(eleccion1==="tijeras"){
		if(eleccion2==="piedra"){
			alert("la maquina uso "+eleccion2+": perdiste");
		}else{
			alert("la maquina uso "+eleccion2+": ganaste");
		}
	}

}