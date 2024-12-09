let mujerHtml = document.getElementById("ropa");
let mujer_tabla = [
  ["mujer","$10","descripcion","/images/remera.png","Jean"],
  ["Maia pelotuda","$5","descripcion","/images/remera.png","Jean"],
  ["mujer","$5","descripcion","/images/remera.png","Jean"],
  ["mujer","$5","descripcion","/images/remera.png","Jean"],
  ["mujer","$5","descripcion","/images/remera.png","Jean"],
  ["mujer","$5","descripcion","/images/remera.png","Jean"],
];

function cargarmujer() {
  let div = document.createElement('div');
  div.classList.add('fila1');
  for (let i = 0; i < mujer_tabla.length; i++) {
    crearWidget(div, i);
  }
}

function crearWidget(messi, i) {
  let div2 = document.createElement('div');
  div2.classList.add('ropa');
  
  let divImagen = document.createElement('div');
  divImagen.classList.add('ropa-image');
  
  let img = document.createElement('img');
  img.src = mujer_tabla[i][3]; // URL de la imagen
  img.classList.add('imagen');
  
  divImagen.appendChild(img);
  div2.appendChild(divImagen);
  messi.appendChild(div2);
  mujerHtml.appendChild(messi);
}

cargarmujer();