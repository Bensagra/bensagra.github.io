let li_camisas = document.getElementById('camisas');
let li_sastreria = document.getElementById('sastreria');
let li_pantalones = document.getElementById('pantalones');
let li_denim = document.getElementById('denim');
let li_chinos = document.getElementById('chinos');
let li_hombre = document.getElementById('hombre');
let li_mujer = document.getElementById('mujer');
let tabla = [
    //camisas
    ["Formales", "Casuales", "Franelas"],
    //sastreria
    ["Trajes", "Sacos", "Chalecos"],
    //pantalones
    ["Denim", "Chinos","Formales"],
    //denim
    ["Hombre", "Mujer"],
    //chinos
    ["Hombre", "Mujer"],
]

for (let i = 0; i < tabla.length; i++) {
    for (let j = 0; j < tabla[i].length; j++) {
        if (tabla[i][j] == tabla[0][j]) {
            asignar(i,j,li_camisas);
            
        }else if (tabla[i][j] == tabla[1][j]) {
           asignar(i,j ,li_sastreria);
            }
        else if (tabla[i][j] == tabla[2][j]) {
           asignar(i,j ,li_pantalones);
            }
        else if (tabla[i][j] == tabla[3][j]) {
           asignar(i,j ,li_denim);
            }
        
        else if (tabla[i][j] == tabla[4][j]) {
           asignar(i,j ,li_chinos);
           }
        else if (tabla[i][j] == tabla[5][j]) {
           asignar(i,j ,li_hombre);
            }
            else if (tabla[i][j] == tabla[6][j]) {
                asignar(i,j ,li_mujer);
                 }
        }

    
}


function asignar(i,j, li){

    let element = document.createElement('li');
            let p = document.createElement('p');
            p.innerText = tabla[i][j];
            element.appendChild(p);
            li.appendChild(element);
}

