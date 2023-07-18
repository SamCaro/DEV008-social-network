import { savePost, getPosts, deletePost, getPost, updatePost } from '../lib/functionFirebase';

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

  //Lo que guarda el valor del textArea
  const publicacion = () => {
    const textArea = sectionTwo.querySelector('#textArea').value;
    const author = JSON.parse(localStorage.getItem('user'));  //transforma string a objeto
    savePost(textArea, author.displayName)
    .then(() => {
      //console.log("adentro del then")
      window.location.reload()
    })
    //console.log("afuera del then")
  }

  const buttonPost = sectionTwo.querySelector('#buttonPost');
  buttonPost.addEventListener('click', publicacion);

  const postFeed = document.createElement('div');
 


  //querySnapchot datos que existen 
  const querySnapshot = getPosts()
    .then(querySnapshot => {
  
       if(querySnapshot.size > 0){
        postFeed.setAttribute('class', 'postFeed');
        
       }

      let html = '';

      querySnapshot.forEach((doc) => { //cada elemento dentro del querySnapshot se llama "doc"
        //console.log(doc.data());
        //console.log(doc.id)
        const poster = doc.data() //Lo que está adentro del QuerySnapshot
        //console.log(poster)
        html += `
          <div>
            <h3>${poster.user}</h3>
            <textarea disabled id='postView'>${poster.post}</textarea>
          </div>
          <div class='divIconsFeed'>
           <img class='iconoForm' src='img/like.png'>
           <img class='iconoForm' src='img/comment.png'>
           <img class='iconoForm icon-delete' data-id="${doc.id}" src='img/borrar.png'>
           <img class='iconoForm icon-edit' id='edit' data-id="${doc.id}" src='img/editar.png'>
          </div>
        `
      });
      postFeed.innerHTML = html
      sectionTwo.appendChild(postFeed);


      const iconsDelete = postFeed.querySelectorAll('.icon-delete');
      //console.log(iconsDelete)
      iconsDelete.forEach((icon) => {
        icon.addEventListener('click', ({ target: { dataset } }) => {
          //console.log('deleting')
          //console.log(e.target.dataset.id)
          //console.log(dataset.id)
          deletePost(dataset.id)
          .then(() => {
            window.location.reload()
          });
        });
      });

      const iconEdit = postFeed.querySelectorAll('.icon-edit');
      iconEdit.forEach((icon) => {
        icon.addEventListener('click', ({ target: { dataset } }) => {
          const idPost = dataset.id;
          const figcaptionEdit = postFeed.querySelector('#edit');

      //const editPost = () => {
        
        const postView = postFeed.querySelector('#postView');
        postView.disabled = false;
        const newPostValue = postView.value;
        updatePost(idPost, {
          post: newPostValue,
        })
          .then(() => {
            console.log('El documento se actualizó correctamente en Firebase.');
            figcaptionEdit.src = "./img/check.png";
            //figcaptionEdit.removeEventListener('click', editPost);
          })
          .catch(error => {
             console.log("Error al obtener los datos:", error);
          });
     // };

    /*  getPost(idPost)
      .then(doc => {
        postView.value = doc.data().post;
        figcaptionEdit.src = "./img/editar.png";
        figcaptionEdit.addEventListener('click', editPost);
      });*/
  });
});

    /*
    .catch(error => {
      //console.log("Error al obtener los datos:", error);
    }); */
  });
  return main;
};
