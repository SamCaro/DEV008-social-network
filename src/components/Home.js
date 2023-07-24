import { savePost, getPosts, deletePost, getPost, updatePost } from '../lib/functionFirebase';

export const Home = (onNavigate) => {
  const main = document.createElement('main');

  const sectionHeaderHome = document.createElement('header');
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
  <aside class='post'>
     <textarea class='textarea' id='textArea'rows='4' placeholder='¿A dónde quieres ir hoy?'></textarea>  
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
  </aside>
  `;
  articleHome.appendChild(sectionTwo);

  // ----------------  Lo que guarda el valor del textArea  -----------------------------
  const publicacion = () => {
    const textArea = sectionTwo.querySelector('#textArea').value;
    const author = JSON.parse(localStorage.getItem('user'));  //transforma string a objeto
    const dateNow = new Date(Date.now());
    console.log(dateNow)
    console.log(author)

    savePost(author.name, textArea, author.photo, dateNow)

      .then(() => {
      //console.log("adentro del then")
      window.location.reload()
      });
    //console.log("afuera del then")
  };

  const buttonPost = sectionTwo.querySelector('#buttonPost');
  buttonPost.addEventListener('click', publicacion);

  const postFeed = document.createElement('div');

  //querySnapchot datos que existen 
  const querySnapshot = getPosts()
    .then(querySnapshot => {
  
      /* if(querySnapshot.size > 0){
        postFeed.setAttribute('class', 'postFeed');
       }*/

      let html = '';

      querySnapshot.forEach((doc) => { //cada elemento dentro del querySnapshot se llama "doc"
        //console.log(doc.data());
        //console.log(doc.id)
        const publicacion = doc.data() //Lo que está adentro del QuerySnapshot
        console.log(publicacion)
        html += `
          <div class='postFeed post'>
          <div class='userHeader'>
          <img class='userPhoto' src='${publicacion.photo}'>
          <h3 class='name'>${publicacion.user}</h3>
          <div class='dateBox'>
          <h4 class='date'>${publicacion.date.toDate().toLocaleDateString('en-US')}</h4> 
          </div>
          </div>
            <textarea disabled class='textarea' id="${doc.id}" rows='4' >${publicacion.post}</textarea>
          <div class='divIconsFeed'>
           <img class='iconoForm icon-like'  src='img/like.png'>
           <img class='iconoForm' src='img/comment.png'>
           <img class='iconoForm icon-delete' data-id="${doc.id}" src='img/borrar.png'>
           <img class='iconoForm icon-edit' data-id="${doc.id}" src='img/editar.png'>
          </div>
          </div>
        `
      });

      postFeed.innerHTML = html;
      sectionTwo.appendChild(postFeed);

//Función para eliminar publicaciones
      const iconsDelete = postFeed.querySelectorAll('.icon-delete');
      iconsDelete.forEach((icon) => {
        icon.addEventListener('click', ({ target: { dataset } }) => { //Dataset trae todos los atributos que empiecen con data. 
          //console.log(e.target.dataset.id)
          //console.log(dataset.id)
          deletePost(dataset.id)
          .then(() => {
            window.location.reload()
          });
        });
      });

// Función para editar publicaciones
const iconEdit = postFeed.querySelectorAll('.icon-edit');
iconEdit.forEach((icon) => {
  let editando = false;

  icon.addEventListener('click', async (e) => {
 //console.log(e.target.dataset.id);
 const personalIdPost = e.target.dataset.id;
 //const dataPost = await getPost(personalIdPost);
 //console.log(dataPost);
 //const postContent = dataPost.data();
 //console.log(postContent);

 const textAreaEdit = document.getElementById(personalIdPost);
 //console.log(textAreaEdit);

//Actualización de post
if (!editando) {
  console.log('El documento se puede editar.');
  icon.src = 'img/update.png';
  textAreaEdit.disabled = false;
} else {
  const newPostValue = textAreaEdit.value;

  try {
    await updatePost(personalIdPost, {
      post: newPostValue,
    })

    console.log('El documento se actualizo corectamente.');
    icon.src = 'img/check.png';
    textAreaEdit.disabled = true;

  } catch (error) {
    console.log('Error al obtener los datos:', error);
  }
}
editando = !editando; // si uno es true el otro es falso.
})
})

  });
  return main;
};
