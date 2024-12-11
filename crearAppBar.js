let barras = document.getElementById("barraNavegacion");
let barras2 = document.getElementById("barraNavegacion2");

const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");

const botonMenuDiv = document.createElement("div");
botonMenuDiv.classList.add("botonMenu");
botonMenuDiv.id = "navBarButton";
botonMenuDiv.innerHTML = '<i class="bi bi-list"></i>';

const logoLink = document.createElement("a");
logoLink.href = "/home/index.html";
logoLink.classList.add("logoImageMovil");

const logoImage = document.createElement("img");
logoImage.classList.add("logoImage");
logoImage.src = "/images/images.png";
logoImage.alt = "Logo";

logoLink.appendChild(logoImage);
logoDiv.appendChild(botonMenuDiv);
logoDiv.appendChild(logoLink);

const navegacionDiv = document.createElement("div");
navegacionDiv.classList.add("navegacion");
navegacionDiv.id = "navegacion";

const botonMenuMovilDiv = document.createElement("div");
botonMenuMovilDiv.classList.add("botonMenubotonMenu");

const nav = document.createElement("nav");

const navegacionMovilDiv = document.createElement("div");
navegacionMovilDiv.classList.add("navegacionMovil");

const imagenNavegacionMovil = document.createElement("img");
imagenNavegacionMovil.classList.add("imagenNavegacionMovil");
imagenNavegacionMovil.src = "/images/images.png";
imagenNavegacionMovil.alt = "ImagenLogo";

const h1Nav = document.createElement("h1");
h1Nav.id = "navBarButtonClose";
h1Nav.innerHTML = '<i class="bi bi-x"></i>';

navegacionMovilDiv.appendChild(imagenNavegacionMovil);
navegacionMovilDiv.appendChild(h1Nav);

const ul = document.createElement("ul");

// Lista de elementos de la navegación
const items = [
    { 
        href: "/home/index.html", 
        text: "INICIO" 
    },
    {
        href: "/hombre/hombre.html",
        text: "HOMBRE",
        subcategories:[
        {
            href: "../camisas/camisas.html",
            text: "CAMISAS"
        },
        {
            href: "../pantalones/pantalones.html",
            text: "PANTALONES"
        },
        {
            href: "../sastreria/sastreria.html",
            text: "SASTRERIA"
        },
        {
            href: "../calzado/calzado.html",
            text: "CALZADO"
        },
        {
            href: "../abrigos/abrigos.html",
            text: "ABRIGOS"
        }
        ]
    },
   
    { 
        href: "/mujer/mujer.html", 
        text: "MUJER" 
    },
    {
        href: "../accesorios/accesorios.html",
        text: "ACCESORIOS"
    },
    { 
        href: "/sobreNosotros.html", 
        text: "QUIENES SOMOS" 
    },
    { 
        href: "/contacto/contacto.html", 
        text: "CONTACTO" 
    }
];
item_selected = "";


 


// Crear elementos de la lista y añadirlos al DOM
items.forEach(item => {
    
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.addEventListener("click", () => {item_selected = item.text});
    a.href = item.href;

    const span = document.createElement("span");
    span.classList.add("icon", "icon-up-dir");
    a.appendChild(document.createTextNode(item.text)); // Insertar el texto del elemento
    a.appendChild(span);
    li.appendChild(a);

    if (item.subcategories) {
        const divSubmenu = document.createElement("div");
        divSubmenu.classList.add("submenu");
        
        const divSubmenuItems = document.createElement("div");
        divSubmenuItems.classList.add("submenu-items");
      

        const ulSubmenu = document.createElement("ul");
        item.subcategories.forEach(subItem => {
            const subLi = document.createElement("li");
            const subA = document.createElement("a");
            subA.href = subItem.href;
            subA.textContent = subItem.text;
            subLi.appendChild(subA);
            ulSubmenu.appendChild(subLi);
        });

        divSubmenuItems.appendChild(ulSubmenu);
        divSubmenu.appendChild(divSubmenuItems);
        li.appendChild(divSubmenu);
    }

    ul.appendChild(li);
});

nav.appendChild(navegacionMovilDiv);
nav.appendChild(ul);

navegacionDiv.appendChild(botonMenuMovilDiv);
navegacionDiv.appendChild(nav);

barras.appendChild(logoDiv);
barras2.appendChild(navegacionDiv);
