function mostraTipo(tipo : string | boolean | number) : string {
    return typeof(tipo)
}
console.log(mostraTipo(2))
console.log(mostraTipo("azul"))
console.log(mostraTipo(false))