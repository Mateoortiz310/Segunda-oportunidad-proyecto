const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');



const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    numero_de_documento: /^\d{6,10}$/,
    numero_de_celular: /^\d{6,10}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,12}$/
}

const campos = {
    nombre: false,
    apellido: false,
    numero_de_documento: false,
    numero_de_celular: false,
    correo: false,
    password: false
}

const validarformulario = (e) => {
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre')
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido' )
        break;
        case "numero_de_documento":
            validarCampo(expresiones.numero_de_documento, e.target, 'numero_de_documento')
        break;
        case "numero_de_celular":
            validarCampo(expresiones.numero_de_celular, e.target, 'numero_de_celular')
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
        break;
        case "password":
            validarCampo(expresiones.password, e.target,'password')
            validarPassword2()
        break;
        case "password2":
            validarPassword2()
        break;
    }

}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[campo] = false
    }
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo_password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo_password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo_password2 i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo_password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo_password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo_password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo_password2 i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo_password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarformulario)
    input.addEventListener('blur', validarformulario)
})

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()

    const terminos = document.getElementById('terminos')

    if(campos.nombre && campos.apellido &&campos.numero_de_documento && campos.numero_de_celular && campos.correo &&campos.password && terminos.checked){
        formulario.reset()

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(() =>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        }, 5000)
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto')
        })
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
    }
})


let flag = true;
function pass() {
    if(flag){
        document.getElementById("password2").type = "password"
        document.getElementById("password").type = "password";
        document.getElementById("pass-icon").src = "/img/close.svg";
        flag = false;
    }else{
        document.getElementById("password2").type = "text"
        document.getElementById("password").type = "text";
        document.getElementById("pass-icon").src = "/img/open.svg";
        flag = true;
        }
    }