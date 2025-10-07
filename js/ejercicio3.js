// Comparaciones con booleanos
console.log(false + false); // 0   → false se convierte a 0
console.log(false + true);  // 1   → false=0, true=1
console.log(true + true);   // 2   → 1 + 1

// Comparaciones con arrays
console.log([] === []);     // false → son dos arrays distintos en memoria
console.log([] + []);       // ""    → ambos arrays se convierten a string vacío y se concatenan
console.log([1, 2] + [3, 4]); // "1,23,4" → arrays a string: "1,2" + "3,4"
console.log([1] + 1);       // "11" → [1] → "1", luego "1" + "1"
console.log([1] - 1);       // 0   → [1] → "1" → número 1, 1 - 1 = 0

// Comparaciones con objetos
console.log({} + {});       // "[object Object][object Object]" 
console.log({} === {});     // false → objetos distintos en memoria
console.log([] === {});     // false → tipos diferentes

// Comparaciones especiales
console.log(null + 1);      // 1   → null se convierte a 0
console.log(undefined + 1); // NaN → undefined no se convierte a número válido
console.log(null == 0);     // false → null solo es igual a undefined
console.log(null <= 0);     // true  → null → 0, y 0 <= 0
console.log(undefined == null); // true → regla especial del ==

// Operaciones con NaN
console.log(NaN + 1);       // NaN
console.log(NaN == NaN);    // false → NaN nunca es igual a nada, ni a sí mismo
console.log(NaN === NaN);   // false → mismo motivo
