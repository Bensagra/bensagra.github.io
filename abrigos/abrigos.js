let camisasHtml = document.getElementById("ropa");



function cargarCamisas() {
  let div = document.createElement('div');
  div.classList.add('fila1');
  for (let i = 1; i < 12; i++) {
    crearWidget(div, i);
  }
}

function crearWidget(messi, i) {
  let div2 = document.createElement('div');
  div2.classList.add('ropa');

  let divImagen = document.createElement('div');
  divImagen.classList.add('ropa-image');

  let img = document.createElement('img');
  img.src = `../images/ropa/Abrigos${i}.png`;
  img.classList.add('imagen');

  divImagen.appendChild(img);
  div2.appendChild(divImagen);
  messi.appendChild(div2);
  camisasHtml.appendChild(messi);
}

cargarCamisas();
let loader = document.getElementById("loader");
if (loader) {
  loader.style.display = "none";
}
