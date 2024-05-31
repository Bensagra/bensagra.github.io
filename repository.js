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
    product_name,
    product_title,
    product_description,
    product_material_id,
    product_photo_url,
    product_price,
    product_subcategory_id,
    product_gender_id,
}

for (let index = 0; index < jsonTexto.length; index++) {
    producto.product_name = jsonTexto["product_name"]    
}