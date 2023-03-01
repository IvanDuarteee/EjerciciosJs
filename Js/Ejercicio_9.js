// Ejercicio_9

// Escribe un programa que pida una frase y escriba las vocales que aparecen

let palabra = prompt("Escribe una frase y verás las vocales que tiene: ");
let palabra1 = palabra.length;
let i;
for (i = 0; i < palabra1; i++) {
if (palabra.charAt(i,1) == "a" || palabra.charAt(i,1) == "e" || palabra.charAt(i,1) == "i" || palabra.charAt(i,1) == "o" || palabra.charAt(i,1) == "u") {
document.write(palabra.charAt(i));
}
}
