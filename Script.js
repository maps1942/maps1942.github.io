function MostrarCaja(){
    let caja= {
        tamanio: document.getElementById("sltTamanio").value,
        mensajeExterno: document.getElementById("txtMensajeExterno").value,
        producto: document.getElementById("iptProducto").value,
        mensajeInterno:document.getElementById("txtMensajeInterno").value,
        color: document.getElementById("sltColor").value
    }

    console.log(caja);
}
