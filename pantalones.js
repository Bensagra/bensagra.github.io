let pantalonesHtml = document.getElementById("pantalonesHtml");

let pantalones_tabla = [
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
  
];
function cargarPantalones(){
    //<div class="fila1">
      //  <div class="ropa">
        //    <img src="/images/remera.jfif" alt="" class="ropa-image">
          //  <div class="ropa-texto">
            //    <p class="ropa-title">Remera oversize</p>
              //  <p>20.000 pesos</p>
           // </div>
           let div = document.createElement('div');
           div.classList.add('fila1');
           for (let i = 0; i < pantalones_tabla.length; i++) {
            console.log(div.children);
          crearWidget(div,i);
}

}
function crearWidget(messi,i){
  let div2 = document.createElement('div');
  div2.classList.add('ropa');
  let divImagen = document.createElement('div');
  divImagen.classList.add('ropa-image');
  let img = document.createElement('img');
      img.src = pantalones_tabla[i][3];
      img.classList.add('imagen');
      divImagen.appendChild(img);
      let div3 = document.createElement('div');
      div3.classList.add('ropa-texto');
      let p1 = document.createElement('p');
      p1.classList.add('ropa-title');
      p1.innerText = pantalones_tabla[i][0];
      let p2 = document.createElement('p');
      p2.innerText = pantalones_tabla[i][1];
      let p3 = document.createElement('p');
      p3.classList.add('tela');
      p3.innerText = pantalones_tabla[i][4];
      div3.appendChild(p1);
      div3.appendChild(p3);
      div3.appendChild(p2);
      div2.appendChild(divImagen);
      div2.appendChild(div3);
      messi.appendChild(div2);
      pantalonesHtml.appendChild(messi);

}

cargarPantalones();