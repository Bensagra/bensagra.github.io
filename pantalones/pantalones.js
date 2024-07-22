let pantalonesHtml = document.getElementById("ropa");
let pantalones_tabla = [
 
];

const url = "https://turkey-api-2k7c.vercel.app/api/turkey/get_productos?category_id=2";
getData();
async function getData(){
  const response = await fetch(url,{ });
  const data = await response.json();
  console.log(data);
  for (let i = 0; i < data.length; i++) {
   
 
    let newProduct ={
        "product_name" : data[i].product_name,
        "product_title" : data[i].product_title,
        "product_description" : data[i].product_description,
        "product_material_id" : data[i].product_material_id,
        "product_photo_url" : data[i].product_photo_url,
        "product_price" : data[i].product_price,
        "product_subcategory_id" : data[i].product_subcategory_id,
        "product_gender_id" : data[i].product_gender_id
    }
   
    
        pantalones_tabla.push(newProduct);
        console.log(pantalones_tabla);
        const other = await fetch("https://turkey-api-x7lv.vercel.app/api/turkey/get_material_name?product_material_id="+ pantalones_tabla[i].product_material_id,{
    
        });
        const material = await other.json();
        console.log(material);
        let newMaterial ={
          "material_id" : material[0].material_id,
          "material_type" : material[0].material_type,
         
      }
        pantalones_tabla[i].product_material_id = newMaterial.material_type;

    
    
    
        
    }
  cargarPantalones();
}


  function cargarPantalones(){
  let div = document.createElement('div');
  div.classList.add('fila1');
  for (let i = 0; i < pantalones_tabla.length; i++) {
    crearWidget(div,i);
}
}

function crearWidget(messi,i){
  let div2 = document.createElement('div');
  div2.classList.add('ropa');
  let divImagen = document.createElement('div');
  divImagen.classList.add('ropa-image');
  let img = document.createElement('img');
      img.src = pantalones_tabla[i].product_photo_url;
      img.classList.add('imagen');
      divImagen.appendChild(img);
      let div3 = document.createElement('div');
      div3.classList.add('ropa-texto');
      let p1 = document.createElement('p');
      p1.classList.add('ropa-title');
      p1.innerText = pantalones_tabla[i].product_name;
      let p2 = document.createElement('p');
      p2.innerText = pantalones_tabla[i].product_title;
      let p3 = document.createElement('p');
      p3.classList.add('tela');
      p3.innerText = pantalones_tabla[i].product_material_id;
      div3.appendChild(p1);
      div3.appendChild(p3);
      div3.appendChild(p2);
      div2.appendChild(divImagen);
      div2.appendChild(div3);
      messi.appendChild(div2);
      pantalonesHtml.appendChild(messi);

}
cargarPantalones();