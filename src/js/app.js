export const main = () => {
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
        if (event.target.classList.contains("borrar-producto")) {
            const id = event.target.getAttribute("data-id")
            eliminarProductoDelCarrito(id)
        }
    })

    vaciarCarrito.addEventListener('click', function () {
        localStorage.clear()
        listarProductosDelCarrito()
    })

    function agregarProductosAlCarrito(id, card) {
        let precioNumerico = card.querySelector(".precio span").textContent
        precioNumerico = Number(precioNumerico.slice(1))

        const producto = {
            id: id,
            titulo: card.querySelector("h4").textContent,
            imagen: card.querySelector(".imagen-curso").src,
            cantidad: 1,
            precio: precioNumerico
        }

        const busquedaProducto = productosCarrito.find(element => element.id === producto.id)

        if (busquedaProducto === undefined) {
            productosCarrito.push(producto)
        } else {
            busquedaProducto.cantidad++
        }

        localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito))
        listarProductosDelCarrito()
    }

    function eliminarProductoDelCarrito(id) {
        let productosNube = JSON.parse(localStorage.getItem("productosCarrito"))
        productosNube = productosNube.filter(element => element.id !== id)
        localStorage.setItem("productosCarrito", JSON.stringify(productosNube))
        listarProductosDelCarrito()
    }

    function listarProductosDelCarrito() {
        const productosNube = JSON.parse(localStorage.getItem("productosCarrito"))
        tbodyCarrito.innerHTML = ""
        productosNube.forEach(function (producto) {
            tbodyCarrito.innerHTML += `
            <tr>
                <td>
                    <img height="100" src="${producto.imagen}"/>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.cantidad}</td>
                <td>$${producto.precio*producto.cantidad}</td>
                <td>
                    <button class="borrar-producto btn btn-danger" data-id="${producto.id}">Eliminar</button>
                </td>
            </tr>
        `;
        })
    }

    listarProductosDelCarrito()
}

main()