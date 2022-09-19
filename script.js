const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
	const textoEncriptado = encriptar(inputTexto.value)
	mensaje.value = textoEncriptado;
	mensaje.style.backgroundImage = "none"
	inputTexto.value = ""
}

function encriptar(stringEncriptada){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll
			(matrizCodigo[i][0],matrizCodigo[i][1])
		}
	}

	return stringEncriptada;
}

function btnDesencriptar(){
	const textoEncriptado = desencriptar(inputTexto.value)
	mensaje.value = textoEncriptado;
	inputTexto.value = ""
}

function desencriptar(stringDesencriptada){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll
			(matrizCodigo[i][1],matrizCodigo[i][0])
		}
	}

	return stringDesencriptada;
}

function copiar(){
	mensaje.select()
	navigator.clipboard.writeText(mensaje.value)
	mensaje.value = ""
	alert("texto copiado")
}

function character(event)
{
    let key = (document.all) ? event.keyCode : event.which;
    if (key == 8 || key == 13 || key == 9 || key == 32) {
        return true;
    }
    let letter = /[a-z0-9]/;
    let keyPress = String.fromCharCode(key);
    return letter.test(keyPress);

 }