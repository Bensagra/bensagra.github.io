let pantalonesHtml = document.getElementById("ropa");
let pantalones_tabla = [

];

const url = "https://turkey-api-2k7c.vercel.app/api/turkey/gender?product_gender_id=2";
getData();
async function getData() {
  document.getElementById('loader').style.display = 'block';

  const response = await fetch(url, {});
  if (response.status !== 200) {
    console.error(`Error: ${response.status}`);
    return;

  }
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {


    let newProduct = {
      "product_name": data[i].product_name,
      "product_title": data[i].product_title,
      "product_description": data[i].product_description,
      "product_material_id": data[i].product_material_id,
      "product_photo_url": data[i].product_photo_url,
      "product_price": data[i].product_price,
      "product_subcategory_id": data[i].product_subcategory_id,
      "product_gender_id": data[i].product_gender_id
    }


    pantalones_tabla.push(newProduct);

    let newMaterial = {
      "material_id": "",
      "material_type": "",

    }
    pantalones_tabla[i].product_material_id = newMaterial.material_type;





  }
  cargarPantalones();
  document.getElementById('loader').style.display = 'none';

}


function cargarPantalones() {
  let div = document.createElement('div');
  div.classList.add('fila1');
  for (let i = 0; i < pantalones_tabla.length; i++) {
    crearWidget(div, i);
  }
}

function crearWidget(messi, i) {
  let div2 = document.createElement('div');
  div2.classList.add('ropa');

  let divImagen = document.createElement('div');
  divImagen.classList.add('ropa-image');

  let img = document.createElement('img');
  img.src = pantalones_tabla[i].product_photo_url;
  img.classList.add('imagen');

  divImagen.appendChild(img);
  div2.appendChild(divImagen);
  messi.appendChild(div2);
  pantalonesHtml.appendChild(messi);
}

cargarPantalones();