let barras = document.getElementById("barraNavegacion");




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

// Añadir elementos al DOM
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
    { href: "/home/index.html", text: "INICIO" },
    { href: "/camisas/camisas.html", text: "CAMISAS" },
    { href: "/sastreria/sastreria.html", text: "SASTRERIA" },
    { href: "/pantalones/pantalones.html", text: "PANTALONES" },
    { href: "/hombre/hombre.html", text: "HOMBRE" },
    { href: "/mujer/mujer.html", text: "MUJER" },
    { href: "/sobreNosotros.html", text: "SOBRE NOSOTROS" },
    { href: "/contacto/contacto.html", text: "CONTACTO" }
];

// Crear elementos de la lista y añadirlos al DOM
items.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    const span = document.createElement("span");
    span.classList.add("icon", "icon-up-dir");
    a.appendChild(span);
    li.appendChild(a);
    ul.appendChild(li);
});

// Añadir elementos al DOM
nav.appendChild(navegacionMovilDiv);
nav.appendChild(ul);

navegacionDiv.appendChild(botonMenuMovilDiv);
navegacionDiv.appendChild(nav);

// Agregar elementos al cuerpo del documento
barras.appendChild(logoDiv);
barras.appendChild(navegacionDiv);
