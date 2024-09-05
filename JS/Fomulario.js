const formulario = document.getElementById('formulario');
const input = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    numero_de_documento: /^\d{6,10}$/,
    numero_de_celular: /^\d{6,10}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,12}$/
}



const validarformulario = (e) =>{
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
        case "numero de documento":
            validarCampo(expresiones.numero_de_documento, e.target, 'numero_de_documento');
        break;
        case "numero de celular":
            validarCampo(expresiones.numero_de_celular, e.target, 'numero_de_celular')
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break;
        case "password2":
            validarPassword2();
        break;
        
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')

    } else{
        document.getElementById(`grupo_${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
    }
}


const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

input.forEach((input) => {
    input.addEventListener('keyup', validarformulario );
    input.addEventListener('keyup', validarformulario );
});

formulario.addEventListener('submit', (e) =>{
e.preventDefault
});