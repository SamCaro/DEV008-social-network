import { savePost, getPosts, deletePost, getPost } from '../lib/functionFirebase';

export const Home = (onNavigate) => {
  const main = document.createElement('main');

  const sectionHeaderHome = document.createElement('section');
  sectionHeaderHome.setAttribute('class', 'sectionHeaderHome');
  sectionHeaderHome.innerHTML = `
    <img class='logoHome'src='img/logo.png' alt='imagen-logo'>
    <button id='buttonExit' class='buttonExit'>Cerrar sesión</button>
  `;
  main.appendChild(sectionHeaderHome);

  const buttonExit = sectionHeaderHome.querySelector('#buttonExit');
  buttonExit.addEventListener('click', () => onNavigate('/'));


  const articleHome = document.createElement('article');
  articleHome.setAttribute('class', 'articleHome');
  main.appendChild(articleHome);

  const sectionOne = document.createElement('section');
  sectionOne.setAttribute('class', 'sectionOne');
  sectionOne.innerHTML = `
    <button class='botonSectionOnePaginaPrincipal'>Página principal</button>
    <button class='botonSectionOneSalidasRecreativas'>Salidas recreativas</button>
    <button class='botonSectionOneEntrenamientos'>Entrenamientos</button>
    <button class='botonSectionOneMecanica'>Mecánica</button>
    <button class='botonSectionOneVidaSana'>Vida sana</button>
    `;
  articleHome.appendChild(sectionOne);

  const sectionTwo = document.createElement('section');
  sectionTwo.setAttribute('class', 'sectionTwo');

  sectionTwo.innerHTML = `
  <div class='post'>
     <textarea id='textArea'rows='4' placeholder='¿A dónde quieres ir hoy?'></textarea>  
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

  const publicacion = () => {
    const textArea = sectionTwo.querySelector('#textArea').value;
    savePost(textArea).then(() => {
      window.location.reload()
    })
  }

  const buttonPost = sectionTwo.querySelector('#buttonPost');
  buttonPost.addEventListener('click', publicacion);

  const postFeed = document.createElement('div');
  postFeed.setAttribute('class', 'postFeed');


  //querySnapchot datos que existen 
  const querySnapshot = getPosts()
    .then(querySnapshot => {

      let html = ''

      querySnapshot.forEach(doc => {
        //console.log(doc.data());
        //console.log(doc.id)
        const poster = doc.data()
        html += `
          <div>
            <h3>${poster.user}</h3>
            <p id='postView'>${poster.post}</p>
          </div>
          <div class='divIconsFeed'>
           <img class='iconoForm' src='img/like.png'>
           <img class='iconoForm' src='img/comment.png'>
           <img class='iconoForm icon-delete' data-id="${doc.id}" src='img/borrar.png'>
           <img class='iconoForm icon-edit' data-id="${doc.id}" src='img/editar.png'>
          </div>
        `
      });
      postFeed.innerHTML = html
      sectionTwo.appendChild(postFeed);


      const iconsDelete = postFeed.querySelectorAll('.icon-delete');
      //console.log(iconsDelete)
      iconsDelete.forEach(icon => {
        icon.addEventListener('click', ({ target: { dataset } }) => {
          //console.log('deleting')
          //console.log(e.target.dataset.id)
          //console.log(dataset.id)
          deletePost(dataset.id);
        });
      });

      const iconEdit = postFeed.querySelectorAll('.icon-edit');
      iconEdit.forEach((icon) => {
        //console.log(icon);
        icon.addEventListener('click', (e) => {
          //console.log(e.target.dataset.id)
          const doc = getPost(e.target.dataset.id)
          // .then(e => {
            //console.log(doc.data())
          // });              
        });
      });

    })
    .catch(error => {
      //console.log("Error al obtener los datos:", error);
    });


   

  return main;
};
