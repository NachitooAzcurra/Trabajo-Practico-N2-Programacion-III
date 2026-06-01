const productos = [
    { nombre: "Manzana", categoria: "fruta" },
    { nombre: "Banana", categoria: "fruta" },
    { nombre: "Pera", categoria: "fruta" },
    { nombre: "Pan", categoria: "otro" },
    { nombre: "Leche", categoria: "otro" },
    { nombre: "Queso", categoria: "otro" }
];

const contenedor = document.getElementById("contenedor");

function mostrarProductos(lista) {

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        contenedor.innerHTML += `
            <div class="caja">
                ${producto.nombre}
            </div>
        `;
    });
}

mostrarProductos(productos);

document.getElementById("todos").addEventListener("click", () => {
    mostrarProductos(productos);
});

document.getElementById("frutas").addEventListener("click", () => {

    const frutas = productos.filter(producto => {
        return producto.categoria === "fruta";
    });

    mostrarProductos(frutas);
});