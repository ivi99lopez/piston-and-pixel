
// ======================================
// PISTON&PIXEL - FUNCIONAMIENTO
// ======================================

const categories = [
    {
        name: "Motor",
        description: "Automóviles, motocicletas y cultura del motor.",
        icon: "🏎️",
        link: "https://eu.zonerama.com/Link/Open/6af0634daa781422dc3f63d1"
    },
    {
        name: "Travel",
        description: "Ciudades, viajes y lugares por descubrir.",
        icon: "🌍",
        link: "https://eu.zonerama.com/Link/Open/6af06398aa781422dc3f7e36"
    },
    {
        name: "Nature",
        description: "Paisajes, naturaleza y fotografía exterior.",
        icon: "🏔️",
        link: "https://eu.zonerama.com/Link/Open/6af0638daa781422dc3f7bba"
    },
    {
        name: "Moments",
        description: "Personas, recuerdos y momentos especiales.",
        icon: "📷",
        link: "https://eu.zonerama.com/Link/Open/6af0637eaa781422dc3f734a"
    }
];

const gallery = document.getElementById("gallery");

categories.forEach(category => {

    const card = document.createElement("div");
    card.style.backgroundColor = "#ffffff";
    card.style.padding = "45px 20px";
    card.style.borderRadius = "8px";
    card.style.border = "1px solid #e5e5e5";
    card.style.textAlign = "center";
    card.style.cursor = "pointer";
    card.style.transition = "transform 0.3s";

    // Abrir el álbum correspondiente
    card.addEventListener("click", () => {
        window.open(category.link, "_blank", "noopener,noreferrer");
    });

    // Icono
    const icon = document.createElement("div");
    icon.textContent = category.icon;
    icon.style.fontSize = "42px";
    icon.style.marginBottom = "15px";

    // Nombre
    const title = document.createElement("h3");
    title.textContent = category.name;
    title.style.marginBottom = "10px";
    title.style.color = "#202020";

    // Descripción
    const description = document.createElement("p");
    description.textContent = category.description;
    description.style.color = "#777";
    description.style.fontSize = "14px";

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(description);

    gallery.appendChild(card);
});

