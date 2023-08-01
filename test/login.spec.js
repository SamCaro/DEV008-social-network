import { Login } from '../src/components/Login.js';

describe('Login', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('Debe mostrar el contenido del login', () => {
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(Login());
    expect(document.getElementById('login')).toBeTruthy();
  });
});
