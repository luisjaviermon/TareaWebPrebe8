function resp(){
	var preg = document.getElementById('pregunta').value;
	var resp = Math.random();
	if(resp<0.34){
		resp = "no";
	}else {
		if(resp <= 0.67){
			resp = "si";
		}else{
			resp = "tal vez";
		}
	}
	alert("la respuesta a "+"'"+preg+"'"+" es: "+resp);
}