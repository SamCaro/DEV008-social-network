import { onNavigate } from '../main.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Únete a nosotras';

  const labelNombre = document.createElement('label');
  labelNombre.textContent = 'Nombre';
  const inputNombre = document.createElement('input');
  const labelCorreo = document.createElement('label');
  labelCorreo.textContent = 'Email';
  const inputCorreo = document.createElement('input');
  const labelContraseña = document.createElement('label');
  labelContraseña.textContent = 'Contraseña';
  const inputContraseña = document.createElement('input');
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Registrarse';
  const textoInicio = document.createElement('label');
  textoInicio.textContent = '¿Ya tienes una cuenta?';
  const buttonInicio = document.createElement('button');
  buttonInicio.textContent = 'Inicia Sesión';
  

  HomeDiv.appendChild(labelNombre);
  HomeDiv.appendChild(inputNombre);
  HomeDiv.appendChild(labelCorreo);
  HomeDiv.appendChild(inputCorreo);
  HomeDiv.appendChild(labelContraseña);
  HomeDiv.appendChild(inputContraseña);
  HomeDiv.appendChild(textoInicio);
  HomeDiv.appendChild(buttonInicio);
  
  buttonInicio.addEventListener('click', () => onNavigate('/'));

    return HomeDiv;
  };