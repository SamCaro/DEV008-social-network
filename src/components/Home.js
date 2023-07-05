export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Página principal';

  const buttonSalir = document.createElement('button');
  buttonSalir.textContent = 'Cerrar sesión';

  HomeDiv.appendChild(buttonSalir);

  buttonSalir.addEventListener('click', () => onNavigate('/'));

  return HomeDiv;
};
