let menu_horizontal = document.getElementById('menu-horizontal');

let camisas = document.getElementById("camisas");
let sastreria = document.getElementById("sastreria");
let pantalones = document.getElementById("pantalon");
let sobreNosotros = document.getElementById("sobreNosotros");
let contacto = document.getElementById("contacto");
let hombre = document.getElementById("hombre");
let mujer = document.getElementById("mujer");
let navegacion = document.getElementById("navegacion");
let camisasHtml = document.getElementById("ropa");

let ul_document = [
camisas,sastreria,pantalones,hombre,mujer,sobreNosotros,contacto,
]
let camisas_tabla = [
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
    ["Camisa","$20,000","descripcion","/images/remera.png","Gamuza"],
  
];

cargarCamisas();
let tabla = [
    //camisas
    ["Camisas",],
    //sastreria
    ["Sastreria","Ambos", "Sacos", "Pantalon"],
    //pantalones
    ["Pantalones","Chino's", "Denim", "Bermudas", ],
]

for (let i = 0; i < tabla.length; i++) {

    for (let j = 1; j < tabla[i].length; j++) {
        if (tabla[i][j] == tabla[0][j]) {
            asignar(i,j,camisas);
            
        }else if (tabla[i][j] == tabla[1][j]) {
           asignar(i,j ,sastreria);
            }
        else if (tabla[i][j] == tabla[2][j]) {
           asignar(i,j ,pantalones);
            }
        else if (tabla[i][j] == tabla[3][j]) {
           asignar(i,j ,denim);
            }
        
        else if (tabla[i][j] == tabla[4][j]) {
           asignar(i,j ,chinos);
           }
        else if (tabla[i][j] == tabla[5][j]) {
           asignar(i,j ,hombre);
            }
            else if (tabla[i][j] == tabla[6][j]) {
                asignar(i,j ,mujer);
                 }
        }
        

       
}
armarLi("Sobre nosotros","menu-vertical");
armarLi("contacto","menu-vertical");

function cambiarClase(){
    navegacion.classList.remove("navigator");
    navegacion.classList.add("navigator-stick");
}

function asignar(i,j, li){

    let element = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = tabla[i][j];
            element.appendChild(a);
            li.appendChild(element);
}


