let menu_horizontal = document.getElementById('menu-horizontal');
let tabla = [
    //camisas
    ["Camisas","Formales", "Casuales", "Franelas"],
    //sastreria
    ["Sastreria","Trajes", "Sacos", "Chalecos"],
    //pantalones
    ["Pantalones","Denim", "Chinos","Formales"],
    //denim
    ["Denim","Hombre", "Mujer"],
    //chinos
    ["Chinos","Hombre", "Mujer"],
]

for (let i = 0; i < tabla.length; i++) {
    <li><a href="#">CAMISAS</a><ul class="menu-vertical" id="camisas"></ul></li>
    let li = document.createElement('li');
    let text = document.createElement('a');
    text.innerText = tabla[i][0];
    li.appendChild(text);
    let ul = document.createElement('ul');
    li.appendChild(ul);
    ul.classList.toggle('menu-vertical');
   
    menu_horizontal.appendChild(ul);


    for (let j = 1; j < tabla[i].length; j++) {
        if (tabla[i][j] == tabla[0][j]) {
            asignar(i,j,li);
            
        }else if (tabla[i][j] == tabla[1][j]) {
           asignar(i,j ,li);
            }
        else if (tabla[i][j] == tabla[2][j]) {
           asignar(i,j ,li);
            }
        else if (tabla[i][j] == tabla[3][j]) {
           asignar(i,j ,li);
            }
        
        else if (tabla[i][j] == tabla[4][j]) {
           asignar(i,j ,li);
           }
        else if (tabla[i][j] == tabla[5][j]) {
           asignar(i,j ,li);
            }
            else if (tabla[i][j] == tabla[6][j]) {
                asignar(i,j ,li);
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

