
// ======================================
// PISTON&PIXEL - FUNCIONAMIENTO
// ======================================

// Categorías principales de la galería

const categories = [
    {
        name: "Motor",
        description: "Automóviles, motocicletas y cultura del motor.",
        icon: "🏎️"
    },
    {
        name: "Travel",
        description: "Ciudades, viajes y lugares por descubrir.",
        icon: "🌍"
    },
    {
        name: "Nature",
        description: "Paisajes, naturaleza y fotografía exterior.",
        icon: "🏔️"
    },
    {
        name: "Moments",
        description: "Personas, recuerdos y momentos especiales.",
        icon: "📷"
    }
];

// Seleccionamos el espacio donde aparecerán las categorías

const gallery = document.getElementById("gallery");

// Creamos una tarjeta para cada categoría

categories.forEach(category => {

    const card = document.createElement("div");

    card.style.backgroundColor = "#ffffff";
    card.style.padding = "45px 20px";
    card.style.borderRadius = "8px";
    card.style.border = "1px solid #e5e5e5";
    card.style.textAlign = "center";
    card.style.cursor = "pointer";
    card.style.transition = "transform 0.3s";

    // Icono

    const icon = document.createElement("div");
    icon.textContent = category.icon;
    icon.style.fontSize = "42px";
    icon.style.marginBottom = "15px";

    // Nombre de la categoría

    const title = document.createElement("h3");
    title.textContent = category.name;
    title.style.marginBottom = "10px";
    title.style.color = "#202020";

    // Descripción

    const description = document.createElement("p");
    description.textContent = category.description;
    description.style.color = "#777";
    description.style.fontSize = "14px";

    // Añadimos los elementos a la tarjeta

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(description);

    // Añadimos la tarjeta a la galería

    gallery.appendChild(card);

});
