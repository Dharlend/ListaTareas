var Fila = null
function onSubmit() {
    let DataForm = Leer()
    if(DataForm.tar.trim() !== ""){
        if (Fila == null){
            InsertarDatos(DataForm)
        } else{
            Actualizar(DataForm)
            Vaciar()
        }
        mostrarTabla();
    }
}

function mostrarTabla(){
    const tablaContainer= document.getElementById("tableContainer");
    tablaContainer.style.display = "block";
}

function Leer() {
    let DataForm = {}
    DataForm["tar"] = document.getElementById("tar").value
    return DataForm
}
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.tar
    columna3 = Fila.insertCell(1).innerHTML = `<input class="submit" type="button" onClick="Editarr(this)" value="Editar" >
                                            <input class="submit" type="button" onClick="Borrarr(this)" value="Borrar" >`
    document.getElementById("tar").focus()
    Vaciar()
    const tablaContainer = document.getElementById("tableContainer");
    tablaContainer.classList.remove("hidden-table");
}
function Vaciar() {
    document.getElementById("tar").value = ""
    Fila = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("tar").value = Fila.cells[0].innerHTML
}
function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.tar
    document.getElementById("tar").focus()
}
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Vaciar()
    }
}
