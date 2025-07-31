let camisasHtml = document.getElementById("ropa");
let camisas_tabla = [

];

function cargarCamisas() {
  let elemento = [
    {
      name: "camisas",
      quantity: 21
    },
    {
      name: "pantalones",
      quantity: 17
    },
    {
      name: "accesorios",
      quantity: 26
    },
     {
      name: "abrigos",
      quantity: 12,
    },
    
    {
      name: "denim",
      quantity: 15
    },
    {
      name: "medida",
      quantity: 18
    },
    {
      name: "sastreria",
      quantity: 21
    }

  ]
  let div = document.createElement('div');
  div.classList.add('fila1');
  for (let l = 0; l < elemento.length; l++) {
    for (let i = 1; i < elemento[l].quantity; i++) {
    crearWidget(div, elemento[l].name, i);
  }}
}

function crearWidget(messi,elemento, i) {
  let div2 = document.createElement('div');
  div2.classList.add('ropa');

  let divImagen = document.createElement('div');
  divImagen.classList.add('ropa-image');

  let img = document.createElement('img');
  img.src = `../images/ropa/${elemento}${i}.png`;
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
