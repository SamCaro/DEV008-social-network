import { ingresarGoogle } from '../lib/functionFirebase.js';

export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.setAttribute('class', 'contenedor');
  const logoHomeDiv = document.createElement('div');
  logoHomeDiv.setAttribute('class', 'logoHomeDiv');
  const logoImg = document.createElement('img');
  logoImg.src = 'img/logo.png';
  const formularioHomeDiv = document.createElement('div');
  formularioHomeDiv.setAttribute('class', 'formularioHomeDiv');
  const textoIniciarSesion = document.createElement('h2');
  textoIniciarSesion.textContent = 'Iniciar Sesión';
  const labelCorreo = document.createElement('label');
  labelCorreo.textContent = 'Email';
  const inputCorreo = document.createElement('input');
  const labelContraseña = document.createElement('label');
  labelContraseña.textContent = 'Contraseña';
  const inputContraseña = document.createElement('input');
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Entrar';
  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.textContent = 'Acceder con Google';
  buttonLoginGoogle.setAttribute('class', 'botonGoogle');
  const textoRegistro = document.createElement('p');
  textoRegistro.textContent = '¿No tienes una cuenta?';
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Regístrate';

  buttonRegister.addEventListener('click', () => { onNavigate('/register')});
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonLogin.addEventListener('click', () => {
    const valorInputCorreo = inputCorreo.value;
    const valorInputContraseña = inputContraseña.value;

    //console.log(valorInputCorreo, valorInputContraseña);
  });

  buttonLoginGoogle.addEventListener('click', ingresarGoogle);

  HomeDiv.appendChild(logoHomeDiv);
  logoHomeDiv.appendChild(logoImg);
  HomeDiv.appendChild(formularioHomeDiv);
  formularioHomeDiv.appendChild(textoIniciarSesion);
  formularioHomeDiv.appendChild(labelCorreo);
  formularioHomeDiv.appendChild(inputCorreo);
  formularioHomeDiv.appendChild(labelContraseña);
  formularioHomeDiv.appendChild(inputContraseña);
  formularioHomeDiv.appendChild(buttonLogin);
  formularioHomeDiv.appendChild(buttonLoginGoogle);
  formularioHomeDiv.appendChild(textoRegistro);
  formularioHomeDiv.appendChild(buttonRegister);

  return HomeDiv;
};
