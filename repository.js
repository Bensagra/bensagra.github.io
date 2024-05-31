var jsonTexto = [{
    "product_name": "Darlin",
       "product_title": "",
    "product_description": "Description",
    "product_material_id": "1",
    "product_photo_url": "img",
    "product_price": 10000,
    "product_subcategory_id": 3,
    "product_gender_id": 2
},
{
    "product_name": "Darlin",
    "product_title": "",
    "product_description": "Description",
    "product_material_id": "1",
    "product_photo_url": "img",
    "product_price": 10000,
    "product_subcategory_id": 3,
    "product_gender_id": 2
},
{
    "product_name": "Darlin",
    "product_title": "",
    "product_description": "Description",
    "product_material_id": "1",
    "product_photo_url": "img",
    "product_price": 10000,
    "product_subcategory_id": 3,
    "product_gender_id": 2
}]


let productos = [];
let producto = {
    product_name : "",
    product_title : "",
    product_description : "",
    product_material_id : 0,
    product_photo_url : "",
    product_price : 0,
    product_subcategory_id : 0,
    product_gender_id : 0,
}

for (let i = 0; i < jsonTexto.length; i++) {
 let newProduct ={
    product_name : jsonTexto[i].product_name,
    product_title : jsonTexto[i].product_title,
    product_description : jsonTexto[i].product_description,
    product_material_id : jsonTexto[i].product_material_id,
    product_photo_url : jsonTexto[i].product_photo_url,
    product_price : jsonTexto[i].product_price,
    product_subcategory_id : jsonTexto[i].product_subcategory_id,
    product_gender_id : jsonTexto[i].product_gender_id
 }

    productos.push(newProduct);

   

    
}

console.log(productos);