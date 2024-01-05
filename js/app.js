let productosCarrito = [{
    id: "1",
    titulo: undefined,
    imagen: undefined,
    precio: undefined,
    cantidad: 1,
}]
const listaProductos = document.getElementById("lista-productos")
const carrito = document.getElementById("carrito")
const vaciarCarrito = document.getElementById("vaciar-carrito")

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

    if (busquedaProducto) {
        busquedaProducto.cantidad++
    } else {
        productosCarrito.push(producto)
    }
}