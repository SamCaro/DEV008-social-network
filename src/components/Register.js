import { signIn } from "../lib/configFirebase.js";

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement("div");
  HomeDiv.setAttribute("class", "contenedor");
  const logoHomeDiv = document.createElement("div");
  logoHomeDiv.setAttribute("class", "logoHomeDiv");
  const logoImg = document.createElement("img");
  logoImg.src = "img/logo.png";
  const formularioHomeDiv = document.createElement("div");
  formularioHomeDiv.setAttribute("class", "formularioHomeDiv");
  const textoIniciarSesion = document.createElement("h2");
  textoIniciarSesion.textContent = "Únete a nosotras";
  const labelNombre = document.createElement("label");
  labelNombre.textContent = "Nombre";
  const inputNombre = document.createElement("input");
  const labelCorreo = document.createElement("label");
  labelCorreo.textContent = "Email";
  const inputCorreo = document.createElement("input");
  const labelContraseña = document.createElement("label");
  labelContraseña.textContent = "Contraseña";
  const inputContraseña = document.createElement("input");
  const buttonLogin = document.createElement("button");
  buttonLogin.textContent = "Registrarse";
  const textoInicio = document.createElement("p");
  textoInicio.textContent = "¿Ya tienes una cuenta?";
  const buttonInicio = document.createElement("button");
  buttonInicio.textContent = "Inicia Sesión";

  HomeDiv.appendChild(logoHomeDiv);
  logoHomeDiv.appendChild(logoImg);
  HomeDiv.appendChild(formularioHomeDiv);
  formularioHomeDiv.appendChild(textoIniciarSesion);
  formularioHomeDiv.appendChild(labelNombre);
  formularioHomeDiv.appendChild(inputNombre);
  formularioHomeDiv.appendChild(labelCorreo);
  formularioHomeDiv.appendChild(inputCorreo);
  formularioHomeDiv.appendChild(labelContraseña);
  formularioHomeDiv.appendChild(inputContraseña);
  formularioHomeDiv.appendChild(buttonLogin);
  formularioHomeDiv.appendChild(textoInicio);
  formularioHomeDiv.appendChild(buttonInicio);

  buttonInicio.addEventListener("click", () => onNavigate("/"));
  buttonLogin.addEventListener("click", () => {
    const valorInputNombre = inputNombre.value;
    const valorInputCorreo = inputCorreo.value;
    const valorInputContraseña = inputContraseña.value;

    signIn(valorInputCorreo, valorInputContraseña)
      .then((userCredential) => {
        alert("Bienvenido");
        // Signed in
        // const user = userCredential.user;
        // onNavigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });

  return HomeDiv;
};

/*
 export const Register = () => {

  const viewSignUp = `
  <div class='containerForm'></div>`;

  const elementHTML = document.createElement("div");
  elementHTML.innerHTML = viewSignUp;
  return elementHTML;

}
*/
