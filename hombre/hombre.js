let hombreHtml = document.getElementById("ropa");
let hombre_tabla = [];

async function getData(){
  const url = "https://turkey-api-x7lv.vercel.app/api/turkey/gender?product_gender_id=1";
  const response = await fetch(url,{ });
  const data = await response.json();
  console.log(data)
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
   
        camisas_tabla.push(newProduct);
        const other = await fetch("https://turkey-api-x7lv.vercel.app/api/turkey/get_material_name?product_material_id="+ camisas_tabla[i].product_material_id,{
    
        });
        const material = await other.json();
        let newMaterial ={
          "material_id" : material[0].material_id,
          "material_type" : material[0].material_type,
         
      }
        camisas_tabla[i].product_material_id = newMaterial.material_type;

    
    
    
        
    }
  cargarCamisas();
}

function cargarhombre() {
  let div = document.createElement('div');
  div.classList.add('fila1');
  for (let i = 0; i < hombre_tabla.length; i++) {
    crearWidget(div, i);
  }
}

function crearWidget(messi, i) {
  let div2 = document.createElement('div');
  div2.classList.add('ropa');
  
  let divImagen = document.createElement('div');
  divImagen.classList.add('ropa-image');
  
  let img = document.createElement('img');
  img.src = hombre_tabla[i][3]; // URL de la imagen
  img.classList.add('imagen');
  
  divImagen.appendChild(img);
  div2.appendChild(divImagen);
  messi.appendChild(div2);
  hombreHtml.appendChild(messi);
}

cargarhombre();