function appBar(){
    let lista = [
        ["inicio","index.html",[]],
        ["camisas","camisas.html",[]],
        ["sastreria","sastreria.html",[]],
        ["pantalones","pantalones.html",[]],
        ["hombre","hombre.html",[]],
        ["mujer","mujer.html",[]],
        ["sobre nosotros","sobreNosotros.html",[]],
        ["contacto","contacto.html",[]],

        
    ]
    let body = document.getElementById("body");
    let logo = document.createElement("div");
    logo.classList.toggle("logo");
    let logoImage = document.createElement("img");
    logoImage.classList.toggle("logoImage");
    logoImage.src = "/images/images.png";
    logo.appendChild(logoImage);
    body.appendChild(logo);
    let navigator = document.createElement("div");
    navigator.classList.toggle("navegacion");
    navigator.setAttribute("id","navegacion");
    let nav = document.createElement("nav");
    let ul = document.createElement("ul");
    navigator.appendChild(nav);
    nav.appendChild(ul);
    for (let i = 0; i < lista.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        li.appendChild(a); 
        a.href = lista[i][1];
        a.innerText = (lista[i][0]).toUpperCase;
        let span = document.createElement("span");
        span.classList.toggle("icon icon-up-dir");
        let subMenu = document.createElement("div");
        let subMenuItems = document.createElement("div");
        a.appendChild(subMenu);
        subMenu.appendChild(subMenuItems);
        subMenuItems.appendChild(document.createElement("p").innerText = (lista[i][0]).toUpperCase);
        let subMenuItemsList = document.createElement();

}}