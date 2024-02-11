// Definimos una clase para representar una venta
class Venta {
    constructor(id, cliente, total, detalles) {
      this.id = id;
      this.cliente = cliente;
      this.total = total;
      this.detalles = detalles;
    }
  }
  
  // Función para generar ventas aleatorias
  function generarVenta(id) {
    const clientes = ["Juan", "María", "Pedro", "Laura"];
    const total = Math.floor(Math.random() * 1000) + 1; // Total aleatorio entre 1 y 1000
    const cantidadDetalles = Math.floor(Math.random() * 5) + 1; // Entre 1 y 5 detalles
    const detalles = [];
    for (let i = 0; i < cantidadDetalles; i++) {
      const producto = "Producto " + (i + 1);
      const precio = Math.floor(Math.random() * 100) + 1; // Precio aleatorio entre 1 y 100
      const cantidad = Math.floor(Math.random() * 10) + 1; // Cantidad aleatoria entre 1 y 10
      detalles.push({ producto, precio, cantidad });
    }
    const cliente = clientes[Math.floor(Math.random() * clientes.length)]; // Seleccionar cliente aleatorio
    return new Venta(id, cliente, total, detalles);
  }
  
  // Función para generar n ventas
  function generarVentas(n) {
    const ventas = [];
    for (let i = 1; i <= n; i++) {
      ventas.push(generarVenta(i));
    }
    return ventas;
  }
  
  // Ejemplo de uso: generar 5 ventas
  const ventas = generarVentas(5);
  console.log(ventas);
  