export const Home = (onNavigate) => {
  const main = document.createElement("main");

  document.addEventListener("DOMContentLoaded", () => {
    //cargar el DOM --> document.addEventListener('load', () => {

    const sectionHeaderHome = document.createElement("section");
    sectionHeaderHome.setAttribute("class", "sectionHeaderHome");
    sectionHeaderHome.innerHTML = `
    <img class='logoHome'src='img/logo.png' alt='imagen-logo'>
    <button id='buttonExit' class='buttonExit'>Cerrar sesión</button>
  `;
    main.appendChild(sectionHeaderHome);

    //const buttonSalir = document.createElement('button');
    //buttonSalir.setAttribute('class', 'botonSalir');
    //buttonSalir.textContent = 'Cerrar sesión';
    // HomeDiv.appendChild(buttonSalir);

    const buttonExit = document.getElementById("buttonExit");

    buttonExit.addEventListener("click", () => onNavigate("/"));

    const articleHome = document.createElement("article");
    articleHome.setAttribute("class", "articleHome");
    main.appendChild(articleHome);

    const sectionOne = document.createElement("section");
    sectionOne.setAttribute("class", "sectionOne");
    sectionOne.innerHTML = `
    <button class='botonSectionOnePaginaPrincipal'>Página principal</button>
    <button class='botonSectionOneSalidasRecreativas'>Salidas recreativas</button>
    <button class='botonSectionOneEntrenamientos'>Entrenamientos</button>
    <button class='botonSectionOneMecanica'>Mecánica</button>
    <button class='botonSectionOneVidaSana'>Vida sana</button>
    `;
    articleHome.appendChild(sectionOne);

    const sectionTwo = document.createElement("section");
    sectionTwo.setAttribute("class", "sectionTwo");

    sectionTwo.innerHTML = `
  <div class='post'>
     <textarea id='textArea' placeholder='¿A dónde quieres ir hoy?'></textarea>  
     <div class='divForm'>
      <picture class='insert'>
       <img class='iconoForm' src='img/insert.png'/>
       <figcaption>Insertar</figcaption>
      </picture>
      <picture class='routes'>
       <img class='iconoForm' src='img/routesFeed.png'/>
       <figcaption>Rutas</figcaption>
      </picture>
      <picture class='training'>
       <img class='iconoForm' src='img/trainingFeed.png'>
       <figcaption>Entrenamientos</figcaption>
      </picture>
      <picture class='mechanics'>
       <img class='iconoForm' src='img/mechanicsFeed.png'>
       <figcaption>Mecanica</figcaption>
      </picture>
      <picture class='healthyLife'>
       <img class='iconoForm' src='img/healthylifeFeed.png'>
       <figcaption>Vida Sana</figcaption>
       </picture>
       <button id='buttonPost' class='buttonPost'>Publicar</button>
     </div>
  </div>
  `;

    articleHome.appendChild(sectionTwo);

    const postFeed = document.createElement("div");
    postFeed.setAttribute("class", "postFeed");
    postFeed.innerHTML = `
      <p id='textAreaView'>Busco amistades</p>
      <div class='divIconsFeed'>
      <img class='iconoForm' src='img/like.png'>
      <img class='iconoForm' src='img/comment.png'>
      </div>
    `;
    sectionTwo.appendChild(postFeed);

    const buttonPost = document.getElementById("buttonPost");

    buttonPost.addEventListener("click", (event) => {
      //event.preventDefault(); // Evita la recarga de la página

      const textArea = document.getElementById("textArea");
      const valorTextArea = textArea.value;
      console.log(valorTextArea);
      document.getElementById("textAreaView").textContent = valorTextArea;
    });
  });

  return main;
};
