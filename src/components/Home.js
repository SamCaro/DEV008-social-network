import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const labelCorreo = document.createElement('label');
  labelCorreo.textContent = 'Email';
  const inputCorreo = document.createElement('input');
  inputCorreo.setAttribute('placeholder', 'correo');
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

//console.log(valorInputCorreo, valorInputContraseña)

});


  HomeDiv.appendChild(labelCorreo);
  HomeDiv.appendChild(inputCorreo);
  HomeDiv.appendChild(labelContraseña);
  HomeDiv.appendChild(inputContraseña);
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonLoginGoogle);
  HomeDiv.appendChild(textoRegistro);
  HomeDiv.appendChild(buttonRegister);
 
  return HomeDiv;
};