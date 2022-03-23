function checaTriangulo(a: number, b: number, c: number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
}

console.log(checaTriangulo(2, 2, 2))
console.log(checaTriangulo(2, 3, 3))
console.log(checaTriangulo(1, 2, 2))