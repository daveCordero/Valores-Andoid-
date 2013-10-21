// JavaScript Document

var valoresTxt = location.search.substr(1);//alert(cuento);

switch(valoresTxt) {
	
	case '01'://principe feliz
		$('#boxValores').append('Generosidad • Justicia • Integridad');
	break;
	
	case '02'://la bella y la bestia
		$('#boxValores').append('Amabilidad • Humildad • Libertad');
	break;
	
	case '03'://pulgarcito
		$('#boxValores').append('Afecto • Pertenecia • Unión');
	break;
	
	case '04'://el abuelo y el nieto
		$('#boxValores').append('Respeto • Tolerancia • Comprensión');
	break;
	
	case '05'://el gigante egoista
		$('#boxValores').append('Recreación • Aprecio por la naturaleza • Compartir');
	break;
	
	case '06'://la flor mas bonita
		$('#boxValores').append('Disciplina • Sinceridad • Honestidad');
	break;
	
	//cuentos de los niños
	
	case '07'://La union
		$('#boxValores').append('• Unión •');
	break;
	
	case '08'://La aventura de la perrita Luna
		$('#boxValores').append('• Generosidad •');
	break;
	
	case '09'://La princesa triste
		$('#boxValores').append('• Tolerancia •');
	break;
	
	case '10'://El colibrí y la libertad
		$('#boxValores').append('• Libertad •');
	break;
	
	case '11'://Pueblo Paz y pueblo Sucio
		$('#boxValores').append('• Respeto •');
	break;
	
	case '12'://Los títeres y el carpintero
		$('#boxValores').append('• Humildad •');
	break;
	
	case '13'://La flor
		$('#boxValores').append('• Honestidad •');
	break;
	
	case '14'://La disciplina nos hace felices
		$('#boxValores').append('• Disciplina •');
	break;
	
	case '15'://Un paseo al campo
		$('#boxValores').append('• Aprecio por la naturaleza •');
	break;
	
	case '16'://No dejaré mi sueño
		$('#boxValores').append('• Afecto •');
	break;
	
}//fin switch