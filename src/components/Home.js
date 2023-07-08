export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonSalir = document.createElement('button');
  buttonSalir.setAttribute('class', 'botonSalir');
  buttonSalir.textContent = 'Cerrar sesión';
  HomeDiv.appendChild(buttonSalir);
  buttonSalir.addEventListener('click', () => onNavigate('/'));

  const main = document.createElement('main');
  HomeDiv.appendChild(main);
  const sectionOne = document.createElement('section');
  sectionOne.setAttribute('class', 'sectionOne');
  sectionOne.innerHTML = `
    <img class='logoHome'src='img/logo.png' alt='imagen-logo'>
    <button class='botonSectionOne'>Página principal</button>
    <button class='botonSectionOne'>Salidas recreativas</button>
    <button class='botonSectionOne'>Entrenamientos</button>
    <button class='botonSectionOne'>Mecánica</button>
    <button class='botonSectionOne'>Vida sana</button>
    `;
  main.appendChild(sectionOne);

  const sectionTwo = document.createElement('section');
  sectionTwo.setAttribute('class', 'sectionTwo');
  sectionTwo.innerHTML = `
    <form>
     <textarea placeholder='¿A dónde quieres ir hoy?' rows='7'></textarea>
     <div class=divForm>
       <i class="fa-regular fa-image" style="color: #17554b;"></i>
       <select>
         <option class='selectSectionTwo'>Salidas recreativas</option>
         <option class='selectSectionTwo'>Entrenamientos</option>
         <option class='selectSectionTwo'>Mecánica</option>
         <option class='selectSectionTwo'>Vida sana</option>
       </select>
       <button>Publicar</button>
     </div>
   </form>
  `;
  main.appendChild(sectionTwo);

  return HomeDiv;
};
