let productosCarrito = []
const listaProductos = document.getElementById("lista-productos")
const carrito = document.getElementById("carrito")
const vaciarCarrito = document.getElementById("vaciar-carrito")
const tbodyCarrito = document.querySelector("#lista-carrito tbody")

listaProductos.addEventListener('click', function (event) {
    if (event.target.classList.contains("agregar-carrito")) {
        const id = event.target.getAttribute("data-id")
        const card = event.target.parentElement.parentElement
        agregarProductosAlCarrito(id, card)
    }
})

carrito.addEventListener('click', function (event) {
    alert("diste click al carrito")
})

vaciarCarrito.addEventListener('click', function (event) {
    alert("diste click a vaciar carrito")
})

function agregarProductosAlCarrito(id, card) {
    const producto = {
        id: id,
        titulo: card.querySelector("h4").textContent,
        imagen: card.querySelector(".imagen-curso").src,
        precio: card.querySelector(".precio span").textContent,
        cantidad: 1,
    }

    const busquedaProducto = productosCarrito.find(element => element.id === producto.id)

    if (busquedaProducto === undefined) {
        productosCarrito.push(producto)
    } else {
        busquedaProducto.cantidad++
    }

    listarProductosDelCarrito()
}


function listarProductosDelCarrito() {
    tbodyCarrito.innerHTML = ""
    productosCarrito.forEach(function (producto) {
        tbodyCarrito.innerHTML += `
            <tr>
                <td>
                    <img height="100" src="${producto.imagen}"/>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
                <td>
                    <button class="eliminar-producto btn btn-danger" data-id="${producto.id}">Eliminar</button>
                </td>
            </tr>
        `;
    })
}