let video = document.getElementById('video');
let body = document.getElementById("body");

const menu = document.getElementById("menu");
const navBarButtonClose = document.getElementById("navBarButtonClose");
const navegacion = document.getElementById("navegacion");
function desaparecer() {
    location.href = "/home/index.html"
}
// Función para crear el menú dinámicamente
function createMenu(menuData) {
    const ul = document.createElement("ul");

    menuData.forEach(option => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = option.name;

        // Verificar si tiene subopciones
        if (option.suboptions && option.suboptions.length > 0) {
            const submenu = document.createElement("ul");
            submenu.classList.add("submenu");

            option.suboptions.forEach(suboption => {
                const subLi = document.createElement("li");
                const subA = document.createElement("a");
                subA.textContent = suboption;
                subA.href = `#`; // Add appropriate links
                subLi.appendChild(subA);
                submenu.appendChild(subLi);
            });

            li.appendChild(submenu);

            // Agregar evento para desplegar/ocultar submenú
            a.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                li.classList.toggle("open");
            });
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    menu.appendChild(ul);
}

// Menú de datos
const menuData = [
    { name: "Inicio", href: "/home/index.html", suboptions: [] },
    {
        name: "Hombre",
        href: "/hombre/hombre.html",
        suboptions: [
            "Camisas",
            "Pantalones",
            "Sastreria",
            "Calzado",
            "Abrigos"
        ]
    },
    { name: "Mujer", href: "/mujer/mujer.html", suboptions: [] },
    { name: "Accesorios", href: "../accesorios/accesorios.html", suboptions: [] },
    { name: "Quienes somos", href: "/sobreNosotros.html", suboptions: [] },
    { name: "Contacto", href: "/contacto/contacto.html", suboptions: [] }
];

// Generar el menú dinámicamente
createMenu(menuData);

// Función para toglear menú
function toggleMenu() {
    navegacion.classList.toggle('navegacion-visible');
    body.classList.toggle('menu-open');
}

// Evento para mostrar/ocultar el menú
menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Evento para cerrar menú
navBarButtonClose.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Ocultar el menú al hacer clic fuera de él
document.addEventListener("click", (e) => {
    if (!navegacion.contains(e.target) && !menuButton.contains(e.target)) {
        navegacion.classList.remove('navegacion-visible');
        body.classList.remove('menu-open');
    }
});

// Cerrar menú cuando se selecciona un elemento
menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navegacion.classList.remove('navegacion-visible');
        body.classList.remove('menu-open');
    }
});