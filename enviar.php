<?php 
	
	//<meta name="author" content="David Herrera Cordero | Libros para Todos GN" />
	
	//Tomando variables POST y creando variables PHP
	$Nombre  = $_POST["idHistoria"];
	$Correo  = $_POST["idCorreoHistoria"];
	$Mensaje = $_POST["idTxHistoria"];
	
	//$Correo = rtrim($Correo0,',');
	//return substr($Correo, 0, -strlen(','));
	
	$separador = ",";
	$array = split($separador,$Correo);
	$cant_elem = count($array);
	
	if(trim($Nombre) != "" && trim($Correo) != "" && trim($Mensaje) != "") {
		
		//echo $Nombre . $Correo . $Mensaje;
		$sender  = "Enviado por: Aplicación Valores BAC | Nación";
		
		$subject = "Innovando historias: $Nombre";
		
		$headers   = array();
		$headers[] = "MIME-Version: 1.0";
		$headers[] = "Content-type: text/plain; charset=iso-8859-1";
		$headers[] = "From: Valores <librosparatodoscr@nacion.com>";
		$headers[] = "Bcc: David Herrera <david.herrera@nacion.com>, Libros para Todos GN <librosparatodoscr@nacion.com>";
		$headers[] = "Reply-To: No re-enviar <librosparatodoscr@nacion.com>";
		$headers[] = "Subject: {$subject}";
		$headers[] = "X-Mailer: PHP/".phpversion();
		
		$message = "$Nombre ha escrito y compartido una historia con: $Correo

La historia dice:

$Mensaje


[ Fin de la historia ]";
//[ Recibido desde la aplicación Valores de BAC | Nación ]";
		
		for( $i = 0; $i < $cant_elem; $i++ ) {
			$destinatario = trim($array [$i]);
			if(filter_var($destinatario, FILTER_VALIDATE_EMAIL)){
				$enviado = 'si';
				$sendTo = $destinatario;
				//mail($sendTo, $subject, $message, $sender);
				mail($sendTo, $subject, $message, implode("\r\n", $headers));
			} else {
				$enviado = 'no';
				//echo "Alguna(s) de las direcciones de correo no es válida. Verifique e inténtelo de nuevo.";
			}//fin if filter_var
		}//fin for
		
		/*if ($enviado == 'si') {
			//Destinatario administrador
			//$sendTo0 = "dvdhec@gmail.com";
			$sendTo0 = "librosparatodoscr@nacion.com, david.herrera@nacion.com";
			
			//mail($sendTo0, $subject, $message, $sender);
			mail($sendTo0, $subject, $message, implode("\r\n", $headers));
			//header("Location: historia.html");
			echo "La historia se ha compartido con éxito.";
		} else {
			echo "Alguna(s) de las direcciones de correo no es válida. Verifique e inténtelo de nuevo.";
		}*/
		
		exit;
		
	} else {
		echo 'bye bye robot :)';
		//exit;
	}//fin if trim vacios
?>