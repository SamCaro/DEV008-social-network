import { signIn } from '../lib/functionFirebase';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.setAttribute('class', 'contenedor');
  const logoHomeDiv = document.createElement('div');
  logoHomeDiv.setAttribute('class', 'logoHomeDiv');
  const logoImg = document.createElement('img');
  logoImg.setAttribute('class', 'logoPrincipal');
  logoImg.src = 'img/logo.png';
  const formularioHomeDiv = document.createElement('div');
  formularioHomeDiv.setAttribute('class', 'formularioHomeDiv');
  const textoIniciarSesion = document.createElement('h2');
  textoIniciarSesion.textContent = 'Únete a nosotras';
  const labelNombre = document.createElement('label');
  labelNombre.textContent = 'Nombre';
  const inputNombre = document.createElement('input');
  const labelCorreo = document.createElement('label');
  labelCorreo.textContent = 'Email';
  const inputCorreo = document.createElement('input');
  const labelContraseña = document.createElement('label');
  labelContraseña.textContent = 'Contraseña';
  const inputContraseña = document.createElement('input');
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrarse';
  buttonRegister.id = 'registro';

  const separator = document.createElement('section');
  const lineaUno = document.createElement('hr');
  lineaUno.setAttribute('class', 'lineRight');
  const letra = document.createElement('p');
  letra.textContent = 'o';
  letra.setAttribute('class', 'letra');
  const lineaDos = document.createElement('hr');
  lineaDos.setAttribute('class', 'lineLeft');

  const textoInicio = document.createElement('p');
  textoInicio.textContent = '¿Ya tienes una cuenta?';
  const buttonInicio = document.createElement('button');
  buttonInicio.textContent = 'Inicia Sesión';

  HomeDiv.appendChild(logoHomeDiv);
  logoHomeDiv.appendChild(logoImg);
  HomeDiv.appendChild(formularioHomeDiv);
  formularioHomeDiv.appendChild(textoIniciarSesion);
  formularioHomeDiv.appendChild(labelNombre);
  formularioHomeDiv.appendChild(inputNombre);
  formularioHomeDiv.appendChild(labelCorreo);
  formularioHomeDiv.appendChild(inputCorreo);
  formularioHomeDiv.appendChild(labelContraseña);
  formularioHomeDiv.appendChild(inputContraseña);
  formularioHomeDiv.appendChild(buttonRegister);

  formularioHomeDiv.appendChild(separator);
  separator.appendChild(lineaUno);
  separator.appendChild(letra);
  separator.appendChild(lineaDos);

  formularioHomeDiv.appendChild(textoInicio);
  formularioHomeDiv.appendChild(buttonInicio);

  //Quitar espacios en blanco
  inputCorreo.addEventListener('keyup', (e) => {
  const valueInputCorreo = e.target.value;
  inputCorreo.value = valueInputCorreo.replace(/\s/g, "");
  });

 //Reemplazar caracteres por hiden
 inputContraseña.addEventListener('keyup', (e) =>{
  const valueInputContraseña = e.target.value;
 inputContraseña.value = valueInputContraseña.replace(/\w/g, "•");
 });



  buttonInicio.addEventListener('click', () => onNavigate('/'));

  buttonRegister.addEventListener('click', () => {
    const valorInputCorreo = inputCorreo.value;
    const valorInputContraseña = inputContraseña.value;
    console.log(Window.localStorage);
    signIn(valorInputCorreo, valorInputContraseña)
      .then((userCredential) => {
        //console.log(userCredential.user);
        // Signed in
        //const user = userCredential.user;
        // onNavigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error en singIn', errorCode, errorMessage);

        // Eliminar mensaje de error anterior, si existe
        const textoErrorCodeAnterior = document.querySelector('.textErrorSingIn');
        if (textoErrorCodeAnterior) {
          formularioHomeDiv.removeChild(textoErrorCodeAnterior);
        }

        // Agregar nuevo mensaje de error
        const textoErrorCode = document.createElement('p');
        textoErrorCode.setAttribute('class', 'textErrorSingIn');

        if (errorCode === 'auth/email-already-in-use') {
          textoErrorCode.textContent = 'Tu email ya esta registrado';
        } else if (errorCode === 'auth/invalid-email') {
          textoErrorCode.textContent = 'Tu email es invalido';
        } else if (errorCode === 'auth/weak-password') {
          textoErrorCode.textContent = 'Tu contraseña es invalida';
        }

        formularioHomeDiv.appendChild(textoErrorCode);
      });
  });

  return HomeDiv;
};
