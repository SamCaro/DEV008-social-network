import { onNavigate } from '../main.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.setAttribute('class', 'contenedor');
  const logoHomeDiv = document.createElement('div');
  logoHomeDiv.setAttribute('class', 'logoHomeDiv');
  const logoImg = document.createElement('img');
  logoImg.src = 'img/logo.png';
  const formularioHomeDiv = document.createElement('div');
  formularioHomeDiv.setAttribute('class', 'formularioHomeDiv');
  const labelCorreo = document.createElement('label');
  labelCorreo.textContent = 'Email';
  const inputCorreo = document.createElement('input');
  const labelContraseña = document.createElement('label');
  labelContraseña.textContent = 'Contraseña';
  const inputContraseña = document.createElement('input');
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia sesión';
  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.textContent = 'Acceder con Google';
  const textoRegistro = document.createElement('label');
  textoRegistro.textContent = '¿No tienes una cuenta?';
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Regístrate';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonLogin.addEventListener('click', () => {
    const valorInputCorreo = inputCorreo.value;
    const valorInputContraseña = inputContraseña.value;

    console.log(valorInputCorreo, valorInputContraseña);
  });

  HomeDiv.appendChild(logoHomeDiv);
  logoHomeDiv.appendChild(logoImg);
  HomeDiv.appendChild(formularioHomeDiv);
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