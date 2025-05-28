class Producto{
    //Incializamos las propiedades
    constructor(id, nombre, precio){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
    //Creamos nuestro metodo.
    mostrarDetalles(){
        return `${this.nombre} cuesta Q${this.precio}`;
    }
}

class Carrito{
    constructor(){
        this.productos=[]
    }
    //Metodo para agregar producto
    agregarProducto(producto){
        this.productos.push(producto);
    }
    //Metodo para calcular el total
    calcular(){
        return this.productos.reduce((total, pre) => total+pre.precio, 0);
    }
    //Metodo para mostrar en lista los productos
    listaProductos(){
        return this.productos.map(pre =>`<li>${pre.mostrarDetalles()}</li>`).join("");
    }
}
//Vector
const productosDisponibles = [
    new Producto(1, "Galaxy Tab S10 FE Plus",4999),
    new Producto(2, "Galaxy S25 Ultra", 14999),
    new Producto(3, "Galaxy S23+", 11999),
    new Producto(4, "Galaxy Z Flip6", 19999),
    new Producto(5, "Galaxy S24 Ultra", 14999),
    new Producto(6, "Samsung Neo QLED 8K", 29999),
    new Producto(7, "Samsung Neo QLED 4K", 17999),
    new Producto(8, "Refrigerador Samsung", 8999),
    new Producto(9, "Refrigerador Samsung", 9499),
    new Producto(10, "Bombilla Inteligente Samsung", 299),
];

const carrito = new Carrito();

//Crear funcion
function agregarAlCarrito(id){
    const producto = productosDisponibles.find(pro => pro.id === id);
    if (producto) {
        carrito.agregarProducto(producto);
        actualizarCarrito();
    } else {
        alert("Producto no encontrado.");
    }
}

function actualizarCarrito(){
    document.getElementById("listaProductos").innerHTML = carrito.listaProductos();
    document.getElementById("total").textContent = carrito.calcular();
}