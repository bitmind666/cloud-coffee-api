function calcularPromo() {
    const precio = parseFloat(document.getElementById('precio').value);
    const tipo = document.getElementById('tipo').value;
    let descuento = 0;

    if (tipo === 'estudiante') descuento = 0.10;
    else if (tipo === 'cumple') descuento = 0.15;

    const total = precio - (precio * descuento);
    document.getElementById('resultado').textContent = `Total con descuento: $${total.toFixed(2)}`;
}