import { Register } from '../src/components/Register.js';

describe('Register', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('Debe mostrar el contenido del registro', () => {
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(Register());
    expect(document.getElementById('registro')).toBeTruthy();
  });
});
