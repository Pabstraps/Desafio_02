//Se importa la clase
const ProductManager = require("./ProductManager.js");
let productManager = new ProductManager(); 

//Funcion para agregar, actualizar,encontrar por ID y eliminar productos
let agregarProducto = async () => {
    await productManager.addProduct("Consola PS5", "Version Standard 815GB", 10500, "http://ps5.jpg", 784469513878, 12);
    await productManager.addProduct("Control Xbox Series", "Carbon Black", 1200, "http://controlXbox.jpg", 484184887665, 5);

    let productos = await productManager.getProducts();
    console.log(`Productos encontrados en Product manager: ${productos.length}`);
    console.log(productos);

    let actualizarProducto = await productManager.updateProduct(1, 'price', 9700);
    console.log("Se ha actualizado el siguiente producto:");
    console.log(actualizarProducto);

    let productoEncontrado = await productManager.getProductById(2);
    console.log('Producto encontrado:');
    console.log(productoEncontrado);

    let productoEliminado = await productManager.deleteProduct(1);
    console.log(`Producto con ID ${productoEliminado} eliminado.`);
    
    productos = await productManager.getProducts();
    console.log(`Productos después de eliminar uno: ${productos.length}`);
    console.log(productos);
}

agregarProducto();